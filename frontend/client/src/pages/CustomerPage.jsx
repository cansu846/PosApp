import { Table } from 'antd'
import React, { useState } from 'react'

function CustomerPage() {

    const [bills, setBills] = useState([]);

    const getBills = async () => {

        try {

            const response = await fetch("http://localhost:5000/api/bill/get-all");
            const json = await response.json();
            setBills(json);

        } catch (error) {
            console.log(error);
        }

    }

    useState(() => {
        getBills();
    });

    const columns = [
        {
            title: 'Customer Name',
            dataIndex: 'customerName',
            key: 'customerName',
        },
        {
            title: 'Customer Phone',
            dataIndex: 'customerPhoneNumber',
            key: 'customerPhoneNumber',
        },
        {
            title: 'Created Date',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render:(text)=>{
                return text.substring(0,10);
            }
        },
    ]

    return (
        <div className='mx-4'>
            <h1 className='flex justify-center font-bold text-lg pb-4' >Customers</h1>
            <div className=''>
                <Table rounded dataSource={bills} columns={columns} className='rounded-md' pagination={false} scroll={{ x: 1000, y: 600 }} />
            </div>

        </div>


    )
}
export default CustomerPage
