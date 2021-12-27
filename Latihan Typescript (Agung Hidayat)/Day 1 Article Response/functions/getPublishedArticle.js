"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAuthor(articles) {
    let data = articles.filter((article) => {
        var _a;
        return ((_a = article.attributes) === null || _a === void 0 ? void 0 : _a.published) === true;
    });
    return data;
}
exports.default = getAuthor;
