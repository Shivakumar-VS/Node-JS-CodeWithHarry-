const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    if (req.url === '/' && req.method === 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<h1>Welcome to Home page</h1>`);
        res.write(`<form action="/submit-details" method="POST">`);
        res.write(`<h1>Submit your details</h1>`);
        res.write(`<input type="text" name="username" placeholder="Enter your name" required>`);
        res.write(`<label for="gender">Gender:</label>`);
        res.write(`<input type="radio" id="Male" name="gender" value="Male">`);
        res.write(`<label for="Male">Male</label>`);
        res.write(`<input type="radio" id="Female" name="gender" value="Female">`);
        res.write(`<label for="Female">Female</label>`);
        res.write(`<br>`);
        res.write(`<button type="submit">Submit</button>`);
        res.write(`</form>`);
        return res.end();
    }

    else if (req.url.toLowerCase() === '/submit-details' && req.method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });

        req.on('end', () => {
            const buffered = Buffer.concat(body).toString();
            const params = new URLSearchParams(buffered);
            const bodyObject = Object.fromEntries(params);

            console.log(bodyObject); // { username: '...', gender: '...' }
            
            fs.writeFile('user.txt', JSON.stringify(bodyObject, null, 2), (err) =>{
                console.log("Data return successfully");
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            }); // Pretty JSON
        });
    }

    // Fallback route
    else{
    res.setHeader('Content-Type', 'text/html');
    res.write(`<html>`);
    res.write(`<head><title>Complete Coding</title></head>`);
    res.write(`<body><h1>Like Share Subscribe</h1></body>`);
    res.write(`</html>`);
    res.end();
    }
});

server.listen(3000, () => {
    console.log(`Server is running at http://localhost:3000`);
});
