import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  cart: [],
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      let findItem = state.cart.find((obj) => obj.id === payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.cart.push({ ...payload, count: 1 });
      }
      state.totalPrice = state.cart.reduce((sum, elem) => {
        return elem.count * elem.price + sum;
      }, 0);
    },
    deleteCategory: (state, { payload }) => {
      state.cart = state.cart.filter((obj) => obj.id != payload);
      state.totalPrice = state.cart.reduce((sum, elem) => {
        return elem.count * elem.price + sum;
      }, 0);
    },
    setCountPlus: (state, { payload }) => {
      let findItem = state.cart.find((obj) => obj.id === payload);
      if (findItem) {
        findItem.count++;
      }
      state.totalPrice = state.cart.reduce((sum, elem) => {
        return elem.count * elem.price + sum;
      }, 0);
    },
    setCountMinus: (state, { payload }) => {
      let findItem = state.cart.find((obj) => obj.id === payload);
      if (findItem) {
        findItem.count--;
      }
      state.totalPrice = state.cart.reduce((sum, elem) => {
        return elem.count * elem.price + sum;
      }, 0);
    },
    clearCart: (state) => {
      state.cart = [];
      state.totalPrice = 0;
    },
  },
});
export const { addToCart, deleteCategory, setCountMinus, setCountPlus, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
