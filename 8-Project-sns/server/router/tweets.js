import express from 'express';
import 'express-async-errors';
import * as tweetRepository from '../controller/tweets.js';

const router = express.Router();

// GET /tweets
// GET /tweets?username=:username
router.get('/', tweetRepository.getTweets);
// GET /tweets/:id
router.get('/:id', tweetRepository.getTweet);
// POST /tweets
router.post('/', tweetRepository.createTweet);
// PUT /tweets/:id
router.put('/:id', tweetRepository.updateTweet);
// DELETE /tweets/:id
router.delete('/:id', tweetRepository.deleteTweet);

export default router;
