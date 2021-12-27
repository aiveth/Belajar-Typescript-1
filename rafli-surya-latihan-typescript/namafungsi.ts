import { article } from './article.response'
import { Data } from './type.article'

// buat function untuk memanggil article
function callArticle(data: Data[]): Data[] {
  return data.filter((article: Data) => article.attributes.published === false)
}

// panggil function callArticle
console.log(callArticle(article.data))
