import { Form, Modal, Table } from 'antd'
import React from 'react'

function Edit({ isEditCategoryModalOpen, handleIsEditCategoryModalOpen }) {
    return (
        <div>
            <Modal title="Basic Modal" open={isEditCategoryModalOpen} onCancel={handleIsEditCategoryModalOpen} footer={false}>
                <Form layout='vertical'>
                    <Table rounded />
                </Form>
            </Modal>
        </div>
    )
}

export default Edit
