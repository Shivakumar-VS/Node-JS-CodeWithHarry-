const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    if (req.url === '/' || req.url === '/Home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<html>`);
        res.write(`<head><title>Home</title></head>`);
        res.write(`<body><h1>Welcome to Home Page</h1></body>`);
        res.write(`</html>`);
        return res.end();
    } else if (req.url === '/Men') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<h1>Men page under construction</h1>`);
    } else if (req.url === '/Women') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<h1>Women page under construction</h1>`);
    } else if (req.url === '/Kids') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<h1>Kids page under construction</h1>`);
    } else if (req.url === '/Cart') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<h1>Cart page under construction</h1>`);
    } else if (req.url === '/Myntra') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<html>`);
        res.write(`<head><title>Myntra</title></head>`);
        res.write(`<body>`);
        res.write(`<h1>Welcome to Myntra</h1>`);
        res.write(`<form action="/submit-details" method="POST">`);
        res.write(`<input type="text" name="username" placeholder="Enter your name" required>`);
        res.write(`<button type="submit">Submit</button>`);
        res.write(`</form>`);
        res.write(`<nav>`);
        res.write(`<a href="/Home">Home</a> | `);
        res.write(`<a href="/Men">Men</a> | `);
        res.write(`<a href="/Women">Women</a> | `);
        res.write(`<a href="/Kids">Kids</a> | `);
        res.write(`<a href="/Cart">Cart</a>`);
        res.write(`</nav>`);
        res.write(`</body>`);
        res.write(`</html>`);
        return res.end();
    } else if (req.url === '/submit-details' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log('Form Data:', body);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`<h1>Thank you for submitting your details!</h1>`);
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - Page Not Found</h1>');
    }
});

// Start server
const PORT = 3000;
server.listen(PORT, () => { 
    console.log(`Server running at http://localhost:${PORT}`);
});