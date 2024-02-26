import { createContext } from 'react';
import * as postApi from '../../api/post';
import { useState } from 'react';
import { useEffect } from 'react';

export const PostContext = createContext();

export default function PostContextProvider({ children }) {
  const [posts, setPosts] = useState([]);

 

  const createPost = async formData => {
    await postApi.createPost(formData);
  };

  return (
    <PostContext.Provider value={{ createPost, posts }}>
      {children}
    </PostContext.Provider>
  );
}