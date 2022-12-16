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

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  try {
    const response = await fetch('http://localhost:5000/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:5000/books/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return id;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const bookSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    // get all books
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

    // Add new book
    builder.addCase(addBook.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.loading = false;
      state.books.push(action.payload);
    });
    builder.addCase(addBook.rejected, (state) => {
      state.loading = false;
    });

    // Delete book
    builder.addCase(deleteBook.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action);
      state.books = state.books.filter((book) => {
        return book.id !== action.payload;
      });
    });
    builder.addCase(deleteBook.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default bookSlice.reducer;
