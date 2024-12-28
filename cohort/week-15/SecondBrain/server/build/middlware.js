"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = 'passBeta';
const userAuthenticator = (req, res, next) => {
    const partialToken = req.headers.authorization;
    const token = partialToken.split(' ')[1];
    if (!token) {
        return res.status(409).json({
            msg: 'Invalid token!'
        });
    }
    jsonwebtoken_1.default.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            res.json({
                msg: err.message
            });
        }
        req.userId = user.userId;
        next();
    });
};
exports.default = userAuthenticator;
