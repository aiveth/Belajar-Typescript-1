// type checker untuk data article
type Attributes = {
  title: string
  body: string
  created: string
  updated: string
  published: boolean
}

type Author = {
  id: string
  type: string
  name: string
  age: number
  role: string
}

type Comments = {
  name: string
  body: string
  created: string
  updated: string
}

export interface Data {
  type: string
  id: string
  attributes: Attributes
  author: Author
  comments: Comments[]
}
