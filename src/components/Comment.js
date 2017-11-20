import React, { Component } from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import { Button } from 'reactstrap'
import CommentFields from './CommentFields'
import { deleteComment, voteComment } from '../actions'
import {
  Modal,
  ModalHeader,
  ModalBody,
 } from 'reactstrap'

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: true,
      modal: false
    };
    this.toggleComment = this.toggleComment.bind(this);
  }

  toggleComment() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleRemove = (event) => {
    this.props.deleteComment(event.target.value)
    window.location.reload()
  }

  voteOption = ({id, option}) => {
    this.props.voteComment({id, option})
  }

  render() {
    const { comment } = this.props

    return (
      <article  className="comment">
        <a className="comment-img" href="#none">
          <img src="/user-pic.png" alt="" width="50" height="50" />
        </a>
        <div className="comment-body">
          <div className="text">
            <p>{ comment.body }</p>
          </div>
          <p className='meta text-muted attribution'>
            <span className="vote-up" onClick={() => this.voteOption({id: comment.id, option: 'upVote'})}>
              <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
            </span>
            <span className="vote-down" onClick={() => this.voteOption({id: comment.id, option: 'downVote'})}>
              <i className="fa fa-thumbs-down" aria-hidden="true"></i>
            </span>
            Score { comment.voteScore }, |
            Author { comment.author }  |
            Posted <Moment fromNow ago>{ comment.timestamp }</Moment> ago.  |
            { ' ' }
            <Button
              color='link'
              size='sm'
              onClick={ this.handleRemove}
              value={ comment.id } >
                Delete
            </Button>
            <Button
              color='link'
              size='sm'
              onClick={ this.toggleComment}>
                Edit
            </Button>
          </p>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggleComment} className={this.props.className}>
          <ModalHeader toggle={this.toggleComment}>Edit Comment</ModalHeader>
          <ModalBody>
            <CommentFields
              editing={ this.state.editing }
              body={ comment.body }
              commentID={ comment.id }
              closeModal={ this.toggleComment }
              author={ comment.author }/>
          </ModalBody>
        </Modal>
      </article>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteComment: (commentID) => dispatch(deleteComment(commentID)),
    voteComment: (id) => dispatch(voteComment(id))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Comment)
