import {
  GET_SINGLE_POST,
  CREATE_POST,
  DELETE_POST,
  EDIT_POST
} from '../actions'

function post (state = {}, action) {
  const { post } = action
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
    case DELETE_POST :
      return {
        ...post
      }
    default :
      return state
  }
}

export default post;
