import React, { useState } from 'react'
import PrintInvoice from '../components/invoice/PrintInvoice';
import { Button, Card, Table } from 'antd';

function InvoicePage() {

    const [isModalOpen, setIsModelOpen] = useState(false);
    const [bills, setBills] = useState([]);

    const showModal = () => {
        setIsModelOpen(!isModalOpen);
    }

    const getBills = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/bill/get-all")
            const json = await response.json()
            setBills(json);
            //console.log("get bills:"+ json)
        } catch (error) {
            console.log(error)
        }
    }

    useState(()=>{
        getBills();
    }, []);

    console.log("get bills:"+ bills)

    const columns = [
        {
            title: "Customer Name",
            dataIndex: "customerName",
            key: "customerName",
           
        },
        {
            title: "Phone Number",
            dataIndex: "customerPhoneNumber",
            key: "customerPhoneNumber",
        },
        {
            title: "CreateAt ",
            dataIndex: "createdAt",
            key: "createdAt",
            render: (text)=>{
              return <span>{text.substring(0, 10)}</span>
            }
        },
        {
            title: "Payment Mode",
            dataIndex: "paymentMode",
            key: "paymentMode",
        },
        {
            title: "Total Amount",
            dataIndex: "totalAmount",
            key: "totalAmount",
            // render: (text)=>{
            //   return <span>{text}₺</span>
            // }
        },
        {
            title: "Actions",
            dataIndex: "action",
            key: "action",
            render: (text)=>{
              return <Button type="link" className="pl-0" onClick={showModal}>Print</Button>
            }
          },
    ]

    return (
        <div className='mx-4'>
            <h1 className='flex justify-center font-bold text-lg pb-4' >Invoce</h1>
            <div className=''>
                <Table dataSource={bills} columns={columns} className='rounded-md' pagination={false} />
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
