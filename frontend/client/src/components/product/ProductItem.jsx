import React from 'react'
import { addProduct } from "../../redux/cartSlice"
import { useDispatch, useSelector } from "react-redux"

function ProductItem({ product }) {

    //action ları getirmeye yarar
    const dispatch = useDispatch();
    //cart , storeda tanımalana sliceın adıdır. Slice ta tanımlanan isimle bir ilgisi yok
    const cart = useSelector((state) => state.cart);


    const handleClick = () => {
        dispatch(addProduct({...product, quantity:1}));
    }
    
    console.log("cartıtems: ", cart.cartItems);
    return (
        <div className='product-item border hover:shadow-lg transition-all
                cursor-point select-none' onClick={handleClick}>
            <div className='product-img'>
                <img
                    src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
                    alt=""
                    className='h-28 object-cover w-full border-b' />
            </div>
            <div className='product-info flex flex-col items-center p-1'>
                <span className='font-bold'>{product.title}</span>
                <span>{product.price}£</span>
            </div>
        </div>
    )
}

export default ProductItem
