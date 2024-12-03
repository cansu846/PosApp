import React from 'react'
import { Button, Card, Form, Input, Modal, Select } from 'antd';
function CartInvoice({ isModalOpen, showModal }) {

    const onFinish = (values) => {
        console.log(values);
    }

    return (
        <div>
            <Modal title="Create Invoice" open={isModalOpen} onOk={showModal} onCancel={showModal}>
                <div>
                    <Form
                        layout={'vertical'}
                        onFinish={onFinish}
                    >
                        <Form.Item label="Name" name={"curtomerName"}
                         rules={[
                            {
                              required: true,
                              message: "Username is required",
                            },
                          ]}
                          >
                            <Input placeholder="Customer name" />
                        </Form.Item>
                        <Form.Item label="Phone Number" name={"phoneNumber"}
                         rules={[{ required: true }]}
                         >
                            <Input placeholder="Phone" />
                        </Form.Item>
                        <Form.Item label="Payment Method" name={"paymentMode"}
                          rules={[{ required: true }]}
                          >
                            <Select placeholder="Please select payment method">
                                <Select.Option value="bankcard">Bank card</Select.Option>
                                <Select.Option value="creditcard">Credit card</Select.Option>
                            </Select>
                        </Form.Item>

                        <div className='flex justify-end'>
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
                               <div className='flex justify-end mt-4'> 
                               <Button type='primary' size='middle'
                                    className='' onClick={showModal} htmlType="submit" >Create Order </Button>
                               </div>
                            </Card>
                        </div>
                    </Form>
                </div>

            </Modal>
        </div>
    )
}

export default CartInvoice
