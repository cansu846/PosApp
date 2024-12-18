import React, { useState } from 'react'
import { EditOutlined, PlusOutlined } from '@ant-design/icons'
import Add from './Add';
import { useNavigate } from 'react-router-dom';
import ProductItem from "./ProductItem";
import { addProduct } from "../../redux/cartSlice"
import { useDispatch, useSelector } from "react-redux"

function Product({ products, setProducts, categories, filteredProduct, search }) {

    const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
    //URL'leri değiştirme veya farklı rotalara geçiş yapma işlemleri için tercih edilir.
    //Kullanıcı bir butona tıkladığında veya belirli bir işlem tamamlandığında
    //Kullanıcıyı belirli parametrelerle bir sayfaya yönlendirebilir.
    //useNavigate, tarayıcı geçmişini yönetir, yani ileri ve geri yönlendirme yapabilirsiniz
    const navigate = useNavigate();

    const handleIsAddProductModalOpen = () => {
        setIsAddProductModalOpen(!isAddProductModalOpen);
    }

    return (


        <div>
            <div className="products-wrap grid grid-cols-card gap-2">
                {

                    filteredProduct.filter((product) =>
                        product.title?.trim().toLowerCase().includes(search)
                    )
                        .map((product) => (

                            <ProductItem product={product} key={product._id} />

                            //         <div className='product-item border hover:shadow-lg transition-all
                            // cursor-point select-none' onClick={handleClick}>
                            //             <div className='product-img'>
                            //                 <img
                            //                     src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
                            //                     alt=""
                            //                     className='h-28 object-cover w-full border-b' />
                            //             </div>
                            //             <div className='product-info flex flex-col items-center p-1'>
                            //                 <span className='font-bold'>{product.title}</span>
                            //                 <span>{product.price}£</span>
                            //             </div>
                            //         </div>
                        )).reverse()
                }

                <div
                    className="product-item border hover:shadow-lg cursor-pointer transition-all select-none bg-purple-800 flex justify-center items-center 
                    hover:opacity-90 min-h-[180]" onClick={handleIsAddProductModalOpen}
                >
                    <PlusOutlined className="text-white md:text-2xl" />
                </div>
                <div className="product-item border hover:shadow-lg cursor-pointer transition-all select-none
                 bg-orange-800 flex justify-center items-center hover:opacity-90 min-h-[180px]" onClick={() => navigate("/product")}>
                    <EditOutlined className="text-white md:text-2xl" />
                </div>

                {/* modal componenti */}
                <Add isAddProductModalOpen={isAddProductModalOpen}
                    handleIsAddProductModalOpen={handleIsAddProductModalOpen}
                    categories={categories} />
            </div>
        </div>
    )
}

export default Product
