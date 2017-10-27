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

export const GET_CATEGORY_POSTS = 'GET_CATEGORY_POSTS'
export function getByCategory(category) {
  return dispatch => {
    FetchAPI.getByCategory(category)
      .then(posts => dispatch({
        type: GET_CATEGORY_POSTS,
        posts
      })
  )}
}

export const GET_SINGLE_POST = 'GET_SINGLE_POST'
export function getPost(postID) {
  return dispatch => {
    FetchAPI.getPost(postID)
      .then(post => dispatch({
        type: GET_SINGLE_POST,
        post
      })
  )}
}
