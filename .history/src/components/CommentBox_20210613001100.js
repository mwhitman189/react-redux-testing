import React from 'react'


class CommentBox extends React.Component {
  state = {comment: ""};

  render() {
    return (
      <form>
        <h4>Add a comment</h4>
        <textarea value={this.state.comment} />
        <div>
          <button>Submit comment</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
