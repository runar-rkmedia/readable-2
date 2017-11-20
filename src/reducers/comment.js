import {
  CREATE_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
  VOTE_COMMENT
} from '../actions'

function comment (state = {}, action) {
  const { comment, comments} = action
  switch (action.type) {

    case CREATE_COMMENT:
    case DELETE_COMMENT :
      return {
        ...comment
      }
    case EDIT_COMMENT :
      return {
        comments
      }

    case VOTE_COMMENT :
      return {
        ...comment
      }
      
    default :
      return state
  }
}

export default comment;
