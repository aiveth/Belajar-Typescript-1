import { Comments } from "../types/types";

export const comments = <Type extends Comments>(data: Type): Type => {
  return data;
};
