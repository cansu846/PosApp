import React, { useState } from 'react'
import { EditOutlined, PlusOutlined } from '@ant-design/icons'
import Add from './Add';

function Product({ products, setProducts, categories }) {
    const [isAddProductModalOpen, setIsAddProductModalOpen ] = useState(false);

    const handleIsAddProductModalOpen = ()=>{
        setIsAddProductModalOpen(!isAddProductModalOpen);
    }
    return (
        <div>
            <div className="products-wrap grid grid-cols-card gap-2">
                {
                    products.map((product) => (
                        <div className='product-item border hover:shadow-lg transition-all
                cursor-point select-none'>
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
                    ))
                }
                
                <div
                    className="product-item border hover:shadow-lg cursor-pointer transition-all select-none bg-purple-800 flex justify-center items-center 
                    hover:opacity-90" onClick={handleIsAddProductModalOpen} 
                >
                    <PlusOutlined className="text-white md:text-2xl" />
                </div>
                <div className="product-item border hover:shadow-lg cursor-pointer transition-all select-none bg-orange-800 flex justify-center items-center hover:opacity-90">
                    <EditOutlined className="text-white md:text-2xl" />
                </div>

                <Add isAddProductModalOpen={isAddProductModalOpen} 
                handleIsAddProductModalOpen={handleIsAddProductModalOpen} 
                categories={categories}/>
            </div>
        </div>
    )
}

export default Product
