import React from "react";

const CommentList = ({ comments }) => {
  return comments.map((comment) => <li>{comment}</li>);
};

export default CommentList;
