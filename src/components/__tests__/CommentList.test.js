import React from 'react';
import {shallow} from 'enzyme';
import CommentList from 'components/CommentList';


const testComments = [
  "Smell like cabbage; little hands",
  "That's because it IS shit, Austin!",
  "Well I'm glad SOMEONE agrees with me",
  "How did I get in to this nut shell?..."
];

let component;
beforeEach(() => {
  component = shallow(<CommentList comments={testComments} />);
});

it('renders four <li> elements', () => {
  expect(component.find('li').length).toEqual(4);
});
