import commentsReducer from "reducers/commentsReducer";
import { ADD_COMMENT } from "actions/types";

it("handles actions of type COMMENT_SAVED", () => {
  const action = {
    type: ADD_COMMENT,
    payload: "Test comment",
  };

  const newState = commentsReducer([], action);
  expect(newState).toEqual(["Test comment"]);
});

it("accepts any action type without failing", () => {
  const action = {
    type: "bull/pucky_added",
  };

  const newState = commentsReducer([], action);
  expect(newState).toEqual([]);
});
