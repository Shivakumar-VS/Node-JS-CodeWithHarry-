const http = require('http')

const server = http.createServer((req, res) =>{
    console.log(req.url, req.headers, req.method);

    if (req.url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<!DOCTYPE html>');
    res.write('<body>');
    res.write('<h1>Hello World</h1>');
    res.write('<h2>This is a subheading</h2>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
    }else if(req.url === '/about'){

    res.setHeader('Content-Type', 'text/html');
    res.write('<!DOCTYPE html>');
    res.write('<body>');
    res.write('<h1>About Us</h1>');
    res.write('<h2>Mynthra.com</h2>');
    res.write('</body>');
    res.write('</html>');
    return res.end();

    }
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<!DOCTYPE html>');
    res.write('<body>');
    res.write('<h1>myntra products</h1>');
    res.write('<h2>Shop the latest trends</h2>');
    res.write('</body>');
    res.write('</html>');
    
});
const PORT = 3000;

server.listen(PORT, ()=>{
    console.log(`Server is running at the http://localhost:${PORT}`);
});