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

export const CREATE_POST = 'CREATE_POST'
export function createPost(post) {
  return dispatch => {
    FetchAPI.createPost(post)
      .then(post => dispatch({
        type: CREATE_POST,
        post
      })
  )}
}

export const EDIT_POST = 'EDIT_POST'
export function editPost({ postID, title, body }) {
  return dispatch => {
    FetchAPI.editPost({ postID, title, body })
      .then(post => dispatch({
        type: EDIT_POST,
        post
      })
  )}
}

export const DELETE_POST = 'DELETE_POST'
export function deletePost(post) {
  return dispatch => {
    FetchAPI.deletePost(post)
      .then(post => dispatch({
        type: DELETE_POST,
        post
      })
  )}
}

export const GET_COMMENTS_BY_POST = 'GET_COMMENTS_BY_POST'
export function commentGetByParent(postID) {
  return dispatch => {
    FetchAPI.commentGetByParent(postID)
      .then(comments => dispatch({
        type: GET_COMMENTS_BY_POST,
        comments
      })
  )}
}

export const CREATE_COMMENT = 'CREATE_COMMENT'
export function createComment(comment) {
  return dispatch => {
    FetchAPI.createComment(comment)
      .then(comment => dispatch({
        type: CREATE_COMMENT,
        comment
      })
  )}
}

export const DELETE_COMMENT = 'DELETE_COMMENT'
export function deleteComment(commentID) {
  return dispatch => {
    FetchAPI.deleteComment(commentID)
      .then(post => dispatch({
        type: DELETE_COMMENT,
        post
      })
  )}
}

export const EDIT_COMMENT = 'EDIT_COMMENT'
export function editComment({ commentID, timestamp, body }) {
  return dispatch => {
    FetchAPI.editComment({ commentID, timestamp, body })
      .then(comment => dispatch({
        type: EDIT_COMMENT,
        comment
      })
  )}
}

export const VOTE_POST = 'VOTE_POST'
export function votePost(id) {
  return dispatch => {
    FetchAPI.votePost(id)
      .then(post => dispatch({
        type: VOTE_POST,
        post
    })
  )}
}

export const VOTE_COMMENT = 'VOTE_COMMENT'
export function voteComment({ id, option }) {
  return dispatch => {
    FetchAPI.voteComment({ id, option })
      .then(comment => dispatch({
        type: VOTE_COMMENT,
        comment
      })
  )}
}
