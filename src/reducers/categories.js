import {
  GET_ALL_CATEGORIES,
} from '../actions'

const initialState = {
  categories: []
}

function categories (state = initialState, action) {
  const { categories } = action
  switch (action.type) {
    case GET_ALL_CATEGORIES :
      return {
        ...state,
        categories: categories
      }
    default :
      return state
  }
}

export default categories;
