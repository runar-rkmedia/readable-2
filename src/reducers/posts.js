import {
  GET_ALL_POSTS,
  GET_CATEGORY_POSTS
} from '../actions'

const initialState = {
  posts: []
}

function posts (state = initialState, action) {
  const { posts } = action
  switch (action.type) {

    case GET_ALL_POSTS :
      return posts.filter(post => !post.deleted)

    case GET_CATEGORY_POSTS :
      return posts.filter(post => !post.deleted)

    default :
      return state
  }
}

export default posts;
