import React from 'react';
import {mount} from 'enzyme';
import CommentBox from 'components/CommentBox';

let component;
console.log(mount)
beforeEach(() => {

});

it('contains a textarea and a button', () => {
  const component = mount(<CommentBox />);
  expect(component.find('textarea').length).toEqual(1);
});
