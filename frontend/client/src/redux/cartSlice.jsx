import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        total: 0,
    },
    //Reducers alanı actions olarak geçiyor
    //state initialstate teki herşey
    //action: veriyi tutar.
    reducers: {
        addProduct: (state, action) => {
            state.cartItems.push(action.payload)
        }
    },

});
export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;