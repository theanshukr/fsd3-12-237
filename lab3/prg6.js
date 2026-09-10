import http from "http";
//craete a single html page with home page  and produyc
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.write("<h1>Home Page</h1>");
        
        res.end();
    }
});

server.listen(3000, () => console.log("prg6 Server runs in 3000..."));