import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
   errorModal: {
    visible: false,
    title: '',
    detail: '',
    logo: null,
    buttonName: '',
  },
};




export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setErrorModal: (state, action) => {
      state.errorModal = {
        ...state.errorModal,
        ...action.payload,
        visible: true,
      };
    },
      hideErrorModal: state => {
      state.errorModal.visible = false;
    },
    logoutUser: (state, action) => {
      state.token = null;
    },
  },
});

export const { setToken, logoutUser , setErrorModal , hideErrorModal} = counterSlice.actions;

export default counterSlice.reducer;
