#!/usr/bin/env node

// const yargs = require('yargs'); 
// const { argv } = yargs(process.argv); 
// console.log(argv); 

const inquirer = require("inquirer"); 

const printFiveMoves = async (name) => {
    // console.log(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`); 
    const pokemon = await response.json(); 
    
    const names = pokemon.moves.map(({ move }) => move.name); 
    const five = names.slice(0, 5); 

    console.log(five); 
}

const prompt = inquirer.createPromptModule(); 
prompt([{
    name: "pokemon",
    type: "input",
    message: "Enter pokemon name to see 5 attacks"
}]).then((answer) => {
    printFiveMoves(answer.pokemon);
})

