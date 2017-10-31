import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../actions'
import serializeForm from 'form-serialize'
import { Link } from 'react-router-dom'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert
} from 'reactstrap'


class CreatePost extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      category: '',
      author: '',
      hasError: false
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  validForm = () => {
    const { title, body, author } = this.state;
    return title !== '' && body !== '' && author !== '' ;
  };

   handleSubmit = (event) => {
     event.preventDefault()

     if (this.validForm()) {
       const values = serializeForm(event.target, {hash: true })
       values["timestamp"] = Date.now()
       values["id"] = Date.now()

       this.props.createPost(values)

      } else {
        this.setState({  hasError: true });
        console.log ('this has some errors ')
      }
   };


  render() {
    const { categories } = this.props

    return (
      <div className='col-sm-12'>
        {this.state.hasError && (
          <Alert color="danger">
            <h4 className="alert-heading">Form Error!</h4>
            <hr />
            All fields are required.
           </Alert>
        )}

        <h1>New Post</h1>

        <Form onSubmit={ this.handleSubmit }>
          <Input type="hidden" name="voteScore" id="voteScore" value="0" />
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
              value={ this.state.category }
              onChange={ this.handleChange } >
              {categories.map((category) => (
                <option
                  key={ category.path }
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
              onChange={ this.handleChange } />
          </FormGroup>
          <Button color='success' size='lg' block>Submit</Button>
        </Form>

        <div className="back-home">
          <Link to='/'>Back Home</Link>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost)
