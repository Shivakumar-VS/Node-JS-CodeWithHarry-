const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    
    res.setHeader('Content-Type', "text/html");
    console.log(req.url)
    if(req.url == '/'){
        res.statusCode = 200;
        res.end(`<h1>This is shivakumar</h1>`)
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<p>Heyyyy! I am a software developer</p>')
    }
    else if(req.url == '/hello'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html')
        res.end(data.toString())
    }
    else{
        res.statusCode = 404;
        res.end('<p>Page not found</p>')
    }
});

server.listen(port, ()=> {
    console.log(`server is listening on port: ${port}`)
});