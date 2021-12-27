import { data } from "./article.response";

function getData<type>(arg: type): type {
  return arg;
}

console.log(getData(data.data));
