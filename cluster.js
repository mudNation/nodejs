const cluster = require("node:cluster"); 
const http = require("node:http"); 
const os = require("node:os"); 

console.log(os.cpus().length)

if(cluster.isMaster){
    console.log(`Master process ${process.pid}`)
    cluster.fork(); 
    cluster.fork(); 
}else{
    console.log(`Worker process ${process.pid}`); 
    const server = http.createServer((req, res) => {
        if(req.url === "/"){
            res.writeHead(200, {"content-type": "text/plain"})
            res.end("Home Page")
        }else if (req.url="/slow-page"){
            for(let i = 0; i < 6000000000; i++){}
            res.writeHead(200, {"content-type": "text/plain"}); 
            res.end("Slow Page"); 
        }
    })
    
    server.listen(8000, () => console.log("server listening on port 80000"))
}