import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterId: '',
};
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      return { ...state, filterId: payload };
    },
  },
});
export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
