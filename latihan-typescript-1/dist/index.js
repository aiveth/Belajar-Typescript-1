"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const article_response_1 = require("./article.response");
const fetchAllData_1 = __importDefault(require("./fetchAllData"));
const findArticlesByAuthor_1 = __importDefault(require("./findArticlesByAuthor"));
console.log('response : ', (0, fetchAllData_1.default)(article_response_1.response));
console.log('Data Found : ', (0, findArticlesByAuthor_1.default)('frastio', article_response_1.response.data)); //not found
console.log('Data Found : ', (0, findArticlesByAuthor_1.default)('john dear', article_response_1.response.data)); //found
