import { Response } from './types';

import { response as res } from './article.response';

import fetchAllData from './fetchAllData';
import findArticlesByAuthor from './findArticlesByAuthor';

console.log('response : ', fetchAllData<Response>(res));
console.log('Data Found : ', findArticlesByAuthor('frastio', res.data)); //not found
console.log('Data Found : ', findArticlesByAuthor('john dear', res.data)); //found
