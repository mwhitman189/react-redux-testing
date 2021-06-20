import { saveComment } from "actions";
import { ADD_COMMENT } from "actions/types";

describe("Save comment", () => {
  let newAction;

  beforeEach(() => {
    newAction = saveComment("What is reality?");
  });

  it("has the correct type", () => {
    expect(newAction.type).toEqual(ADD_COMMENT);
  });

  it("has the correct payload", () => {
    expect(newAction.payload).toEqual("What is reality?");
  });
});
