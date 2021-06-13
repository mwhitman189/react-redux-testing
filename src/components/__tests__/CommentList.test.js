import React from "react";
import { mount } from "enzyme";

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
  const initialState = {
    comments: testComments,
  };

  component = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("creates one <li> per comment", () => {
  expect(component.find("li").length).toEqual(testComments.length);
});

it("displays the correct text from each comment", () => {
  component.find("li").forEach((item, idx) => {
    expect(item.text()).toEqual(testComments[idx]);
  });
});
