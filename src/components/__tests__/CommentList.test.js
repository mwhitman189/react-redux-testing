import React from "react";
import { shallow } from "enzyme";

import Root from "Root";
import CommentList from "components/CommentList";

const testComments = [
  "Smell like cabbage; little hands",
  "That's because it IS shit, Austin!",
  "Well I'm glad SOMEONE agrees with me",
  "How did I get in to this nut shell?...",
];

let component;
beforeEach(() => {
  component = shallow(
    <Root>
      <CommentList comments={testComments} />
    </Root>
  );
});

it("renders four <li> elements", () => {
  expect(component.find("li").length).toEqual(4);
});
