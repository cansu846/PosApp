import { Table } from 'antd';
import React, { useState } from 'react'
import CreateInvoice from '../components/cart/CreateInvoice';
import CartSummary from '../components/cart/CartSummary';

function CartPage() {
    const [isModalOpen, setIsModelOpen] = useState(false);

    const showModal = () => {
        setIsModelOpen(!isModalOpen);
    }

    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ]

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ]

    return (
        <div className='mx-4'>
            <div className=''>
                <Table dataSource={dataSource} columns={columns} className='rounded-md' pagination={false} />
            </div>

            <div className='cart-total flex justify-end mt-4'>
               
                <CartSummary showModal={showModal} />
                <CreateInvoice isModalOpen={isModalOpen} showModal={showModal}/>
                
            </div>
        </div>
    )
}

export default CartPage
