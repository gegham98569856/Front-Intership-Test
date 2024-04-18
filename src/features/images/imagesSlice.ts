// src/features/images/imagesSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface ImagesState {
  images: Photo[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ImagesState = {
  images: [],
  status: 'idle',
  error: null,
};

export const fetchImages = createAsyncThunk('images/fetchImages', async () => {
  const response = await axios.get<Photo[]>('https://jsonplaceholder.typicode.com/photos?_limit=20');
  return response.data;
});

const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.images = action.payload;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch images';
      });
  },
});

export default imagesSlice.reducer;
