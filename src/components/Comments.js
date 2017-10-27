import React, { Component } from 'react'
import { connect } from 'react-redux'
import { commentGetByParent } from '../actions'
import Moment from 'react-moment'

class Comments extends Component {

  componentDidMount () {
    this.props.commentGetByParent(this.props.postID)
  }

  render() {
    const { comments } = this.props

    return (
      <div className='row'>
        <div className='col-sm-12'>
          {comments.map((comment, i) => (
            <div key={i} className='comment-list'>
              <p>{ comment.body }</p>
              <p className='meta text-muted'>Votes { comment.voteScore }, | Author { comment.author }  | Posted <Moment>{ comment.timestamp }</Moment> </p>

            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ comments }) => {
  return { comments: comments.comments || [] }
}

const mapDispatchToProps = (dispatch) => {
  return { commentGetByParent: (postID) => dispatch(commentGetByParent(postID)) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments)
