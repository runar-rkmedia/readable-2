import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllPosts } from '../actions'

class Posts extends Component {

  componentDidMount () {
    this.props.getAllPosts()
  }

  render() {
    const { posts } = this.props

    return (
      <div className='col-sm-9'>
        {posts.map((post, i) => (
          <div key={i} className='category-list'>
            <h5 className='category-name'>{post.title}</h5>
          </div>
        ))}
      </div>
    );
  }
}


const mapStateToProps = ({ posts }) => {
  return { posts: posts.posts || [] }
}

const mapDispatchToProps = (dispatch) => {
  return { getAllPosts: () => dispatch(getAllPosts()) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)
