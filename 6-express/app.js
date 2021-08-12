import express from 'express';
const app = express();

app.get('/', (req, res, next) => {
    // console.log('server is runninng... ❤');
    res.send('hi');
});

app.listen(8080, () => {
    console.log('server is runninng... ❤');
});