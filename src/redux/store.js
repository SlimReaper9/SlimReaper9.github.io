import perfumeSlice from './perfumeSlice';
import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filterSlice';
const store = configureStore({
  reducer: {
    allPerfumes: perfumeSlice,
    filter: filterSlice,
  },
});
export default store;
