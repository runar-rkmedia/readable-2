import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost, deletePost } from '../actions'
import { Link } from 'react-router-dom'
import Comments from './Comments'
import { Button } from 'reactstrap'

import '../css/Post.css'

class Post extends Component {

  componentDidMount () {
    this.props.getPost(this.props.match.params.id)
  }

  handleRemove = () => {
    this.props.deletePost(this.props.post.id)
    this.props.history.push('/')
  }

  render() {
    const { post } = this.props
    const hasComments = post.commentCount

    return (
      <div className='col-sm-9'>
        <div className='post-heading'>
          <h1>{ post.title }</h1>
        </div>
        <div className='post-body'>
          <div className='meta text-muted'>
            Written by { post.author } »
            Votes { post.voteScore } »
            Comments { post.commentCount }
          </div>

          <p>
            { post.body }
          </p>
          <Button
            color='info'
            size='sm'
            onClick={ this.handleRemove }>
              Delete Post!
          </Button>
        </div>
        <div className='category-title rotate-title'>
          <h1>
            <Link
              to={`/${ post.category }/posts`}
              key={ post.category } >
                { post.category }
            </Link>
          </h1>
        </div>

        <div className='commentsHeading'>Comments</div>
        {hasComments > 0 ? (
          <Comments
            key={ post.id }
            postID={ post.id }
          />
        ) : (
          <div className='noComments'>
            <h4>No comments yet ...</h4>
          </div>
        )}

      </div>
    );
  }
}

const mapStateToProps = ({ post }) => {
  return { post: post || [] }
}

const mapDispatchToProps = (dispatch) => {
 return {
   getPost: (id) => dispatch(getPost(id)),
   deletePost: (id) => dispatch(deletePost(id))
 }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
