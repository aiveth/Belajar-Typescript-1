export interface Data {
  data: Articles[];
}

export interface Articles {
  type: string;
  id: string;
  attributes: Attributes;
  author: Author;
  comments: Comments[];
}

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
