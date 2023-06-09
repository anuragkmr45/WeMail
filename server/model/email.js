"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const EmailSchema = mongoose_1.default.Schema({
    to: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: false
    },
    body: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    starred: {
        type: Boolean,
        required: true,
        default: false
    },
    bin: {
        type: Boolean,
        required: true,
        default: false
    },
    type: {
        type: String,
        required: true,
    }
});
const email = mongoose_1.default.model('email', EmailSchema);
exports.default = EmailSchema;
