import React, { Component } from 'react'
import { connect } from 'react-redux'
import { downVotePost, upVotePost } from '../actions'

class VotePost extends Component {

  upVote = () => {
    this.props.upVotePost(this.props.postID);
  }

  downVote = () => {
    this.props.downVotePost(this.props.postID);
  }

  render() {
    return (
      <div className="vote-post">

        <div>
          <div onClick={ this.upVote }>
            <i className="fa fa-chevron-up" aria-hidden="true"></i>
          </div>
          <div id="voteScore">
            { this.props.voteScore }
          </div>
          <div onClick={ this.downVote }>
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
          </div>
        </div>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    upVotePost: (id) => dispatch(upVotePost(id)),
    downVotePost: (id) => dispatch(downVotePost(id))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(VotePost)
