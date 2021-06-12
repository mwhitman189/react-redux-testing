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

test('displays a comment box', () => {
  const commentBox = renderer.create(<App />)
});
