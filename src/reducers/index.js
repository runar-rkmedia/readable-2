import { combineReducers } from 'redux'

import {
  GET_ALL_CATEGORIES,
  GET_ALL_POSTS
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

function posts (state = [], action) {
  switch (action.type) {
    case GET_ALL_POSTS :
      return {
        ...state,
        posts: action.posts
      }
    default :
      return state
  }
}

export default combineReducers({
  categories,
  posts
});
