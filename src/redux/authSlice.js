import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },

    logoutUser: (state, action) => {
      state.token = null;
    },
  },
});

export const { setToken, logoutUser } = counterSlice.actions;

export default counterSlice.reducer;
