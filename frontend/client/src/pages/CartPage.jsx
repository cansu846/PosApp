import { Button, Table } from 'antd';
import React, { useState } from 'react'
import CreateInvoice from '../components/cart/CreateInvoice';
import CartSummary from '../components/cart/CartSummary';
import { useDispatch, useSelector } from 'react-redux';
import ProductQuantity from '../components/cart/ProductQuantity';
import { reset } from '../redux/cartSlice';

function CartPage() {
    const [isModalOpen, setIsModelOpen] = useState(false);

    const {cartItems} = useSelector((state)=>state.cart)
    const dispatch = useDispatch();

    const showModal = () => {
        setIsModelOpen(!isModalOpen);
    }


    const columns = [
        {
            title: "Product Image",
            dataIndex: "img",
            width: '2%',
            render: (_, record) => {
                return (
                    <img src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
                        alt="" className="w-full h-20 object-cover" />
                );
            },
        },
        {
            title: "Product Name",
            dataIndex: "title",
            width: "4%",
            // render: (_, record) => {
            //     return <p>{record.title}</p>;
            // },
        },
      
        {
            title: "Product Price",
            dataIndex: "price",
            width: "4%",
        },
        {
            title: "Category",
            dataIndex: "category",
            width: "4%",

        },
        {
            title: "Product Quantity",
            dataIndex: "quantity",
            width: "4%",
            render: (_, record)=>{
                return(
                    <ProductQuantity item={record} />
                );
            }

        },
        {
            title: "Total Amount",
            dataIndex: "total",
            width: "4%",

        },
        {
            title: "Action",
            dataIndex: "action",
            width: "8%",
            render: (_, record) => {
                return (
                    <div>
                        <Button
                            type="link"
                            danger
                           onClick={()=>{
                            if(window.confirm("Do you want to delete products ?")){
                                dispatch(reset(record));
                            }
                           }}
                        >
                            Delete
                        </Button>
                    </div>
                );
            },
        },
    ];

    return (
        <div className='mx-4'>
            <div className=''>
                <Table dataSource={cartItems} columns={columns} className='rounded-md' pagination={false} />
            </div>

            <div className='cart-total flex justify-end mt-4'>
               
                <CartSummary showModal={showModal} />
                <CreateInvoice isModalOpen={isModalOpen} showModal={showModal}/>
                
            </div>
        </div>
    )
}

export default CartPage
