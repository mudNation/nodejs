const http = require("node:http"); 
const cluster = require("node:cluster"); 
const { Worker } = require("node:worker_threads"); 

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.writeHead(200, {"content-type": "text/plain"})
        res.end("Home Page"); 
    }else if(req.url === "/slow-page"){
        const worker = new Worker('./worker-thread.js'); 
        worker.on("message", (message) => {
            res.writeHead(200, {"content-type": "text/plain"})
            res.end(`Slow Page ${message}`); 
        })
    }
})

server.listen(8000, () => console.log("Server is listening on port 8000")); 