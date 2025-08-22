const fs = require('fs');
fs.writeFile("output.txt", "Writing into a file", (err) =>{
    if (err) console.log("Error occurred");
    else console.log("File written successfully")
});

