import React, { Component } from 'react'

class VoteScore extends Component {
  render() {
    return (
      <div id="voteScore">
        { this.props.voteScore }
      </div>
    );
  }
}

export default VoteScore
