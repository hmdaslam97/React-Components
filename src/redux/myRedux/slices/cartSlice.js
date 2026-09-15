import { createSelector, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  //initialState:["abc"],//if you want initial state of this slice
  initialState:[],
  reducers: {
    addItem: (state, action) =>{
      state.push(action.payload);
    },
  }
})

//We can also create selectors from slice
export const getItemsSelector = createSelector(
  (state) => state.cart,
  (state) => state
)

export const {addItem} = cartSlice.actions

export default cartSlice.reducer;