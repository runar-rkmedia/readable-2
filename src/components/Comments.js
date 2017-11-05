import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'
import { commentGetByParent } from '../actions'

class Comments extends Component {

  componentDidMount () {
    this.props.commentGetByParent(this.props.postID)
  }

  render() {
    const { comments } = this.props

    return (
      <div className='row'>
        <div className='col-sm-12'>
          <section className="comments">
            {comments.map((comment, i) => (
              <Comment
                key={i}
                comment={ comment }/>
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments)
