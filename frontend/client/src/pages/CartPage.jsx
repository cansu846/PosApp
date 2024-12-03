import { Button, Card, Table } from 'antd';
import React from 'react'

function CartPage() {
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
            <Table dataSource={dataSource} columns={columns} className='rounded-md' pagination={false}/>
            </div>

            <div className='cart-total flex justify-end mt-4'>
                <Card title="" style={{ width: 300 }}>
                    <div className='flex flex-row justify-between'>
                    <p className='font-bold'>Subtotal</p>
                    <p>30£</p>
                    </div>

                    <div className='flex flex-row justify-between py-2'>
                    <p className='font-bold'>KDV %8</p>
                    <p className='text-red-700'>+30£</p>
                    </div>

                    <div className='flex flex-row justify-between'>
                    <p className='font-bold'>Total</p>
                    <p className='text-green-700'>60£</p>
                    </div>
                    <Button type='primary' size='large' className='w-full mt-4'>Create Order</Button>
                </Card>
            </div>
        </div>
    )
}

export default CartPage
