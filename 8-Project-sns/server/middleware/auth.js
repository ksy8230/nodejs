import jwt from 'jsonwebtoken';
import {jwtSecretKey} from '../controller/auth.js';
import * as userRepository from '../data/auth.js';

const AUTH_ERROR = {message: 'Authentication Error'};

export const isAuth = async (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!(authHeader && authHeader.startsWith('Bearer '))) {
        return res.status(401).json(AUTH_ERROR);
    }

    const token = authHeader.split(' ')[1];
    // TODO: Make it secure!
    jwt.verify(token, jwtSecretKey, async (error, decoded) => {
        if (error) {
            return res.status(401).json(AUTH_ERROR);
        }
        console.log(decoded);
        const user = await userRepository.findById(decoded.id);
        console.log(user);
        if (!user) {
            return res.status(401).json(AUTH_ERROR);
        }
        req.userId = user.id; // req.customData
        next();
    });
};
