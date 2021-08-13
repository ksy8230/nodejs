import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';

const app = express();

app.all('/api/*', (req, res, next) => {
    console.log('all');
    next();
});

app.use('/apple', (req, res, next) => {
    console.log('apple');
    next();
});
app.use(express.json());

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

// 동기 처리
app.get('/file1', (req, res, next) => {
    try {
        const data = fs.readFileSync('/file.txt');
        res.send(data);
    } catch (e) {
        res.sendStatus(404);
    }
});

// promise
app.get('/file2', (req, res) => {
    fsAsync
    .readFile('/file2.txt')
    .then((data) => res.send(data))
    .catch((err) => res.sendStatus(404));
});

// await
app.get('/file3', async (req, res) => {
    try {
        const data = await fsAsync.readFile('/file3.txt');
        res.send(data);
    }
     catch (error) {
        res.sendStatus(404);
     }
});

app.post('/', (req, res, next) => {
    console.log(req.body);
});

app.use((req, res, next) => {
    res.status(404).send('Not available! @_@'); // 알 수 없는 경로 처리
});

app.use((err, req, res, next) => {
    res.status(500).json({ message: 'Something went wrong!' }); // 에러처리
});

app.listen(8080, () => {
    console.log('server is runninng... ❤');
});