import React from 'react';
import {shallow} from 'enzyme';
import CommentBox from 'components/CommentBox';


it('contains a textarea and a button', () => {
  const wrapped = shallow(<CommentBox />);
  expect(wrapped.find("textarea").length).toEqual(4);
});
