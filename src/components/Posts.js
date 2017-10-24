import React, { Component } from 'react'
import { getAllPosts } from '../actions'
import { connect } from 'react-redux'

class Posts extends Component {
  render() {
    return (
      <div className='col-sm-9'>
        <h3>All Posts</h3>
      </div>
    );
  }
}


const mapStateToProps = ({ posts }) => {
  return { posts: posts || [] }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPosts: () => dispatch(getAllPosts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)
