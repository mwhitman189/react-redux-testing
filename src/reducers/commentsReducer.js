import { COMMENT_ADDED } from "actions/types";

export default function commentsReducer(state = [], action) {
  switch (action.type) {
    case COMMENT_ADDED:
      return [...state, action.payload];
    default:
      return state;
  }
}
