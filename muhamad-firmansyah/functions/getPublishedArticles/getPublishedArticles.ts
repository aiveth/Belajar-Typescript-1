const getPublishedArticles = <T>(articles: T[]): T[] | undefined => {
    return articles.filter(article => (article as any)?.attributes.published)
}

export default getPublishedArticles