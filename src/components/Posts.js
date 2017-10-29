import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllPosts, getByCategory } from '../actions'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

import '../css/Posts.css'

class Posts extends Component {

   state = {
      posts: [],
    }

  componentDidMount () {
    const categoryTitle = this.props.categoryTitle
    if (!categoryTitle) {
      this.props.getAllPosts()
    } else {
      this.props.getByCategory(categoryTitle)
    }
  }

  filterPosts(event) {
    switch (event) {
     case 'votes':
       this.setState(this.props.posts.sort((a, b) => a.voteScore - b.voteScore))
       break;
     case 'posted':
       this.setState(this.props.posts.sort((a, b) => a.timestamp - b.timestamp))
       break;
     default:
       this.setState(this.props.posts.sort((a, b) => b.voteScore - a.voteScore))
     }
  }


  render() {

   const { posts } = this.props
   const hasPosts = posts.length > 0

    return (
      <div className='col-sm-9 text-center'>

        <div className='row justify-content-end'>
          <div className="form-group">
            <select
              value={this.props.value}
              onChange={(e) => this.filterPosts(e.target.value)}
              className="form-control"
              disabled={!hasPosts}
              >
              <option value=''>Most Votes</option>
              <option value='votes' >List Voted</option>
              <option value='posted'>Date Posted</option>
            </select>
          </div>
        </div>

      {hasPosts ? posts.map((post, i) => (
          <div key={i} className='post-list'>
            <h3 className='post-name'>
              <Link to={`/posts/${post.id}`}>
                { post.title }
              </Link>
            </h3>
            <div className='meta text-muted'>
              Comment { post.commentCount } »
              Category { post.category }  »
              Published <Moment fromNow>{ post.timestamp }</Moment>  »
              Votes (<span data-negative>{ post.voteScore }</span>)</div>
          </div>
        )) : (
          <div className='noComments'>
            <h4>No posts yet ...</h4>
          </div>
       )}

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
