"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const article_response_1 = require("./article.response");
// buat function untuk mendapatkan data published article
function getPublishedArticle(data, published) {
    const filteredData = data.filter((article) => article.attributes.published === published);
    return filteredData.length > 0 ? filteredData : 'Data tidak ada';
}
// panggil function getPublishedArticle dengan published == false
console.log('Get data dengan published = false');
console.log(getPublishedArticle(article_response_1.article.data, false));
console.log('\n');
// panggil function getPublishedArticle dengan published == true
console.log('Get data dengan published = true');
console.log(getPublishedArticle(article_response_1.article.data, true));
