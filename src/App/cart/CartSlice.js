import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartState: false,
  cartTotalQunatity: 0,
  cartTotalAmount: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setOpenCart: (action, state) => {
      
    },
    setCloseCart: (action, state) => {
      
    },
  },
});

export const { setOpenCart, setCloseCart } = CartSlice.actions;

export default CartSlice.reducer;
