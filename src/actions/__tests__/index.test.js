import { saveComment } from "actions";
import { COMMENT_ADDED } from "actions/types";

describe("Save comment", () => {
  let newAction;

  beforeEach(() => {
    newAction = saveComment("What is reality?");
  });

  it("has the correct type", () => {
    expect(newAction.type).toEqual(COMMENT_ADDED);
  });

  it("has the correct payload", () => {
    expect(newAction.payload).toEqual("What is reality?");
  });
});
