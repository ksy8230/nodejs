const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./file.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./file4.zip');

const piping = readStream.pipe(zlibStream).pipe(writeStream);

piping.on('finish', () => {
    console.log('done!!');
});

const http = require('http');
const server = http.createServer((req, res) => {
    // fs.readFile('./file.txt', (err, data) => {
    //     res.end(data);
    // });
    const stream = fs.createReadStream('./file.txt');
    stream.pipe(res);
});
// 서버에서 파일을 다 읽은 다음에 메모리의 데이터를 응답시키기 보다는
// stream을 이용하여 stream 자체를 파이핑해서 응답시키기


server.listen(3000);