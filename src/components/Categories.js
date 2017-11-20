import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCategories } from '../actions'

import '../css/Landing.css'

class Categories extends Component {

  componentDidMount () {
    this.props.getCategories()
  }

  handleClick = () => {
    this.props.history.push('/:category/posts');
  };

  render() {
    const { categories } = this.props

    return (
      <div className='col-sm-3'>
        <div  className='category-list'>

          {categories.map((category, i) => (
            <div key={i}>
              <Link
                onClick={this.handleClick}
                to={`/${category.path}/posts`}
                key={category.id}
                className='category-name'>
                  <h3 className='menu__item-name'>{category.name}</h3>
              </Link>
            </div>
          ))}
          <Link to={`/`} className="btn btn-sm btn-block btn-outline-danger" key='Home'>
            All Posts
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ categories }) => {
  return { categories: categories.categories || [] }
}

const mapDispatchToProps = (dispatch) => {
  return { getCategories: () => dispatch(getCategories()) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories)

Categories.propTypes = {
  categories: PropTypes.array,
  getCategories: PropTypes.func
}
