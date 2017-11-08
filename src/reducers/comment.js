import {
  CREATE_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
} from '../actions'

function comment (state = {}, action) {
  const { comment } = action
  switch (action.type) {
    case CREATE_COMMENT:
      return {
        state,
        ...comment
      }
    case DELETE_COMMENT :
      return {
        ...comment
      }
    case EDIT_COMMENT :
      return {
        ...comment
      }
    default :
      return state
  }
}

export default comment;
