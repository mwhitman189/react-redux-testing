import axios from "axios";
import { ADD_COMMENT, FETCH_COMMENTS } from "actions/types";

export function saveComment(comment) {
  return {
    type: ADD_COMMENT,
    payload: comment,
  };
}

export function fetchComments() {
  const response = axios.get("https://jsonplaceholder.typicode.com/comments");

  return {
    type: FETCH_COMMENTS,
    payload: response,
  };
}
