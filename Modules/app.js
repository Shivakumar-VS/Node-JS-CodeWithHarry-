const http = require('http');
const requestHandler = require('../Parsing request/server')
const server = http.createServer(requestHandler)

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`Server running on address http://localhost:${PORT}`);
})                                                                                                                                                                            