import express from 'express';
import 'express-async-errors';
import postRouter from './router/post.js';
import userRouter from './router/user.js';

const app = express();

app.use(express.json());

app.use('/posts', postRouter);
app.use('/users', userRouter);

app.listen(8080, () => {
    console.log('server is runninng... ❤');
});