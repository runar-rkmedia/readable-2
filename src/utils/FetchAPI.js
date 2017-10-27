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

export const getAllPosts = () =>
  axios.get(`${url}/posts`, { headers })
    .then(posts => posts.data
      .sort((a, b) => b.voteScore - a.voteScore)
      .filter(post => !post.deleted))

export const getByCategory = (category) =>
  axios.get(`${url}/${category}/posts`, { headers })
    .then(posts => posts.data
      .sort((a, b) => b.voteScore - a.voteScore)
      .filter(post => !post.deleted))

export const getCategories = () =>
  axios.get(`${url}/categories`, { headers })
    .then(res => res.data.categories)
    .catch(error => error);

export const getPost = (postID) =>
  axios.get(`${url}/posts/${postID}`, { headers })
    .then(post => post.data)
