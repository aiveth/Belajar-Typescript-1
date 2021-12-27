import { article } from './article.response'
import { Data } from './type.article'

function callArticle(data: Data[]): Data[] {
  return data.filter((article: Data) => article.attributes.published === false)
}

console.log(callArticle(article.data))
