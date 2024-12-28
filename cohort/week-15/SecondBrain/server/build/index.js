"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const inputValidator_1 = require("./inputValidator");
const db_1 = require("./db");
const bcrypt_1 = __importDefault(require("bcrypt"));
const middlware_1 = __importDefault(require("./middlware"));
const JWT_SECRET = 'passBeta';
const app = (0, express_1.default)();
app.use(express_1.default.json());
// signup for user
app.post("/api/v1/singup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bodyToValidate = req.body;
    const { success } = inputValidator_1.signupValidator.safeParse(bodyToValidate);
    if (!success) {
        return res.status(400).json({
            msg: "Provide right inputs!"
        });
    }
    const { username, password } = bodyToValidate;
    try {
        const existingUser = yield db_1.User.findOne({ username });
        if (existingUser) {
            return res.status(409).json({
                msg: "User exists with same username! "
            });
        }
        const saltRounds = 8;
        const hashedPassword = yield bcrypt_1.default.hash(password, saltRounds);
        const newUser = yield db_1.User.create({
            username,
            password: hashedPassword
        });
        const token = jsonwebtoken_1.default.sign({ username, userId: newUser._id }, JWT_SECRET);
        res.status(201).json({
            msg: "User created with provided credentials!",
            token
        });
    }
    catch (err) {
        res.status(500).json({
            msg: "Server Error",
            error: err instanceof Error ? err.message : 'Unknown error!'
        });
    }
}));
// signin for user
app.post("/api/v1/singin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bodyToValidate = req.body;
    const { success } = inputValidator_1.signinValidator.safeParse(bodyToValidate);
    if (!success) {
        return res.status(400).json({
            msg: "Provide right inputs!"
        });
    }
    const { username, password } = bodyToValidate;
    try {
        const existingUser = yield db_1.User.findOne({ username });
        if (!existingUser) {
            return res.status(409).json({
                msg: "User does not exist! "
            });
        }
        const token = jsonwebtoken_1.default.sign({ username, userId: existingUser._id }, JWT_SECRET);
        res.status(201).json({
            msg: "User signed in successfully!",
            token
        });
    }
    catch (err) {
        res.status(500).json({
            msg: "Server Error",
            error: err instanceof Error ? err.message : 'Unknown error!'
        });
    }
}));
// post a content
app.post("/api/v1/content", middlware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bodyToValidate = req.body;
    const { success } = inputValidator_1.contentValidator.safeParse(bodyToValidate);
    if (!success) {
        return res.status(400).json({
            msg: "Provide right input body!"
        });
    }
    const { link, type, title, tags } = bodyToValidate;
    const CurrUserId = req.userId;
    try {
        const existingContent = yield db_1.Content.findOne({ title });
        if (existingContent) {
            return res.status(409).json({
                msg: "Content with provided title already exist!"
            });
        }
        const newContent = yield db_1.Content.create({
            link,
            type,
            title,
            tags,
            userId: CurrUserId
        });
        res.status(201).json({
            msg: "New content created",
            newContent
        });
    }
    catch (error) {
        res.json({
            msg: "Server error!",
            error: error instanceof Error ? error.message : "Unknown Error!"
        });
    }
}));
// get all the user posted content
app.get("/api/v1/content", middlware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.userId;
    try {
        const contents = yield db_1.Content.find({ userId });
        if (!contents) {
            res.status(404).json({
                msg: "No content avalable for the user!"
            });
        }
        res.status(201).json({
            contents
        });
    }
    catch (err) {
        res.status(500).json({
            msg: "Server error!"
        });
    }
}));
// delete content
app.delete("/api/v1/content/:id", (req, res) => {
    const id = req.params.id;
    try {
        yield db_1.Content.findByIdAndDelete({ _id: id });
        res.status(202).json({
            msg: "Content deleted successfully!"
        });
    }
    catch (err) {
        res.status(500).json({
            msg: "Server Error!"
        });
    }
});
// create a shareable link
app.post('/api/v1/brain/share', (req, res) => {
});
//listen
app.listen(3000, () => {
    console.log(`Server is running at http://localhost:${3000}`);
});
