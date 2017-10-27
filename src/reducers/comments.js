import {
  GET_COMMENTS_BY_POST,
} from '../actions'

const initialState = {
  comments: []
}

function comments (state = initialState, action) {
  const { comments } = action
  switch (action.type) {
    case GET_COMMENTS_BY_POST :
      return {
        comments: comments
      }
    default :
      return state
  }
}

export default comments;
