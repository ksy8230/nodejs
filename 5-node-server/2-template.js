const http = require('http');
// const http2 = require('http2'); // 모든 브라우저에서 https로 적용된다 -> 개발 단계에서는 복잡하므로 http로 실습하자
const fs = require('fs');
const ejs = require('ejs');

// console.log(http.STATUS_CODES);
// console.log(http.METHODS);

const name = 'sy';
const courses = [
    {
        name : 'html'
    },
    {
        name : 'js'
    },
    {
        name : 'css'
    },
    {
        name : 'node'
    },
]

const server = http.createServer((req, res) => {
    console.log('incomming...', req, res);
    console.log(req.httpVersion);
    const url = req.url;
    res.setHeader('Content-type', 'text/html');

    if(url === '/') {

        ejs
        .renderFile('./template/index.ejs', { name : name })
        .then(data => res.end(data));

    } else if (url === '/courses') {

        ejs
        .renderFile('./template/course.ejs', { courses : courses, name: name })
        .then(data => res.end(data));

    } else {

        ejs
        .renderFile('./template/notFound.ejs')
        .then(data => res.end(data));

    }
    
    // res.end(); -> pipe는 비동기 처리를 하므로 여기에 end를 호출하면 res가 불러와지기 전에 end가 호출되어버린다
});

server.listen(8080);

/**
 * 😶단점 : html만 전송하는, 즉 브라우저 클라이언트만 사용할 수 있는 서버이다
 * 이 API를 다른 클라이언트가 이용할 수 있도록 만들면 더 좋겠다
 */