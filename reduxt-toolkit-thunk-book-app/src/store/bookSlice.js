import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  loading: false,
};

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const response = await fetch('http://localhost:5000/books');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getBooks.pending, (state) => {
      state.loading = true;
      state.books = [];
    });
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.loading = false;
      state.books = action.payload;
      console.log(action.payload);
    });
    builder.addCase(getBooks.rejected, (state) => {
      state.loading = false;
      state.books = [];
    });
  },
});

export default bookSlice.reducer;
