const fs = require('fs');

const data = [];

const readStream = fs.createReadStream('./file.txt', {
    // highWaterMark: 8, // default : 64kbytes
    // encoding: 'utf-8',
}).on('data', chunk => {
    console.count('data');
    data.push(chunk);
}).on('end', () => {
    console.log(data.join(''));
});

readStream.on('error', error => {
    console.error(error);
});