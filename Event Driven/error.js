const fs = require('fs');
console.log("1. start of script" );
console.log("2. reading file asynchronously" );
const dataSync = fs.readFileSync('user.txt', 'utf-8');
console.log("3. Synchronous read complete" );
console.log("4. Reading file asynchronously" );
fs.readFile('user.txt', 'utf-8', (err, dataAsync) => {
    if (err) throw err;
    console.log("6. Asynchronous read complete" );
});
console.log("5.End of script" );
