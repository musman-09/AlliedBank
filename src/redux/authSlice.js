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
  },
});

export const { setToken } = counterSlice.actions;

export default counterSlice.reducer;
