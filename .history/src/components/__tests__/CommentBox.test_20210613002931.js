import React from 'react';
import {mount} from 'enzyme';
import CommentBox from 'components/CommentBox';

let component;
beforeEach(() => {
  component = mount(<CommentBox />);
})
it('contains a textarea and a button', () => {
  expect(component.find("textarea").length).toEqual(1);
});
