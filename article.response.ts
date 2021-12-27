export interface Attributes {
  title: string;
  body: string;
  created: string;
  updated: string;
  published: boolean;
}

export interface Author {
  id: string;
  type: string;
  name: string;
  age: number;
  role: string;
}

export interface Comments {
  name: string;
  body: string;
  created: string;
  updated: string;
}

export interface Article {
  type: string;
  id: string;
  attributes: Attributes;
  author: Author;
  comments: Comments[];
}
export interface DataArticle {
  data: Article[];
}

export const data: DataArticle = {
  data: [
    {
      type: "articles",
      id: "1",
      attributes: {
        title: "Tugas Belajar TypeScript",
        body: "Latihan dulu biar ngerti gan",
        created: "2021-12-27T14:56:29.000Z",
        updated: "2021-12-27T14:56:28.000Z",
        published: true,
      },
      author: {
        id: "42",
        type: "people",
        name: "John Dear",
        age: 80,
        role: "contributor",
      },
      comments: [
        {
          name: "John Dear",
          body: "Tes komen",
          created: "2021-12-27T14:56:29.000Z",
          updated: "2021-12-27T14:56:28.000Z",
        },
      ],
    },
  ],
};
