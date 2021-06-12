import React from 'react';
import {unmountComponentAtNode} from 'react-dom';
import {act} from "react-dom/test-utils";
import {shallow, mount, render} from 'enzyme';
import App from '../App';


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

describe('<App />', () => {
  it("renders a <CommentBox /> component", () => {
    expect(container.find(CommentBox)).to.have.lengthOf(1);
  });
  
  it("renders a <CommentList /> component", () => {
    expect(container.find(CommentList)).to.have.lengthOf(1);
  });
});
