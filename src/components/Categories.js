import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCategories } from '../actions'


class Categories extends Component {

  componentDidMount () {
    this.props.getCategories()
  }

  render() {
    const { categories } = this.props

    return (
      <div className='row'>
        <div className='col-sm-3'>
          {categories.map((category, i) => (
            <div key={i} className='category-list'>
              <Link to={`/${category.path}`}>
                <h3 className='category-name'>{category.name}</h3>
              </Link>
            </div>
          ))}
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
