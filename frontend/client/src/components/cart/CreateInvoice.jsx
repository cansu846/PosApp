import React from 'react'
import { Button, Card, Form, Input, message, Modal, Select } from 'antd';
import CartSummary from './CartSummary';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { reset } from '../../redux/cartSlice';

function CartInvoice({ isModalOpen, showModal }) {

    const cart = useSelector((state) => state.cart);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onFinish = async (values) => {
        console.log("create incoice: ", values);
        try {
            const response = await fetch(process.env.REACT_APP_SERVER_URL + "/api/bill/add",
                {
                    method: "POST",
                    body: JSON.stringify({
                        ...values,
                        subtotal: cart.total,
                        taxt: ((cart.total * cart.tax) / 100).toFixed(2),
                        totalAmount: (cart.total + (cart.total * cart.tax) / 100).toFixed(2),
                        cartItems: cart.cartItems,
                    }),

                    headers: { "Content-type": "application/json; charset=UTF-8" },

                }); //fetch end

            if (response.status === 200) {
                message.success("Invoice created successfully.");
                dispatch(reset());

                //Invoicepage yönlendirir
                navigate("/invoice");
            }
        } catch (error) {
            message.danger("Something went wrong..");
            console.log(error);
        }
    }

    return (
        <div>
            <Modal title="Create Invoice" open={isModalOpen} onOk={showModal} onCancel={showModal} footer={false}>
                <div>
                    <Form
                        layout={'vertical'}
                        onFinish={onFinish}
                    >
                        <Form.Item label="Name" name={"customerName"}
                            rules={[
                                {
                                    required: true,
                                    message: "Username is required",
                                },
                            ]}
                        >
                            <Input placeholder="Customer name" />
                        </Form.Item>
                        <Form.Item label="Phone Number" name={"customerPhoneNumber"}
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
                            {/* submit butonu çalışmadıgı için ayrı olarak tanımlamak zorunda kaldım */}
                            {/* <CartSummary  /> */}

                            <Card title="" style={{ width: 300 }}>
                                <div className='flex flex-row justify-between'>
                                    <p className='font-bold'>Subtotal</p>
                                    <span>{cart.total > 0 ? cart.total.toFixed(2) : 0}₺</span>
                                </div>

                                <div className='flex flex-row justify-between py-2'>
                                    <b>KDV %{cart.tax}</b>
                                    <span className='text-red-700'>
                                        {(cart.total * cart.tax) / 100 > 0
                                            ? `+${((cart.total * cart.tax) / 100).toFixed(2)}`
                                            : 0}
                                        ₺
                                    </span>
                                </div>

                                <div className='flex flex-row justify-between'>
                                    <p className='font-bold'>Total</p>
                                    <span className=''>
                                        {cart.total + (cart.total * cart.tax) / 100 > 0
                                            ? (cart.total + (cart.total * cart.tax) / 100).toFixed(2)
                                            : 0}
                                        ₺
                                    </span>
                                </div>
                                <Button type='primary' size='middle'
                                    className='w-full mt-4 '
                                    disabled={cart.cartItems.length === 0}
                                    htmlType='submit'
                                >
                                    Create Order
                                </Button>
                            </Card>
                        </div>
                    </Form>
                </div>

            </Modal>
        </div>
    )
}

export default CartInvoice
