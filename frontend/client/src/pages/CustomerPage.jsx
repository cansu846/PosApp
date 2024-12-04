import { Table } from 'antd'
import React from 'react'

function CustomerPage() {
   
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
            <h1 className='flex justify-center font-bold text-lg pb-4' >Customers</h1>
            <div className=''>
                <Table dataSource={dataSource} columns={columns} className='rounded-md' pagination={false} />
            </div>

        </div>
           
   
    )
}
export default CustomerPage
