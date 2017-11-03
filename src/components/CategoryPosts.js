import React, { Component } from 'react'
import Posts from './Posts'
import Categories from './Categories'

class CategoryPosts extends Component {

  render() {

    return (
      <div className='row'>
        <div className='col-sm-12'>
          <div className='category-title rotate-title'>
            <h1>{ this.props.match.params.category }</h1>
          </div>
        </div>
        <Categories />
        <Posts categoryTitle={ this.props.match.params.category } />
      </div>
    );
  }
}

export default CategoryPosts
