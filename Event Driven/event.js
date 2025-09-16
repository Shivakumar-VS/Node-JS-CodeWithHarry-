console.log("1. start of script" );
Promise.resolve().then(()=>{
    console.log("2. MicroTask" );
});

setTimeout(() =>{
    console.log("3. Timer Task" );
},1000);

const fs = require('fs');
fs.readFile('use.txt', 'utf-8', ()=> console.log("4. IO operation" ));

setImmediate(() => console.log("5. Immediate Task" ));

process.on("exit", ()=>{
    console.log("6. exit event" );
});

console.log("7. End of script" );