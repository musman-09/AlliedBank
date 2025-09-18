import { configureStore } from '@reduxjs/toolkit';
import counterReducer from  "../redux/authSlice"


export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
