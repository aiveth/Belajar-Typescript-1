import { data } from "./api/article.response";
import { comments } from "./functions/comments";

const commentAdd = comments({
  name: "Ocon",
  body: "Random comments",
  created: Date(),
  updated: Date(),
});

const commentPush = data.data[0].comments;
commentPush.push(commentAdd);

console.log("Result comments", commentPush);
