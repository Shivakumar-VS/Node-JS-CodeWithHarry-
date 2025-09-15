const http = require('http');


const server = http.createServer((req, res) =>{
    console.log(req.url, req.method, req.headers);

    if(req.url==='/')
    {
        res.setHeader('content-type','text/html')
    res.write(`<html>`);
    res.write(`<head><title>Complete Coding</title><head>`);
    res.write(`<body><h1>Welcome to home</h1></body>`);
    res.write(`</html>`);
    return res.end();
    }
    else if(req.url==='/products')
    {
        res.setHeader('content-type','text/html')
    res.write(`<html>`);
    res.write(`<head><title>Complete Coding</title><head>`);
    res.write(`<body><h1>checkout our products</h1></body>`);
    res.write(`</html>`);
    return res.end();
    }
    else
    {
        res.setHeader('content-type','text/html')
    res.write(`<html>`);
    res.write(`<head><title>Complete Coding</title><head>`);
    res.write(`<body><h1>Like Share Subscribe</h1></body>`);
    res.write(`</html>`);
    res.end();
    }
});

const PORT = 3000
server.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});