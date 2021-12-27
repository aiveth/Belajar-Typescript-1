import { data as article, Article, Comments } from './article.response';
import addArticle from './functions/addArticle/addArticle';
import getArticleByAuthor from './functions/getArticleByAuthor/getArticleByAuthor';

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

const newArticles = addArticle<Article>(article.data, newArticle);
console.log('Artikel baru : ', newArticles);
getArticleByAuthor(newArticles);
