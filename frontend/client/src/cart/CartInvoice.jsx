import React from 'react'
import {Modal } from 'antd';
function CartInvoice({isModalOpen, showModal}) {
    return (
        <div>
            <Modal title="Create Invoice" open={isModalOpen} onOk={showModal} onCancel={showModal}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    )
}

export default CartInvoice
