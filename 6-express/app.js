import express from 'express';
const app = express();

app.all('/api/*', (req, res, next) => {
    console.log('all');
    next();
});

app.use('/apple', (req, res, next) => {
    console.log('apple');
    next();
});

app.get('/', 
    (req, res, next) => {
        console.log('first');
        // next('route');
        // next(new Error('error')); // 에러처리
        if(true) {
            return res.send('Hello!'); // 분기에 따라 res.send 보낼 때는 return 처리
        }
        res.send('bye!');
    },
    (req, res, next) => {
        console.log('first2');
    },
);

app.get('/', (req, res, next) => {
    console.log('second');
});

app.use((req, res, next) => {
    res.status(404).send('Not available! @_@'); // 알 수 없는 경로 처리
});

app.use((err, req, res, next) => {
    res.status(500).send('Sorry, try later!'); // 에러처리
});

app.listen(8080, () => {
    console.log('server is runninng... ❤');
});