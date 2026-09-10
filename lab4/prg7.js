import http from 'http';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url == "/api/users" && req.method == "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "" }));
    
    }
    else if (req.url == "/api/users" && req.method == "POST") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "POST request received for /api/users" }));
    }
    else if (req.url == "/api/users" && req.method == "PUT") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "PUT request received for /api/users" }));
    }
    else if (req.url == "/api/users" && req.method == "DELETE") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "DELETE request received for /api/users" })); 
    }
    else{
        res.statusCode = 404;
        res.end(JSON.stringify({ message: "Not Found" }));
    }
});


server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
