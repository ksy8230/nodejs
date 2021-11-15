import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {} from 'express-async-errors';
import * as userRepository from '../data/auth.js';

export const jwtSecretKey =
    'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTYzMDkzNzA1OSwiaWF0IjoxNjMwOTM3MDU5fQ.2snxur642V3WvJq4RTqUNyaE1Tm0VTd_uakDX7leOLo';
const jwtExpiredsInDays = '2d';
const bcryptSaltRounds = 12;

export async function signup(req, res) {
    const {username, password, name, email, url} = req.body;
    const found = await userRepository.findByUsername(username);
    if (found) {
        return res.status(409).json({message: `${username} already exists`});
    }
    const hashed = await bcrypt.hash(password, bcryptSaltRounds);
    const userId = await userRepository.createUser({
        username,
        password: hashed,
        name,
        email,
        url,
    });
    const token = createJwtToken(userId);
    res.status(201).json({token, username});
}

export async function login(req, res) {
    const {username, password} = req.body;
    const user = await userRepository.findByUsername(username);
    if (!user) {
        return res.status(401).json({message: 'Invalid user or password'});
    }
    // 로그인 정보가 유효한지 체크
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        return res.status(401).json({message: 'Invalid user or password'});
    }
    // 유효한 정보라면 jwt토큰을 생성
    const token = createJwtToken(user.id);
    res.status(200).json({token, username});
}

function createJwtToken(id) {
    return jwt.sign({id}, jwtSecretKey, {expiresIn: jwtExpiredsInDays});
}

export async function me(req, res, next) {
    const user = await userRepository.findById(req.userId);
    if (!user) {
        return res.status(404).json({message: 'User no found!'});
    }
    res.status(200).json({token: req.token, username: user.username});
}
