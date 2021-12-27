"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const article_response_1 = require("./article.response");
const addArticle_1 = __importDefault(require("./functions/addArticle/addArticle"));
const getArticleByAuthor_1 = __importDefault(require("./functions/getArticleByAuthor/getArticleByAuthor"));
const newArticle = {
    type: 'articles',
    id: '2',
    attributes: {
        title: 'Artikel Baru',
        body: 'Contoh artikel baru',
        created: '2021-12-27T14:56:29.000Z',
        updated: '2021-12-27T14:56:28.000Z',
        published: true,
    },
    author: {
        id: '43',
        type: 'people',
        name: 'Farhan',
        age: 24,
        role: 'contributor',
    },
    comments: [
        {
            name: 'John Dear',
            body: 'Tes komen',
            created: '2021-12-27T14:56:29.000Z',
            updated: '2021-12-27T14:56:28.000Z',
        },
    ],
};
const newArticles = (0, addArticle_1.default)(article_response_1.data.data, newArticle);
console.log('Artikel baru : ', newArticles);
(0, getArticleByAuthor_1.default)(newArticles);
