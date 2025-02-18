// node server.js 3001 &
// node server.js 3002 &
// node server.js 3003 &
// node server.js 3004 &

const http = require('http');

const port = process.argv[2] || 3001; // Take port from CLI argument

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <html>
            <body style="background-color: white;">
                <h1>Hello From Server on Port ${port}</h1>
            </body>
        </html>
    `);
});

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
