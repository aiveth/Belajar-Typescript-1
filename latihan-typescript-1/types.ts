export interface Response {
  data: Data[];
}

export interface Data {
  type: string;
  id: string;
  attributes: Attributes;
  author: Author;
  comments: Comment[];
}

type Attributes = {
  title: string;
  body: string;
  created: string;
  updated: string;
  published: boolean;
};

type Author = {
  id: string;
  type: string;
  name: string;
  age: number;
  role: string;
};

type Comment = {
  name: string;
  body: string;
  created: string;
  updated: string;
};
