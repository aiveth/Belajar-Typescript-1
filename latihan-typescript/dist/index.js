"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const article_response_1 = require("./api/article.response");
const comments_1 = require("./functions/comments");
const commentAdd = (0, comments_1.comments)({
    name: "Ocon",
    body: "Random comments",
    created: Date(),
    updated: Date(),
});
const commentPush = article_response_1.data.data[0].comments;
commentPush.push(commentAdd);
console.log("Result comments", commentPush);
