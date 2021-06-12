import React from 'react';
import {shallow} from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';


beforeEach(() => {
  const wrapped = shallow(<App />);
});

it('renders a <CommentBox /> component', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('renders a <CommentList /> component', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
