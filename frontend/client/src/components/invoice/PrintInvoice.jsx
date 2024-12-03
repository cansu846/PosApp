import React from 'react'
import { Button, Card, Form, Input, Modal, Select } from 'antd';

function PrintInvoice({ isModalOpen, showModal }) {


    return (
        <>
            <Modal title="Create Invoice"
             open={isModalOpen} onOk={showModal} onCancel={showModal}>

             <p> Invoice
             </p>
            </Modal>
        </>
    )
}

export default PrintInvoice
