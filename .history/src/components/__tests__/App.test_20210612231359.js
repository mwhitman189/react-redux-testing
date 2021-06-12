import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from "react-dom/test-utils";
import {shallow, mount, render} from 'enzyme';
import App from '../App'


let container = null;
beforeEach(() => {
  // Set up a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
})

afterEach(() => {
  // Clean up on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

it("displays a comment box and comment list", () => {
  act(() => {
    render(<App />, container);
  });
  expect(container).toContain("<div>");
});

it("displays a comment list", () => {
  act(() => {
    render(<App />, container);
  });
  expect(container.innerHTML).toContain("<div>");
});
