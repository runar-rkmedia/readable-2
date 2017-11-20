import {
  GET_ALL_POSTS,
  GET_CATEGORY_POSTS,
  VOTE_POST
} from '../actions'

const initialState = {}

function posts(state = initialState, action) {
  const {
    posts, post
  } = action
  console.log(action.type, GET_ALL_POSTS, VOTE_POST)
  switch (action.type) {
    case VOTE_POST:
      return {
        ...state,
        [post.id]: post
      }
    case GET_ALL_POSTS:
      // return posts.filter(post => !post.deleted)
      return {
        ...state, // This line will make sure that the posts already downloaded are not removed from the store. If you don't want this behavior, remove it.
        ...posts.reduce( // Turn array into hashtable
          (map, obj) => {
            map[obj.id] = obj
            return map
          }, { ...state
          }
        )
      }


    default:
      return state
  }
}

export default posts;
