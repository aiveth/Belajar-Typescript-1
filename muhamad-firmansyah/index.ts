import { articles } from "./data/article.response";
import getPublishedArticles from "./functions/getPublishedArticles/getPublishedArticles";
import postArticle from "./functions/postArticle/postArticle";
import { Article } from "./types";

const publishedArticles = getPublishedArticles<Article>(articles)
console.log('published article', publishedArticles)

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
}

const addArticle = postArticle<Article>(articles, newData)
console.log('add article:', addArticle)