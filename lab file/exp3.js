// HTTP server
const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(`Request received: ${req.method} ${req.url}`);

    // Set status code and headers
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('X-Powered-By', 'Node.js');

    res.end('hello everyone !');
});

server.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});
