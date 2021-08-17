import express from 'express';
import 'express-async-errors';
import postRouter from './router/post.js';
import userRouter from './router/user.js';

const app = express();

app.use(express.json()); // REST API 에서 Body를 파싱할 때 사용
app.use(express.urlencoded({ extended: false })); // HTML FORM 에서 Body를 파싱할 때 사용

const options = {
    dotfiles: 'ignore',
    maxAge: '1d', // 캐시 기간
    setHeaders : function (res, path, stat) {
        res.set('x-timestamp', Date.now());
    }
};
app.use(express.static('public', options));

app.use('/posts', postRouter);
app.use('/users', userRouter);

app.listen(8080, () => {
    console.log('server is runninng... ❤');
});