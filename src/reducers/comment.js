import {
  CREATE_COMMENT
} from '../actions'

function comment (state = {}, action) {
  const { comment, comments } = action
  switch (action.type) {
    case CREATE_COMMENT:
      return {
        state,
        ...comment
      }
    default :
      return state
  }
}

export default comment;
