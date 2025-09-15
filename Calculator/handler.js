const { sumRequestHandler } = require('./sum');

const requestHandler = (req, res) => {
    console.log(req.url, req.method);

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
        <html>
        <head><title>Calculator</title></head>
        <body>
            <h1>Welcome to Calculator</h1>
            <a href="/calculator">Go to Calculator</a>
        </body>
        </html>
        `);
        return res.end();
    }

    else if (req.url.toLowerCase() === '/calculator' && req.method === 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
        <html>
        <head><title>Calculator</title></head>
        <body>
            <h1>Calculator</h1>
            <form action="/calculate-result" method="POST">
                <input type="number" name="num1" placeholder="Enter first number" required>
                <input type="number" name="num2" placeholder="Enter second number" required>
                <button type="submit">Calculate</button>
            </form>
        </body>
        </html>
        `);
        return res.end();
    }

    else if (req.url.toLowerCase() === '/calculate-result' && req.method === 'POST') {
        return sumRequestHandler(req, res);
    }

    // 404 page
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
        <head><title>404</title></head>
        <body>
            <h1>404 Page Does Not Exist</h1>
            <a href="/calculator">Go to Calculator</a>
        </body>
        </html>
    `);
    res.end();
};

exports.requestHandler = requestHandler;
