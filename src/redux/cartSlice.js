import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalCartPurchaseAmount: 0,
    totalProductsItemsAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;

      /// update the cart state data [# non items array]
      state.totalProductsItemsAmount += 1;
      const productPrice = newItem.price;
      state.totalPrice += productPrice;

      const existedItem = state.items.find((item) => item.id === newItem.id);
      if (existedItem) existedItem.amount += 1;
      else {
        state.totalCartPurchaseAmount += 1;
        newItem.amount = 1;
        state.items.push(newItem);
      }
    },
    removeItem: (state, action) => {
      const newItem = action.payload;

      // update the cart state data [# non items array]
      state.totalProductsItemsAmount -= 1;
      const productPrice = newItem.price;
      state.totalPrice -= productPrice;

      const existedItem = state.items.find((item) => item.id === newItem.id);
      const existedItemAmount = existedItem.amount;

      if (existedItemAmount > 1) {
        existedItem.amount -= 1;
      } else {
        state.totalCartPurchaseAmount -= 1;
        state.items = state.items.filter((item) => item.id !== existedItem.id);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalCartPurchaseAmount = 0;
      state.totalProductsItemsAmount = 0;
    },
  },
});

export default cartSlice.reducer;

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export const selectAllItems = (state) => state.cart.items;

export const selectTotalCartPurchaseAmount = (state) =>
  state.cart.totalCartPurchaseAmount;

export const selectTotalProductsItemsAmount = (state) =>
  state.cart.totalProductsItemsAmount;

export const selectTotalPrice= (state) =>
  state.cart.totalPrice;
