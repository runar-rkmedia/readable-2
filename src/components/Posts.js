import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllPosts, getByCategory, deletePost } from '../actions'
import { Link, withRouter } from 'react-router-dom'
import Moment from 'react-moment'
import VotePost from './VotePost'


import '../css/Posts.css'

class Posts extends Component {

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
       this.setState(this.props.posts.sort((a, b) => b.timestamp - a.timestamp))
       break;
     default:
       this.setState(this.props.posts.sort((a, b) => b.voteScore - a.voteScore))
     }
  }


  onVoteChangeHandler = id => {
    console.log('this should update the post');
  }

  handleRemove = event => {
    this.props.deletePost(event)
    //window.location.reload()
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
              disabled={!hasPosts}>
              <option value=''>Most Votes</option>
              <option value='votes' >List Voted</option>
              <option value='posted'>Date Posted</option>
            </select>
          </div>
        </div>

      {hasPosts ? posts.map((post, i) => (
          <div key={i} className='post-list'>
            <div>
              <VotePost
                voteScore={ post.voteScore }
                postID={ post.id }/>
              <h3 className='post-name'>
                <Link to={`/posts/${post.id}`}>
                  { post.title }
                </Link>
              </h3>
            </div>

            <div className='meta text-muted'>
              Comment { post.commentCount } »
              Category { post.category }  »
              Published <Moment fromNow>{ post.timestamp }</Moment> »
              { ' ' }
              <Link to={``} onClick={this.handleRemove.bind(this, post.id)}>
                Delete Post
              </Link>
            </div>
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
  return { posts: posts || [] }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPosts: () => dispatch(getAllPosts()),
    getByCategory: (id) => dispatch(getByCategory(id)),
    deletePost: (id) => dispatch(deletePost(id)) }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts))


Posts.propTypes = {
  deletePosts: PropTypes.func,
  editPosts: PropTypes.func,
  getByCategory: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
}
