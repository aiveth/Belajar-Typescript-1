"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getPublishedArticles = (articles) => {
    return articles.filter(article => { var _a; return (_a = article) === null || _a === void 0 ? void 0 : _a.attributes.published; });
};
exports.default = getPublishedArticles;
