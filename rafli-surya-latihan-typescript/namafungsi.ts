import { article } from './article.response'
import { Data } from './type.article'

// buat function untuk memanggil article
function getPublishedArticle(data: Data[]): Data[] {
  return data.filter((article: Data) => article.attributes.published === false)
}

// panggil function getPublishedArticle
console.log(getPublishedArticle(article.data))
