import React from "react";
import { connect } from "react-redux";
import * as actions from "actions";

class CommentBox extends React.Component {
  state = {
    comment: "",
    message: "",
  };

  handleChange = (e) => {
    this.setState({ ...this.state, comment: e.target.value, message: "" });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.comment === "") {
      this.setState({
        ...this.state,
        message:
          "Please input some text in the box before you submit your comment;)",
      });
    } else {
      this.props.saveComment(this.state.comment);
      this.setState({ ...this.state, comment: "" });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <p>{this.state.message ? this.state.message : "What's the happs?"}</p>
          <textarea value={this.state.comment} onChange={this.handleChange} />
          <div>
            <button type="submit">Submit Comment</button>
          </div>
        </form>
        <button onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
    );
  }
}
export default connect(null, actions)(CommentBox);
