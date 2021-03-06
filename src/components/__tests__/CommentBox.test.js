import React from "react";
import { mount } from "enzyme";

import Root from "Root";
import CommentBox from "components/CommentBox";

let component;
beforeEach(() => {
  component = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  component.unmount();
});

it("contains a textarea and a button", () => {
  expect(component.find("button").length).toEqual(2);
  expect(component.find("textarea").length).toEqual(1);
});

describe("the comment box textarea", () => {
  beforeEach(() => {
    component.find("textarea").simulate("change", {
      target: { value: "burritos" },
    });
    component.update();
  });

  it("accepts user input", () => {
    expect(component.find("textarea").prop("value")).toEqual("burritos");
  });

  it("is cleared when the form is submitted", () => {
    expect(component.find("textarea").prop("value")).toEqual("burritos");

    component.find("form").simulate("submit");
    component.update();

    expect(component.find("textarea").prop("value")).toEqual("");
  });

  it("prevents empty comment submission", () => {
    expect(component.find("textarea").prop("value")).toEqual("burritos");

    component.find("textarea").simulate("change", {
      target: { value: "" },
    });
    component.find("textarea").simulate("submit");
    component.update();

    expect(component.find("p").render().text()).toEqual(
      "Please input some text in the box before you submit your comment;)"
    );
  });
});
