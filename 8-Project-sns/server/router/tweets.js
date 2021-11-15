import express from 'express';
import 'express-async-errors';
import {body} from 'express-validator';
import * as tweetRepository from '../controller/tweets.js';
import {isAuth} from '../middleware/auth.js';
import {validate} from '../middleware/validator.js';

const router = express.Router();

const validateTweet = [body('text').trim().isLength({min: 3}).withMessage('텍스트는 3글자 이상 되어야 한다'), validate];
// GET /tweets
// GET /tweets?username=:username
router.get('/', isAuth, tweetRepository.getTweets);
// GET /tweets/:id
router.get('/:id', isAuth, tweetRepository.getTweet);
// POST /tweets
router.post('/', isAuth, validateTweet, tweetRepository.createTweet);
// PUT /tweets/:id
router.put('/:id', isAuth, validateTweet, tweetRepository.updateTweet);
// DELETE /tweets/:id
router.delete('/:id', isAuth, tweetRepository.deleteTweet);

export default router;
