import React from 'react';
import {shallow} from 'enzyme';
import CommentBox from './CommentBox';


it('contains an h2 heading', () => {
  const wrapper = shallow(<CommentBox />);
});
