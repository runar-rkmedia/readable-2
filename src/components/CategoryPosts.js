import React, { Component } from 'react'
import Posts from './Posts'

import '../css/Posts.css'

class CategoryPosts extends Component {

  render() {

    return (
      <div className='col-sm-9 text-center'>
        <div className='category-title rotate-title'>
          <h1>{ this.props.match.params.category }</h1>
        </div>
        <Posts categoryTitle={ this.props.match.params.category } />
      </div>
    );
  }
}

export default CategoryPosts
