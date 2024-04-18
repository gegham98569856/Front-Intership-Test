import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import imagesReducer from '../features/images/imagesSlice';
import commentsReducer from '../features/comments/commentsSlice';
import authReducer from './reducers/authReducer';  // Ensure this path is correct

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    images: imagesReducer,
    comments: commentsReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
