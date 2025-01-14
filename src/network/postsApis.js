import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Fetch Posts data
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
});

// Adding new post
export const addPost = createAsyncThunk("posts/addPost", async (postInfo) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    postInfo
  );
  return response.data;
});

// Deleting a post
export const deletePost = createAsyncThunk("posts/deletePost", async (postId) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  return postId; 
});
