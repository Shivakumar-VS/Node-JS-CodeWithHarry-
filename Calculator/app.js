const http = require('http');
const {requestHandler} = require('./handler');

const server = http.createServer(requestHandler);

server.listen(3000, () => {
  console.log('Server is listening on port http://localhost:3000');
}); 