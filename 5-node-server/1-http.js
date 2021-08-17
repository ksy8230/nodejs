const http = require('http');
// const http2 = require('http2'); // 모든 브라우저에서 https로 적용된다 -> 개발 단계에서는 복잡하므로 http로 실습하자
const fs = require('fs');

// console.log(http.STATUS_CODES);
// console.log(http.METHODS);

const server = http.createServer((req, res) => {
    console.log('incomming...', req, res);
    console.log(req.httpVersion);
    const url = req.url;
    res.setHeader('Content-type', 'text/html');

    if(url === '/') {

        fs.createReadStream('./html/index.html').pipe(res);

    } else if (url === '/courses') {

        res.write('this is Courses');

    } else {

        res.write('Not Found');

    }
    
    // res.end(); -> pipe는 비동기 처리를 하므로 여기에 end를 호출하면 res가 불러와지기 전에 end가 호출되어버린다
});

server.listen(8080);