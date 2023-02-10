import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
export const perfumeAPIThunk = createAsyncThunk('perfumeThunk', async (data) => {
  let { filter, page } = data;
  let response = await axios.get(
    `https://6310c4a9826b98071a4a3b1b.mockapi.io/perfumes?category=${
      filter > 0 ? filter : ''
    }&page=${page}&limit=8`,
  );
  return response.data;
});
export const getBrandPerfume = createAsyncThunk('getBrandPerfume', async (id) => {
  let response = await axios.get(
    `https://6310c4a9826b98071a4a3b1b.mockapi.io/perfumes?brandId=${id}`,
  );
  return response.data;
});
export const perfumeDetailApiThunk = createAsyncThunk('perfumeDetail', async (id) => {
  let response = await axios.get(`https://6310c4a9826b98071a4a3b1b.mockapi.io/perfumes/${id}`);
  return response.data;
});
export const brandsAPIThunk = createAsyncThunk('brandsThunk', async () => {
  let response = await axios.get(`https://6310c4a9826b98071a4a3b1b.mockapi.io/brands`);
  return response.data;
});
export const brandDetailApiThunk = createAsyncThunk('brand detail', async (data) => {
  let response = await axios.get(`https://6310c4a9826b98071a4a3b1b.mockapi.io/brands?id=${data}`);
  return response.data;
});
export const commentsApiThunk = createAsyncThunk('comments', async () => {
  let response = await axios.get(`https://6310c4a9826b98071a4a3b1b.mockapi.io/comments`);
  return response.data;
});

const initialState = {
  perfumes: [],
  brands: [],
  brandDetail: {},
  perfumeDetail: {},
  brandPerfume: [],
  comments: [],
  menu: false,
  currentPage: 1,
};
export const perfumeSlice = createSlice({
  name: 'perfumes',
  initialState,
  reducers: {
    removeBrandOrPerfume: (state) => {
      return { ...state, brandDetail: {}, perfumeDetail: {} };
    },
    addComment: (state, { payload }) => {
      state.comments.push({ text: payload, id: 2 });
    },
    setMenu: (state, { payload }) => {
      return { ...state, menu: payload };
    },
    setPage: (state, { payload }) => {
      return { ...state, currentPage: payload };
    },
  },
  extraReducers: {
    [perfumeAPIThunk.fulfilled]: (state, { payload }) => {
      return { ...state, perfumes: payload };
    },
    [brandsAPIThunk.fulfilled]: (state, { payload }) => {
      return { ...state, brands: payload };
    },
    [brandDetailApiThunk.fulfilled]: (state, { payload }) => {
      return { ...state, brandDetail: payload };
    },
    [perfumeDetailApiThunk.fulfilled]: (state, { payload }) => {
      return { ...state, perfumeDetail: payload };
    },
    [commentsApiThunk.fulfilled]: (state, { payload }) => {
      return { ...state, comments: payload };
    },
    [getBrandPerfume.fulfilled]: (state, { payload }) => {
      return { ...state, brandPerfume: payload };
    },
  },
});
export const { removeBrandOrPerfume, addComment, setMenu, setPage } = perfumeSlice.actions;
export default perfumeSlice.reducer;
