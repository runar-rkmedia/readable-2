import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentFields from './CommentFields'

class CommentForm extends Component {
  state = {
    editing: false,
    author: '',
    body: ''
  };

  render() {

    return (
      <div className='col-sm-12'>
        <hr />
        <h3>Leave a comment</h3>
        <CommentFields
          editing={ this.state.editing }
          body={ this.state.body }
          author={ this.state.author }
          parentId={ this.props.parentId }/>
      </div>
    );
  }
}

export default CommentForm

CommentForm.propTypes = {
  parentId: PropTypes.string
}
