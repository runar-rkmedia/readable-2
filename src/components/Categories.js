import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getCategories } from '../actions'
import { connect } from 'react-redux'

import Posts from './Posts'

class Categories extends Component {

  render() {

    return (
      <div className='row'>
        <div className='col-sm-3'>
          <h6>Test</h6>
          {this.props.categories.map((category, i) => (
            <div key={i} className='category-list'>
              <Link to={`/${category.path}`}>
                <h3 className='category-name'>{category.name}</h3>
              </Link>
            </div>
          ))}
        </div>
        <Posts />
      </div>

    );
  }
}

const mapStateToProps = ({ categories }) => {
  return { categories: categories.categories }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(getCategories())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories)
