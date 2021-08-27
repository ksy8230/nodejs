import express from 'express';
import 'express-async-errors';
import {body} from 'express-validator';
import * as tweetRepository from '../controller/tweets.js';
import {validate} from '../middleware/validator.js';

const router = express.Router();

const validateTweet = [body('text').trim().isLength({min: 3}).withMessage('텍스트는 3글자 이상 되어야 한다'), validate];
// GET /tweets
// GET /tweets?username=:username
router.get('/', tweetRepository.getTweets);
// GET /tweets/:id
router.get('/:id', tweetRepository.getTweet);
// POST /tweets
router.post('/', validateTweet, tweetRepository.createTweet);
// PUT /tweets/:id
router.put('/:id', validateTweet, tweetRepository.updateTweet);
// DELETE /tweets/:id
router.delete('/:id', tweetRepository.deleteTweet);

export default router;
