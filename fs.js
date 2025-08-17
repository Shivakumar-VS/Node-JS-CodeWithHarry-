const fs = require('fs');

// fs.readFile('file.txt', 'utf-8', (err, data)=>{
//     console.log(err, data);
// });

// const a = fs.readFileSync('file.txt');
// console.log(a.toString());
// const b = fs.readFileSync('file.txt');
// console.log(b);

// fs.writeFile("file.txt", "This is a file", ()=>{
//     console.log("Written to the file");
// });

const a = fs.writeFileSync("file.txt", "This is a file")
    console.log(a);

console.log("finished reading file");
