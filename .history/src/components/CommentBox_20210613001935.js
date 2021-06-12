import React from 'react'


class CommentBox extends React.Component {
  state = {comment: ""};

  handleChange = (e) => {
    this.setState({comment: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    // TODO - Call an action creator
    // and save the comment
    this.setState()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button>Submit comment</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
