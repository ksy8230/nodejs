import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {} from 'express-async-errors';
import * as userRepository from '../data/auth.js';

const jwtSecretKey =
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
    const token = createJwtToken(user.id);
    res.status(200).json({token, username});
}

function createJwtToken(id) {
    return jwt.sign({id}, jwtSecretKey, {expiresIn: jwtExpiredsInDays});
}
