import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';


it('renders a <CommentBox /> component', () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('renders a <CommentList /> component')
