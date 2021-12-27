const postArticle = <T>(articles: T[], article: T): T[] | undefined => {
    return [...articles, article]
}

export default postArticle