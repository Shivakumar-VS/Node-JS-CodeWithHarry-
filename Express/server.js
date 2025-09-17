const fs = require('fs');

const requestHandler = (req, res) => {
    console.log(req.url, req.method);

    if (req.url === '/' && req.method === 'GET') {
        res.setHeader('Content-Type', 'text/html'); 

        res.write(`<h1>Welcome to Home page</h1>`);
        res.write(`<form action="/submit-details" method="POST">`);
        res.write(`<h2>Submit your details</h2>`);
        res.write(`<input type="text" name="username" placeholder="Enter your name" required><br>`);
        res.write(`<label>Gender:</label><br>`);
        res.write(`<input type="radio" id="Male" name="gender" value="Male" required>`);
        res.write(`<label for="Male">Male</label><br>`);
        res.write(`<input type="radio" id="Female" name="gender" value="Female">`);
        res.write(`<label for="Female">Female</label><br><br>`);
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

            console.log('Form submission:', bodyObject);

            fs.writeFile('user.txt', JSON.stringify(bodyObject, null, 2), (err) => {
                if (err) {
                    console.error('Error writing to file:', err);
                } else {
                    console.log('User details saved.');
                }
            });

            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }

    else {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>`);
        res.write(`<head><title>Complete Coding</title></head>`);
        res.write(`<body><h1>Like, Share, Subscribe</h1></body>`);
        res.write(`</html>`);
        return res.end();
    }
};

module.exports = { requestHandler };
