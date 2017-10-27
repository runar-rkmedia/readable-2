import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../actions'
import { Link } from 'react-router-dom'

class Post extends Component {

  componentDidMount () {
    this.props.getPost(this.props.match.params.id)
  }

  render() {
    const { post } = this.props;

    return (
      <div className='col-sm-9'>
        <h5>{ post.title }</h5>
        <span className='meta text-muted'>
          Author { post.author },
          Category
          <Link to={`/${ post.category }/posts`} key={ post.category }>
            { post.category }
          </Link>,
          Score { post.voteScore },
          Comment Count { post.commentCount }
        </span>
        <p>
          { post.body }
        </p>
      </div>
    );
  }
}

const mapStateToProps = ({ post }) => {
  return { post: post || [] }
}

const mapDispatchToProps = (dispatch) => {
 return { getPost: (id) => dispatch(getPost(id)) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
