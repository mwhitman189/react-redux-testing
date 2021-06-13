import React from "react";
import { connect, useSelector } from "react-redux";
import { COMMENT_ADDED } from "actions/types";
import * as actions from "actions";

class CommentBox extends React.Component {
  state = useSelector((state) => state);

  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({ comment: "" });
  };

  handleFetchComments = async () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) =>
        json
          .slice(0, 20)
          .forEach((comment) =>
            actions.saveComment(COMMENT_ADDED, { payload: comment.name })
          )
      );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button type="submit">Submit Comment</button>
          <button onClick={this.handleFetchComments}>Fetch Comments</button>
        </div>
      </form>
    );
  }
}

export default connect(null, actions)(CommentBox);
