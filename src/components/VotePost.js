import React, { Component } from 'react'
import { connect } from 'react-redux'
import { votePost } from '../actions'
import VoteScore from './VoteScore'


class VotePost extends Component {

  votePostOption = ({id, option}) => {
    this.props.votePost({id, option})
  }

  render() {
    return (
      <div className="vote-post">

          <div onClick={() => this.votePostOption({id: this.props.postID, option: 'upVote'})}>
            <i className="fa fa-chevron-up" aria-hidden="true"></i>
          </div>
          <VoteScore
            voteScore={ this.props.voteScore }
            />

          <div onClick={() => this.votePostOption({id: this.props.postID, option: 'downVote'})}>
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
          </div>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    votePost: (id) => dispatch(votePost(id))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(VotePost)
