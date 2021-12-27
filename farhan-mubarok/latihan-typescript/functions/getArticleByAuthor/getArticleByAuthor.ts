import { Article } from '../../article.response';
import getData from '../getData/getData';

const getArticleByAuthor = (data: Article[]) => {
  const filteredData = data.filter((item: Article) => item.author.name === 'Farhan');
  console.log(getData(filteredData));
};

export default getArticleByAuthor;
