import { createSlice } from '@reduxjs/toolkit';
import React from 'react'

const BlogSlice = createSlice({
    name: 'blog',
    initialState: [],
    reducers: {
      addblog: (state, action) => {
        state.push(action.payload);
      },
      deleteblog: (state, action) => {
        return state.filter(blog => blog.id !== action.payload);
      },
      updateblog: (state, action) => {
        const index = state.findIndex(blog => blog.id === action.payload.id);
        if (index !== -1) {
          state[index] = action.payload;
        }
      },
      clearall: (state) => {
        return [];
      },
    },
  });



export default BlogSlice
export const { addblog, deleteblog, updateblog, clearall } = BlogSlice.actions;
