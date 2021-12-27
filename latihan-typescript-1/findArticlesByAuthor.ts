import { Data } from './types';
//find articles by author name
const findArticlesByAuthor = (author: string, data: Data[]): Data[] | Data | void => {
  return data.filter((e) => e.author.name.toLowerCase() === author.toLowerCase());
};

export default findArticlesByAuthor;
