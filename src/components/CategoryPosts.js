import React, { Component } from 'react'
import Posts from './Posts'

class CategoryPosts extends Component {

  render() {

    return (
      <div className='col-sm-9'>
        <h1>{ this.props.match.params.category }</h1>
        <Posts categoryTitle={ this.props.match.params.category } />
      </div>
    );
  }
}

export default CategoryPosts
