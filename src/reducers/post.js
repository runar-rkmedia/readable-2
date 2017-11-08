import {
  GET_SINGLE_POST,
  CREATE_POST,
  DELETE_POST,
  EDIT_POST,
  DOWN_VOTE_POST,
  UP_VOTE_POST
} from '../actions'

const initialState = {
  post: [],
  posts: []
}

function post (state = initialState, action) {
  const { post, posts } = action
  switch (action.type) {
    case GET_SINGLE_POST :
      return {
        ...post
      }
    case CREATE_POST :
      return {
        ...post
      }
    case EDIT_POST :
      return {
        ...post
      }
    case UP_VOTE_POST :
      return {
        ...posts
      }

    case DOWN_VOTE_POST :
      return {
        ...posts
      }

    case DELETE_POST :
      return {
        ...state.posts, [action.id]: null

      }
    default :
      return state
  }
}


export default post;
