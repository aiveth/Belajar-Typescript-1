"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//find articles by author name
const findArticlesByAuthor = (author, data) => {
    return data.filter((e) => e.author.name.toLowerCase() === author.toLowerCase());
};
exports.default = findArticlesByAuthor;
