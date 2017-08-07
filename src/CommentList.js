import React, {Component} from 'react'
import Comment from './Comment'

export default class CommentList extends Component{
  constructor(props) {
      super(props)

      this.state = {
          isOpen: false
      }
  }

  getBody = () => {
    if(!this.state.isOpen) return null;
    const {comments} = this.props;
    if(!comments || !comments.length) return <p>No comments</p>
    return(
      <ul>
        {comments.map(comment => <li key={comment.id}><Comment comment = { comment }></Comment></li>)}
      </ul>
    )
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const {comments} = this.props;
    const {isOpen} = this.state;
    const text = this.state.isOpen ? 'hide comments' : 'show comments';
    return(
      <div>
          <button onClick = {this.toggleOpen}>{text}</button>
          {this.getBody()}
      </div>
    );
  }
}
