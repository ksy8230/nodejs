const http = require('http');
// const http2 = require('http2'); // 모든 브라우저에서 https로 적용된다 -> 개발 단계에서는 복잡하므로 http로 실습하자
const fs = require('fs');
 
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
    
    const url = req.url; // what
    const method = req.method; // how
    
    if (url === '/courses') {

        if (method === 'GET') {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(courses));
        } else if (method === 'POST') {
            const body = [];
            req.on('data', chunk => {
                console.log("chunk", chunk);
                body.push(chunk);   
            });
            req.on('end', () => {
                const course = JSON.parse(Buffer.concat(body).toString());
                courses.push(course);
                console.log("course", course);
                res.writeHead(201);
                res.end();
            });
        }

    } 

});

server.listen(8080);

/**
 * 😶단점 : 코드가 지저분하다, 데이터가 비영구적이다
 */