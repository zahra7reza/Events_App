import axios from "axios";

const url = "http://localhost:3000/posts";

export const fetchPosts = () => axios.get(url);
export const createPOst = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedpost) =>
  axios.patch(`${url}/${id}`, updatedpost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/$/{id}/likePost`);
