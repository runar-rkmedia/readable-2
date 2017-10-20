import {
  GET_ALL_CATEGORIES,
} from '../actions'

const initialCategories = {

  categories: [
      {
        name: 'react',
        path: 'react'
      },
      {
        name: 'redux',
        path: 'redux'
      },
      {
        name: 'udacity',
        path: 'udacity'
      },
      {
        name: 'rails',
        path: 'rails'
      }
  ]
}

function categories (state = initialCategories, action) {
  const { categories } = action

  switch (action.type) {
    case GET_ALL_CATEGORIES :
      return {
        ...state
      }
    default :
      return state
  }
}

export default categories
