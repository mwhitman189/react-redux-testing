import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from "react-dom/test-utils";
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
    console.log(container.innerHTML);
  });
  expect(container.innerHTML).toBe("<div><div>I'm a comment box</div><div><div>I'm a comment list</div></div></div>");
});

