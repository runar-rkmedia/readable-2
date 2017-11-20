import {
  GET_ALL_POSTS,
  GET_CATEGORY_POSTS
} from '../actions'

const initialState = {}

function posts (state = initialState, action) {
  const { posts } = action
  switch (action.type) {

    case GET_CATEGORY_POSTS :
    case GET_ALL_POSTS :
      // return posts.filter(post => !post.deleted)
            return {
        ...state, // This line will make sure that the posts already downloaded are not removed from the store. If you don't want this behavior, remove it.
        ...posts.reduce( // Turn array into hashtable
          (map, obj) => {
            map[obj.id] = obj
            return map
          },
          { ...state }
        )
      }


    default :
      return state
  }
}

export default posts;
