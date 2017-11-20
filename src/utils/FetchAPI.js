import axios from 'axios';

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const url = 'http://localhost:3001'

const headers = {
  'Accept': 'application/json',
  'Content-Type':'application/json',
  'Authorization': token
}

export const commentGetByParent = (postID) =>
  axios.get(`${url}/posts/${postID}/comments`, { headers })
    .then(comments => comments.data
      .sort((a, b) => b.voteScore - a.voteScore)
      .filter(comment => !comment.deleted))

export const createComment = (comment) =>
  axios.post(`${url}/comments`, { ...comment}, { headers })
    .then(comment => comment.data)

export const deleteComment = (commentID) =>
  axios.delete(`${url}/comments/${commentID}`, { headers })

export const editComment = ({commentID, timestamp, body}) =>
  axios.put(`${url}/comments/${commentID}`, { timestamp, body }, { headers })
    .then(comment => comment.data)

export const getAllPosts = () =>
  axios.get(`${url}/posts`, { headers })
    .then(posts => posts.data)

export const getByCategory = (category) =>
  axios.get(`${url}/${category}/posts`, { headers })
    .then(posts => posts.data)

export const getCategories = () =>
  axios.get(`${url}/categories`, { headers })
    .then(res => res.data.categories)
    .catch(error => error);

export const getPost = (postID) =>
  axios.get(`${url}/posts/${postID}`, { headers })
    .then(post => post.data)

export const createPost = (post) =>
  axios.post(`${url}/posts`,{ ...post}, { headers })
    .then(post => post.data)

export const editPost = ({postID, title, body}) =>
  axios.put(`${url}/posts/${postID}`, { title, body }, { headers })
  .then(post => post.data)

export const deletePost = (post) =>
  axios.delete(`${url}/posts/${post}`, { headers })

export const voteComment = ({id, option}) =>
  axios.post(`${url}/comments/${id}`, { option: option }, { headers })
    .then(comment => comment.data)

export const votePost = ({id, option}) =>
  axios.post(`${url}/posts/${id}`, { option: option }, { headers })
    .then(post => post.data)
