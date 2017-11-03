import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost, deletePost, editPost  } from '../actions'
import { Link, withRouter } from 'react-router-dom'
import serializeForm from 'form-serialize'
import Comments from './Comments'
import CommentForm from './CommentForm'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input } from 'reactstrap'

import '../css/Post.css'

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: true,
      modal: false,
      title: '',
      body: ''
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
      title: this.props.post.title,
      body: this.props.post.body
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const values = serializeForm(event.target, { hash: true })
    values["postID"] = this.props.post.id
    this.props.editPost(values)
    this.toggle()
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  componentDidMount () {
    this.props.getPost(this.props.match.params.id)
  }

  handleRemove = () => {
    this.props.deletePost(this.props.post.id)
    this.props.history.push('/')
  }

  render() {
    const { post, editing } = this.props
    const hasComments = post.commentCount
    const emptyFields = !this.state.title || !this.state.body

    return (
      <div className='col-sm-9'>
        <div className='post-heading'>
          <h1>{ post.title }</h1>
        </div>
        <div className='post-body'>
          <div className='meta text-muted'>
            Written by { post.author } »
            Votes { post.voteScore } »
            Comments { post.commentCount }
          </div>
          <p> { post.body }</p>
          <Button
            color='success'
            size='sm'
            onClick={ this.handleRemove }>
              Delete
          </Button>
          {' '}
          <Button
            color='danger'
            size='sm'
            onClick={this.toggle}>
              Edit
          </Button>
        </div>
        <div className='category-title rotate-title'>
          <h1>
            <Link
              to={`/${ post.category }/posts`}
              key={ post.category } >
                { post.category }
            </Link>
          </h1>
        </div>

        <CommentForm
          parentId={ post.id }/>

        <div className='commentsHeading'>Comments</div>
        {hasComments > 0 ? (
          <Comments
            key={ post.id }
            postID={ post.id }
          />
        ) : (
          <div className='noComments'>
            <h4>No comments yet ...</h4>
          </div>
        )}


        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{ this.state.title }</ModalHeader>
          <ModalBody>
            <Form onSubmit={ this.handleSubmit }>
              <FormGroup>
                <Input
                  type='text'
                  name='title'
                  id='title'
                  placeholder='Post Title'
                  value={ this.state.title }
                  onChange={ this.handleChange }/>
              </FormGroup>
              <FormGroup>
                <Label for="category">Choose Category</Label>
                <Input
                  type='select'
                  name='category'
                  id='category'
                  disabled={ !editing }
                  onChange={ this.handleChange }
                  value={ post.category }>
                  <option> { post.category } </option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Input
                  type='textarea'
                  name='body'
                  id='body'
                  placeholder='Post Body'
                  onChange={ this.handleChange }
                  value={ this.state.body } />
              </FormGroup>
              <FormGroup>
                <Input
                  type='text'
                  name='author'
                  id='author'
                  placeholder='Whats your name'
                  disabled={ !editing }
                  onChange={ this.handleChange }
                  value={ post.author }/>
              </FormGroup>
              <Button color='success' size='lg' block disabled={emptyFields}>Submit Comment</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = ({ post }) => {
  return { post: post || [] }
}

const mapDispatchToProps = (dispatch) => {
 return {
   getPost: (id) => dispatch(getPost(id)),
   deletePost: (id) => dispatch(deletePost(id)),
   editPost: (post) => dispatch(editPost(post))
 }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Post))
