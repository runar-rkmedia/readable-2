import {
  GET_SINGLE_POST,
  CREATE_POST,
  DELETE_POST,
  EDIT_POST,
  VOTE_POST
} from '../actions'

const initialState = {
  post: [],
  posts: []
}

function post (state = initialState, action) {
  const { post } = action
  switch (action.type) {

    case GET_SINGLE_POST :
    case EDIT_POST :
    case CREATE_POST :
      return {
        ...post
      }
    case VOTE_POST :
      return {
        ...post
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
