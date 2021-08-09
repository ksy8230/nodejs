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
        
    
    // res.end(); -> pipe는 비동기 처리를 하므로 여기에 end를 호출하면 res가 불러와지기 전에 end가 호출되어버린다
});

server.listen(8080);