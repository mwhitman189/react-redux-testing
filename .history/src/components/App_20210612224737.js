import React from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';


const App = () => {
  return (
    <div>
      <CommentBox>Comment box</CommentBox>
      <CommentList>Comment list</CommentList>
    </div>
  );
}
export default App;
