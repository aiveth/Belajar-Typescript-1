import { Attributes } from '../types/types'

function getAuthor<Type extends { attributes : Attributes }>(articles: Type[]): Type[] | undefined {
    let data = articles.filter((article) => {
        return article.attributes?.published === true
    })
    return data
}

export default getAuthor