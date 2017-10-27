import {
  GET_SINGLE_POST,
} from '../actions'


function post (state = {}, action) {
  const { post } = action
  switch (action.type) {
    case GET_SINGLE_POST :
      return {
        ...post
      }
    default :
      return state
  }
}

export default post;
