import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showModal: false,
  inputValue: '',
};

// boolean 데이터는 모달 실행 관련, input 데이터 관리 관련
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state) {
      state.showModal = true;
    },
    closeModal(state) {
      state.showModal = false;
    },
    setInputValue(state, action) {
      state.inputValue = action.payload;
    },
  },
});

export const { openModal, closeModal, setInputValue } = modalSlice.actions;

export default modalSlice.reducer;
