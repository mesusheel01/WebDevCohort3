"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = exports.Tag = exports.Content = exports.User = void 0;
const mongoose_1 = __importStar(require("mongoose"));
// mongoose connection
mongoose_1.default.connect("mongodb+srv://admin:passme@cluster0.t6rr9na.mongodb.net/Cognito").then(() => {
    console.log("Connected to db!");
}).catch((err) => {
    console.log("Connection error : ", err);
});
// constants to use further down
const contentTypes = ['image', 'video', 'article', 'audio'];
const objectId = mongoose_1.default.Schema.Types.ObjectId;
// user schema
const userSchema = new mongoose_1.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true }
});
// content schema
const contentSchema = new mongoose_1.Schema({
    link: { type: String, required: true },
    type: { type: String, enum: contentTypes, required: true },
    title: { type: String, required: true },
    tags: { type: objectId, ref: 'Tag', required: true },
    userId: { type: objectId, ref: 'User', required: true }
});
// tag schema
const tagSchema = new mongoose_1.Schema({
    title: { type: String, required: true }
});
// link schema
const linkSchema = new mongoose_1.Schema({
    hash: { type: String, unique: true, required: true },
    userId: { type: objectId, ref: 'User', required: true }
});
// models for every schema
const User = mongoose_1.default.model("User", userSchema);
exports.User = User;
const Content = mongoose_1.default.model("Content", contentSchema);
exports.Content = Content;
const Tag = mongoose_1.default.model("Tag", tagSchema);
exports.Tag = Tag;
const Link = mongoose_1.default.model("Link", linkSchema);
exports.Link = Link;
