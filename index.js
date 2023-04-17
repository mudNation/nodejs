const fs = require("node:fs"); 

const readableStream = fs.createReadStream(__filename, {encoding: "utf-8"}); 
// readableStream.close(); 

// readableStream.on("close", ()=>console.log("close log"))
// setTimeout(() => {
//     console.log("set time out"); 
// }, 0);
// // fs.readFile(__filename, () => console.log("this is readfile"))
// Promise.resolve().then(() => console.log("promise log"))
// process.nextTick(() => console.log("next tick log"))


// readableStream.read((data) => console.log("data"))

readableStream.on("data", (data)=>{
    console.log("abc")
})