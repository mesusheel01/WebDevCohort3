"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwt_pass = void 0;
const express_1 = __importDefault(require("express"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const contentRoute_1 = __importDefault(require("./routes/contentRoute"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = process.env.PORT;
const app = (0, express_1.default)();
exports.jwt_pass = process.env.JWT_SECRET;
//to accept the req body
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Server is running!");
});
// api for user sign
app.use('/api/v1/user', userRoute_1.default);
//api for content
app.use('/api/v1/content', contentRoute_1.default);
//shareable link
app.listen(port, () => {
    console.log(`Server is hosted on http://localhost:${port}`);
});
