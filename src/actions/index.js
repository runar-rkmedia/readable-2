import * as FetchAPI from '../utils/FetchAPI';

export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
export function getCategories() {
  return dispatch => {
    FetchAPI.getCategories()
      .then(categories => dispatch({
        type: GET_ALL_CATEGORIES,
        categories
      })
  )}
}

export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export function getAllPosts() {
  return dispatch => {
    FetchAPI.getAllPosts()
      .then(posts => dispatch({
        type: GET_ALL_POSTS,
        posts
      })
  )}
}
