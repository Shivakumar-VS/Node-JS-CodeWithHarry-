const sumRequestHandler = (req, res) => {
    console.log('In sum request handler', req.url);
    const body = [];

    req.on('data', (chunk) => {
        body.push(chunk);
    });

    req.on('end', () => {
        const bodyStr = Buffer.concat(body).toString();
        const params = new URLSearchParams(bodyStr);
        const bodyObj = Object.fromEntries(params);

        const num1 = parseInt(bodyObj.num1);
        const num2 = parseInt(bodyObj.num2);
        const result = num1 + num2;

        console.log('Result:', result);

        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
            <head><title>Result</title></head>
            <body>
                <h1>Result: ${result}</h1>
                <a href="/calculator">Back to Calculator</a>
            </body>
            </html>
        `);
        res.end();
    });
};

exports.sumRequestHandler = sumRequestHandler;
