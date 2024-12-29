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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.Link = exports.Tag = exports.Content = exports.User = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function connectDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(process.env.MONGO_URI);
            console.log("Connected to DB!");
        }
        catch (err) {
            console.error("Connection error:", err);
        }
    });
}
connectDB();
// Constants
const contentTypes = ['image', 'video', 'article', 'audio'];
const objectId = mongoose_1.default.Types.ObjectId;
// User Schema
const userSchema = new mongoose_1.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true }
}, { timestamps: true });
// Content Schema
const contentSchema = new mongoose_1.Schema({
    link: { type: String, required: true },
    type: { type: String, enum: contentTypes, required: true },
    title: { type: String, required: true },
    tags: [{ type: objectId, ref: 'Tag' }],
    userId: { type: objectId, ref: 'User', required: true }
}, { timestamps: true });
// Tag Schema
const tagSchema = new mongoose_1.Schema({
    title: { type: String, unique: true, required: true }
}, { timestamps: true });
// Link Schema
const linkSchema = new mongoose_1.Schema({
    hash: { type: String, unique: true, required: true },
    userId: { type: objectId, ref: 'User', required: true }
}, { timestamps: true });
// Pre-save hook to enforce user validation (optional)
linkSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield mongoose_1.default.model('User').findById(this.userId);
        if (!user) {
            throw new Error('User does not exist');
        }
        next();
    });
});
// Models
const User = mongoose_1.default.model('User', userSchema);
exports.User = User;
const Content = mongoose_1.default.model('Content', contentSchema);
exports.Content = Content;
const Tag = mongoose_1.default.model('Tag', tagSchema);
exports.Tag = Tag;
const Link = mongoose_1.default.model('Link', linkSchema);
exports.Link = Link;
