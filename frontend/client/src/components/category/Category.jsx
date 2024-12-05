import React, { useState } from 'react'
import "./style.css"
import {PlusCircleOutlined} from '@ant-design/icons'
import { Button, Form, Input, Modal, message } from 'antd';

function Category() {
  const [isModalOpen, setIsModalOpen] = useState(false);
const [form] = Form.useForm();
  const handleIsModalOpen = ()=>{
    setIsModalOpen(!isModalOpen);
  }

  const onFinish = (values)=>{
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
    } catch (error) {
      console.log(error);
    }
  }

  return (
<>
      <ul className="flex md:flex-col gap-3">
        <li className='category-item'>Food</li>
        <li className='category-item !bg-purple-800 hover:opacity-90' onClick={handleIsModalOpen}>
        <PlusCircleOutlined className='md:text-2xl' />
        </li>

        <Modal title="Basic Modal" open={isModalOpen} onCancel={handleIsModalOpen} footer={false}>

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

      </ul>
      </>
  )
}

export default Category
