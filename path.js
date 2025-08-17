const path = require('path');

console.log(path.basename('C:\\temp\\myfile.html'));
console.log(path.dirname('C:\\temp\\myfile.html'));
console.log(path.extname('C:\\temp\\myfile.html'));

const a = path.extname(__filename);
console.log(a);



