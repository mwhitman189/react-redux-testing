import React from 'react'


class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <h4>Add a comment</h4>
        <textarea />
        <div>
          <button>Submit comment</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
