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

it('displays a comment box', () => {
  render(<App />, container);
  console.log(container.innerHTML);
});
expect(container.textContent).toBe("Howdy, Partner!");
