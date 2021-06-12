import React from 'react';
import {shallow} from 'enzyme';
import CommentBox from './CommentBox';


it('contains four "li" items', () => {
  const wrapper = shallow(<CommentBox />);
  expect(wrapped.find("<li>").length).toEqual(4);
});
