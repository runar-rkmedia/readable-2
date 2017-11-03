import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class OpenAddPost extends Component {
  render() {
    return (
      <div className="add-posts">
        <Link to='/post/create'>Add a post</Link>
      </div>
    );
  }
}

export default OpenAddPost
