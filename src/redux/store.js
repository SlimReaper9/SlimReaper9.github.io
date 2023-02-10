import perfumeSlice from './perfumeSlice';
import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filterSlice';
import cartSlice from './cartSlice';
const store = configureStore({
  reducer: {
    allPerfumes: perfumeSlice,
    filter: filterSlice,
    cart: cartSlice,
  },
});
export default store;
