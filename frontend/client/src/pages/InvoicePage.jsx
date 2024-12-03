import React, { useState } from 'react'
import PrintInvoice from '../components/invoice/PrintInvoice';
import { Button, Card, Table } from 'antd';

function InvoicePage() {
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
            <h1 className='flex justify-center font-bold text-lg pb-4' >Invoce</h1>
            <div className=''>
                <Table dataSource={dataSource} columns={columns} className='rounded-md' pagination={false} />
            </div>

            <div className='cart-total flex justify-end mt-4'>

                <Card className="w-72">
                    <Button
                        className="mt-4 w-full"
                        type="primary"
                        size="large"
                        onClick={showModal}
                    >
                        Print
                    </Button>
                </Card>
            </div>
            <PrintInvoice isModalOpen={isModalOpen} showModal={showModal} />

        </div>
           
   
    )
}

export default InvoicePage
