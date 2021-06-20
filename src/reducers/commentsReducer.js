import { ADD_COMMENT, FETCH_COMMENTS } from "actions/types";

export default function commentsReducer(state = [], action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [...state, action.payload];
    case FETCH_COMMENTS:
      const limitedComments = action.payload.data.slice(0, 20);
      const comments = limitedComments.map((comment, idx) => {
        return comment.name;
      });
      return [...state, ...comments];
    default:
      return state;
  }
}
