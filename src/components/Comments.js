import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  commentGetByParent,
  deleteComment } from '../actions'
import Moment from 'react-moment'
import { Button } from 'reactstrap'

class Comments extends Component {

  componentDidMount () {
    this.props.commentGetByParent(this.props.postID)
  }

  handleRemove = (event) => {
    this.props.deleteComment(event.target.value)
    window.location.reload()
  }

  render() {
    const { comments } = this.props

    return (
      <div className='row'>
        <div className='col-sm-12'>
          <section className="comments">
            {comments.map((comment, i) => (
              <article key={i}  className="comment">
                <a className="comment-img" href="#none">
                  <img src="/user-pic.png" alt="" width="50" height="50" />
                </a>

                <div className="comment-body">
                  <div className="text">
                    <p>{ comment.body }</p>
                  </div>
                  <p className='meta text-muted attribution'>
                    Votes { comment.voteScore }, |
                    Author { comment.author }  |
                    Posted <Moment>{ comment.timestamp }</Moment>   |
                    { ' ' }
                    <Button
                      color='link'
                      size='sm'
                      onClick={ this.handleRemove}
                      value={comment.id}>
                        Delete
                    </Button>
                  </p>
                </div>
              </article>
            ))}
          </section>​
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ comments }) => {
  return { comments: comments.comments || [] }
}

const mapDispatchToProps = (dispatch) => {
  return {
    commentGetByParent: (postID) => dispatch(commentGetByParent(postID)),
    deleteComment: (commentID) => dispatch(deleteComment(commentID))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments)
