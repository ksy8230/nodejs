const http = require('http');
// const http2 = require('http2'); // 모든 브라우저에서 https로 적용된다 -> 개발 단계에서는 복잡하므로 http로 실습하자

console.log(http.STATUS_CODES);
console.log(http.METHODS);

const server = http.createServer((req, res) => {
    console.log('incomming...', req, res);
    console.log(req.httpVersion);
    res.write('Welcome!');
    res.end();
});

server.listen(8080);