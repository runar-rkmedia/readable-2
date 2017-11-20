import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createPost } from '../actions'
import serializeForm from 'form-serialize'
import { Link, withRouter } from 'react-router-dom'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert
} from 'reactstrap'

class CreatePost extends Component {
  state = {
    title: '',
    body: '',
    category: '',
    author: '',
    hasError: false
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  validForm = () => {
    const { title, body, author } = this.state;
    return title !== '' && body !== '' && author !== ''  ;
  };

  redirectHome(){
    this.props.history.push('/')
  };

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.validForm()) {
      const values = serializeForm(event.target, { hash: true })
      values["timestamp"] = Date.now()
      values["id"] = Date.now()
      this.props.createPost(values)
      this.redirectHome()
    } else {
      this.setState({  hasError: true })
    }
  };

  render() {
    const { categories, editing } = this.props

    return (
      <div className='row'>
        <div className='col-sm-12'>
          {this.state.hasError && (
            <Alert color="danger">
              <h4 className="alert-heading">Form Error!</h4>
              <hr />
              All fields are required.
             </Alert>
          )}
          <div className='post-heading'>{ editing ? <h1>Edit Post</h1> : <h1>New Post</h1> }</div>
          <Form onSubmit={ this.handleSubmit }>
            <FormGroup>
              <Input
                type='text'
                name='title'
                id='title'
                placeholder='Post Title'
                value={  this.state.title }
                onChange={ this.handleChange }/>
            </FormGroup>
            <FormGroup>
              <Label for="category">Choose Category</Label>
              <Input
                type='select'
                name='category'
                id='category'
                value={ this.state.category }
                onChange={ this.handleChange } >
                {categories.map((category) => (
                  <option
                    key={ category.path }
                    disabled={ editing }
                    value={ category.name }>
                      {category.name}
                  </option>
                ))}
                </Input>
            </FormGroup>
            <FormGroup>
              <Input
                type='textarea'
                name='body'
                id='body'
                placeholder='Post Body'
                value={ this.state.body }
                onChange={ this.handleChange } />
            </FormGroup>
            <FormGroup>
              <Input
                type='text'
                name='author'
                id='author'
                placeholder='Whats your name'
                value={ this.state.author }
                readOnly={ editing }
                onChange={ this.handleChange } />
            </FormGroup>
            <Button color='success' size='lg' block>Submit</Button>
          </Form>

          <div className="back-home">
            <Link to='/'>Back Home</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post)),
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost))

CreatePost.propTypes = {
  categories: PropTypes.array.isRequired,
  createPost: PropTypes.func.isRequired,
  history: PropTypes.object,
  location: PropTypes.object
}
