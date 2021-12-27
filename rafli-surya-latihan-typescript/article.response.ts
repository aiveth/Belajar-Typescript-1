import { Data } from './type.article'

// Data article hasil dari contoh response
export const article: { data: Data[] } = {
  data: [
    {
      type: 'articles',
      id: '1',
      attributes: {
        title: 'Tugas Belajar TypeScript',
        body: 'Latihan dulu biar ngerti',
        created: '2021-12-27T14:56:29.000Z',
        updated: '2021-12-27T14:56:28.000Z',
        published: true,
      },
      author: {
        id: '42',
        type: 'people',
        name: 'John Dear',
        age: 80,
        role: 'contributor',
      },
      comments: [
        {
          name: 'John Dear',
          body: 'Tes komen',
          created: '2021-12-27T14:56:29.000Z',
          updated: '2021-12-27T14:56:28.000Z',
        },
      ],
    },
    {
      type: 'articles',
      id: '2',
      attributes: {
        title: 'Tugas Belajar Typescript Advanced',
        body: 'Latihan dulu biar ngerti',
        created: '2021-12-27T14:56:29.000Z',
        updated: '2021-12-27T14:56:28.000Z',
        published: false,
      },
      author: {
        id: '42',
        type: 'people',
        name: 'John Dear',
        age: 80,
        role: 'contributor',
      },
      comments: [
        {
          name: 'John Dear',
          body: 'Tes komen',
          created: '2021-12-27T14:56:29.000Z',
          updated: '2021-12-27T14:56:28.000Z',
        },
      ],
    },
  ],
}
