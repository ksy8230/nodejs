import * as tweetRepository from '../data/tweet.js';

export async function getTweets(req, res, next) {
    const username = req.query.username;
    const data = await (username ? tweetRepository.getAllByUsername(username) : tweetRepository.getAll());
    res.status(200).json(data);
}

export async function getTweet(req, res, next) {
    const id = req.params.id;
    const tweet = await tweetRepository.getById(id);
    if (tweet) {
        res.status(200).json(tweet);
    } else {
        res.status(404).json({message: `Tweet ${id} not found!`});
    }
}

export async function createTweet(req, res, next) {
    const {text, name, username} = req.body;
    const newTweet = await tweetRepository.create(text, name, username);
    res.status(201).json(newTweet);
}

export async function updateTweet(req, res, next) {
    const id = req.params.id;
    const text = req.body.text;
    const tweet = await tweetRepository.update(id, text);
    if (tweet) {
        res.status(200).json(tweet);
    } else {
        res.status(404).json({message: `Tweet ${id} not found`});
    }
}

export async function deleteTweet(req, res, next) {
    const id = req.params.id;
    tweetRepository.remove(id);
    res.sendStatus(204);
}
