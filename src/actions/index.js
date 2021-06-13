import { COMMENT_ADDED } from "actions/types";

export function saveComment(comment) {
  return {
    type: COMMENT_ADDED,
    payload: comment,
  };
}
