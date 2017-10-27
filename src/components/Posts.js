import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllPosts, getByCategory } from '../actions'
import { Link } from 'react-router-dom'

class Posts extends Component {

  componentDidMount () {
    const categoryTitle = this.props.categoryTitle
    if (!categoryTitle) {
      this.props.getAllPosts()
    } else {
      this.props.getByCategory(categoryTitle)
    }
  }

  render() {

   const { posts } = this.props

    return (
      <div className='col-sm-9'>
        {posts.map((post, i) => (
          <div key={i} className='category-list'>
            <h5 className='post-name'>({ post.voteScore })
              <Link to={`/posts/${post.id}`}>
                { post.title }
              </Link>
            </h5>
            <p>Comment { post.commentCount },  Category { post.category }</p>
          </div>
        ))}
        <h6>
          <Link to={`/`} className="btn btn-success" key='Home'>
            See all
          </Link>
        </h6>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => {
  return { posts: posts.posts || [] }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPosts: () => dispatch(getAllPosts()),
    getByCategory: (id) => dispatch(getByCategory(id))  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)
