import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createComment } from '../actions'
import serializeForm from 'form-serialize'
import {
  Button,
  Form,
  FormGroup,
  Input } from 'reactstrap'

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      author: '',
      body: ''
    };
  }

  componentDidMount () {
    this.props.createComment(this.props.parentId)
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault()

    const values = serializeForm(event.target, { hash: true })
    values["timestamp"] = Date.now()
    values["id"] = Date.now()
    values["parentId"] = this.props.parentId
    this.props.createComment(values)
    window.location.reload()
  };

  render() {
    const authorField = this.state.author
    const bodyField = this.state.body
    const emptyFields = authorField.length > 3 && bodyField.length > 10

    return (
      <div className='col-sm-12'>
        <hr />
        <h3>Leave a comment</h3>
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
    createComment: (comment) => dispatch(createComment(comment))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm)
