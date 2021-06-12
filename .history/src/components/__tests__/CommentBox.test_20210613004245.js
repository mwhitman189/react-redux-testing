import React from 'react';
import {shallow} from 'enzyme';
import CommentBox from 'components/CommentBox';


let component;
beforeEach(() => {
  component = shallow(<CommentBox />);
});

it('contains a textarea and a button', () => {
  expect(component.find('textarea').length).toEqual(1);
  expect(component.find('button').length).toEqual(1);
});
