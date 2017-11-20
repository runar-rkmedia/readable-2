import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createComment, deleteComment, editComment  } from '../actions'
import serializeForm from 'form-serialize'

import {
  Button,
  Form,
  FormGroup,
  Input } from 'reactstrap'

class CommentFields extends Component {
  state = {
    body: '',
    author: ''
  };

  componentDidMount () {
    if (this.props.editing) {
      this.setState({
        author: this.props.author,
        body: this.props.body,
      });
    } else {
      this.props.createComment(this.props.parentId)
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault()

    const values = serializeForm(event.target, { hash: true })
    values["timestamp"] = Date.now()
    if (this.props.editing) {
      values["commentID"] = this.props.commentID
      this.props.editComment(values)
    } else {
      values["parentId"] = this.props.parentId
      values["id"] = Date.now()
      this.props.createComment(values)
    }
    //window.location.reload()
    this.props.closeModal()
  };

  render() {
    const authorField = this.state.author
    const bodyField = this.state.body
    const emptyFields = authorField.length > 3 && bodyField.length > 10

    return (
      <div>

        <Form onSubmit={ this.handleSubmit }>
          <FormGroup>
            <Input
              type='textarea'
              name='body'
              id='body'
              placeholder='Your Comment'
              value={ this.state.body }
              onChange={ this.handleChange }/>
          </FormGroup>
          <FormGroup>
            <Input
              type='text'
              name='author'
              id='author'
              placeholder='Your Name'
              value={ this.state.author }
              onChange={ this.handleChange }/>
          </FormGroup>
          <Button color='success' size='lg' block disabled={! emptyFields }>Submit</Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (comment) => {
  return { comment: comment }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (commentID) => dispatch(deleteComment(commentID)),
    editComment: (commentID) => dispatch(editComment(commentID))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentFields)

CommentFields.propTypes = {
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  editing: PropTypes.bool,
  parentId: PropTypes.string
}

Input.propTypes = {
  body: PropTypes.string,
  name: PropTypes.string,
}
