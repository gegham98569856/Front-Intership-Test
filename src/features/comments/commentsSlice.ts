// src/features/comments/commentsSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface CommentsState {
  comments: Comment[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CommentsState = {
  comments: [],
  status: 'idle',
  error: null,
};

export const fetchComments = createAsyncThunk('comments/fetchComments', async () => {
  const response = await axios.get<Comment[]>('https://jsonplaceholder.typicode.com/comments?_limit=20');
  return response.data;
});

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch comments';
      });
  },
});

export default commentsSlice.reducer;
