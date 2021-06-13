import axios from "axios";
import { COMMENT_ADDED, COMMENTS_FETCHED } from "actions/types";

export function saveComment(comment) {
  return {
    type: COMMENT_ADDED,
    payload: comment,
  };
}

export function fetchComments() {
  const response = axios.get("https://jsonplaceholder.typicode.com/comments");

  return {
    type: COMMENTS_FETCHED,
    payload: response.slice(0, 20),
  };
}
