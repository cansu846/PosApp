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
            const findCartItem = state.cartItems.find((item)=>item._id===action.payload._id)
            
            if(findCartItem){
                findCartItem.quantity = findCartItem.quantity + 1;
            }
            else{
                state.cartItems.push(action.payload)
            }
        },
        deleteProduct: (state, action)=>{
            state.cartItems = state.cartItems.filter((item)=>item._id!==action.payload._id);
        }
    },

});
export const { addProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;