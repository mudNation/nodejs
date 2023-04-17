const http = require("http"); 

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "text/plain"})
    res.end("Samuel has a small Dick!"); 
})

const PORT = process.env.PORT || 3000; 

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`))