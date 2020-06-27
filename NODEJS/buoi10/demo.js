let fs = require('fs');
let sub = require('./sub');
console.log(sub(1, 2));
fs.readFile('./data.txt', (err, data) => {
    if(err){
        console.log(err);
    } else {
        console.log(data.toString());
    }
});