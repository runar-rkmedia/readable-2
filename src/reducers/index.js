import {
  GET_ALL_CATEGORIES,
} from '../actions'

const initialState = {
  categories: []
}

function categories (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CATEGORIES :
      return {
        ...state,
        categories: action.categories
      }
    default :
      return state
  }
}

export default categories
