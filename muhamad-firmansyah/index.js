"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const article_response_1 = require("./data/article.response");
const getPublishedArticles_1 = __importDefault(require("./functions/getPublishedArticles/getPublishedArticles"));
const postArticle_1 = __importDefault(require("./functions/postArticle/postArticle"));
const publishedArticles = (0, getPublishedArticles_1.default)(article_response_1.articles);
console.log('published article', publishedArticles);
const newData = {
    type: "articles",
    id: "1",
    attributes: {
        title: "Tugas Belajar TypeScript Baru",
        body: "Latihan dulu biar ngerti",
        created: "2021-12-27T14:56:29.000Z",
        updated: "2021-12-27T14:56:28.000Z",
        published: false
    },
    author: {
        id: "42",
        type: "people",
        name: "John Dear",
        age: 80,
        role: "contributor"
    },
    comments: [
        {
            name: "John Dear",
            body: "Tes komen",
            created: "2021-12-27T14:56:29.000Z",
            updated: "2021-12-27T14:56:28.000Z"
        }
    ]
};
const addArticle = (0, postArticle_1.default)(article_response_1.articles, newData);
console.log('add article:', addArticle);
