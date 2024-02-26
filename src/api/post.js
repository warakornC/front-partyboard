import axios from "../config/axios";


export const createPost = formData => axios.post('/posts', formData);
