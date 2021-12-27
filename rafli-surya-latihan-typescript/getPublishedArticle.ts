import { article } from './article.response'
import { Data } from './type.article'

// buat function untuk mendapatkan data published article
function getPublishedArticle(
  data: Data[],
  published: boolean
): Data[] | string {
  const filteredData = data.filter(
    (article: Data) => article.attributes.published === published
  )
  return filteredData.length > 0 ? filteredData : 'Data tidak ada'
}

// panggil function getPublishedArticle dengan published == false
console.log('Get data dengan published = false')
console.log(getPublishedArticle(article.data, false))

console.log('\n')

// panggil function getPublishedArticle dengan published == true
console.log('Get data dengan published = true')
console.log(getPublishedArticle(article.data, true))
