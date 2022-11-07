import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
export const perfumeAPIThunk = createAsyncThunk('perfumeThunk', async (data) => {
  let { filter } = data;
  let response = await axios.get(
    `https://6310c4a9826b98071a4a3b1b.mockapi.io/perfumes?category=${filter > 0 ? filter : ''}`,
  );
  return response.data;
});

const initialState = {
  perfumes: [],
};
export const perfumeSlice = createSlice({
  name: 'perfumes',
  initialState,
  reducers: {},
  extraReducers: {
    [perfumeAPIThunk.fulfilled]: (state, { payload }) => {
      return { ...state, perfumes: payload };
    },
  },
});
export default perfumeSlice.reducer;
