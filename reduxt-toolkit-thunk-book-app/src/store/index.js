import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './bookSlice';
import authSlice from './authSlice';

const store = configureStore({
  reducer: {
    books: bookSlice,
    auth: authSlice,
  },
});

export default store;
