import { data } from "./article.response";

function firstData<Type>(elements: Type[]): Type {
  return elements[0];
}
console.log(firstData(data.data));
// console.log(data.data);
