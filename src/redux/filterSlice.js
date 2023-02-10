import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterId: '',
  count: 42,
};
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      let id = payload[0];
      let num = payload[1];
      return { ...state, filterId: id, count: num };
    },
  },
});
export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
