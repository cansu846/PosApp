import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        total: 0,
        tax: 8,
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

            state.total += action.payload.price;
        },
        deleteProduct: (state, action)=>{
            state.cartItems = state.cartItems.filter((item)=>item._id!==action.payload._id);
            
            state.total -= action.payload.price * action.payload.quantity;
        },
        decrease: (state, action)=>{
            const findCartItem = state.cartItems.find((item)=>item._id===action.payload._id);
            findCartItem.quantity -= 1;

            if(findCartItem){
                if(findCartItem.quantity===0){
                    state.cartItems = state.cartItems.filter((item)=>item._id!==findCartItem._id)
                }
                state.total -= findCartItem.price
            }
        },
        increase: (state, action)=>{
            const findCartItem = state.cartItems.find((item)=>item._id===action.payload._id);
            findCartItem.quantity += 1;

            if(findCartItem){
                state.total += findCartItem.price
            }
        },
        reset: (state, action)=>{
            state.cartItems=[];
            state.total=0;
        },
    },

});
export const { addProduct, deleteProduct, decrease, increase, reset} = cartSlice.actions;
export default cartSlice.reducer;