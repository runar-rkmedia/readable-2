import axios from 'axios';

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const url = 'http://localhost:3002'

const headers = {
  'Accept': 'application/json',
  'Content-Type':'application/json',
  'Authorization': token
}

export const getAllPosts = () =>
  axios.get(`${url}/posts`, { headers })
  .then(res => res.data.posts)
  .catch(error => error);

export const getCategories = () =>
  axios.get(`${url}/categories`, { headers })
  .then(res => res.data.categories)
  .catch(error => error);
