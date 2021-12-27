import { responseArticle, Articles } from './types/types'
import getAuthor from './functions/getPublishedArticle'

let data: responseArticle
data = {
        "data": [
            {
                "type": "articles",
                "id": "1",
                "attributes": {
                    "title": "Tugas Belajar TypeScript",
                    "body": "Latihan dulu biar ngerti",
                    "created": "2021-12-27T14:56:29.000Z",
                    "updated": "2021-12-27T14:56:28.000Z",
                    "published": true
                },
                "author": {
                    "id": "42",
                    "type": "people",
                    "name": "John Dear",
                    "age": 80,
                    "role": "contributor"
                },
                "comments": [{
                    "name": "John Dear",
                    "body": "Tes komen",
                    "created": "2021-12-27T14:56:29.000Z",
                    "updated": "2021-12-27T14:56:28.000Z"
                }]
            },
            {
                "type": "articles",
                "id": "2",
                "attributes": {
                    "title": "Tugas Belajar TypeScript Part 2",
                    "body": "Latihan dulu biar ngerti",
                    "created": "2021-12-27T14:56:29.000Z",
                    "updated": "2021-12-27T14:56:28.000Z",
                    "published": false
                },
                "author": {
                    "id": "42",
                    "type": "people",
                    "name": "John Marlin",
                    "age": 80,
                    "role": "contributor"
                },
                "comments": [{
                    "name": "John Marlin",
                    "body": "Tes komen",
                    "created": "2021-12-27T14:56:29.000Z",
                    "updated": "2021-12-27T14:56:28.000Z"
                }]
            },
        ]
    }

const publishedArticle = getAuthor<Articles>(data.data)

console.log(publishedArticle)