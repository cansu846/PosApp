
import React from 'react'
import { Button, Form, Input, Modal, message } from 'antd';

function Add({ categories, setCategories, isAddCategoryModalOpen, handleIsAddCategoryModalOpen }) {

    //this is use clean field after added
    const [form] = Form.useForm();

    //this is use for post operation
    const onFinish = (values) => {
        try {
            fetch("http://localhost:5000/api/category/add", {
                method: "POST",
                //When sending data to a web server, the data has to be a string.
                //Convert a JavaScript object into a string with 
                body: JSON.stringify(values),
                headers: { "Content-type": "application/json; charset=UTF-8" },
            });
            message.success("Category added succesfully.");
            form.resetFields();
            setCategories([...categories,
            {
                _id: Math.random(),
                title: values.title
            }
            ]);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Modal title="Basic Modal" open={isAddCategoryModalOpen} onCancel={handleIsAddCategoryModalOpen} footer={false}>

                <Form layout='vertical' onFinish={onFinish} form={form}>
                    <Form.Item
                        label="Category Name:"
                        //this must be the same in Category tabel at database
                        name="title"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your category name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item className="flex justify-end mb-0">
                        <Button type="primary" htmlType='submit' >
                            Add
                        </Button>
                    </Form.Item>

                </Form>
            </Modal>
        </div>
    )
}

export default Add
