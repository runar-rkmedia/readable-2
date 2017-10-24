import {
  GET_ALL_POSTS
} from '../actions'

const initialState = {
  posts: []
}

function posts (state = initialState, action) {
  const { posts } = action
  switch (action.type) {
    case GET_ALL_POSTS :
      return {
        ...state,
        posts: posts
      }
    default :
      return state
  }
}

export default posts;