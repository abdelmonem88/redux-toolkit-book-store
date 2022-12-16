import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogInOut: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export default authSlice.reducer;
export const { setLogInOut } = authSlice.actions;
