"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const article_response_1 = require("./article.response");
function callArticle(data) {
    return data.filter((article) => article.attributes.published === false);
}
console.log(callArticle(article_response_1.article.data));
