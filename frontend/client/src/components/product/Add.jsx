
import React from 'react'
import { Button, Form, Input, Modal, Select, message } from 'antd';

function Add({ products, setProducts, categories, isAddProductModalOpen, handleIsAddProductModalOpen }) {

    //this is use clean field after added
    const [form] = Form.useForm();

    //this is use for post operation
    const onFinish = (values) => {
        try {
            fetch("http://localhost:5000/api/product/add", {
                method: "POST",
                //When sending data to a web server, the data has to be a string.
                //Convert a JavaScript object into a string with 
                body: JSON.stringify(values),
                headers: { "Content-type": "application/json; charset=UTF-8" },
            });
            message.success("Product added succesfully.");
            form.resetFields();
            setProducts([
                //spread ile objeler ortaya çıkar
                ...products,
                {
                    ...values,
                    _id: Math.random(),
                    //price degerini numbera cevirmedigimde db de cevirili olarak kayıt edildi. ama yinede burada cevirdim
                    price : Number(values.price)
                }
                //yukarıdaki ile aynı işlevi görür.
            // {
            //     _id: Math.random(),
            //     title: values.title,
            //     price: values.price,
            //     category: values.category,
            //     // img: values.img
            // }
            ]);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Modal title="Basic Modal" open={isAddProductModalOpen} onCancel={handleIsAddProductModalOpen} footer={false}>

                <Form layout='vertical' onFinish={onFinish} form={form}>
                    <Form.Item
                        label="Product Name:"
                        //this must be the same in Category tabel at database
                        name="title"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your product name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Product Price:"
                        //this must be the same in Category tabel at database
                        name="price"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your product price!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    {/*showSearch: Kullanıcının seçim kutusunda arama yapmasına izin verir. */}
                    {/* options:	Açılır listede gösterilecek seçeneklerin listesini tanımlar. (Bu bir dizi nesnedir.) */}
                    {/* optionFilterProp="label": Arama yapılırken label özelliğine göre filtreleme yapılmasını sağlar. */}
                    {/* filterSort: Seçenekleri sıralama işlevi sağlar. */}
                    <Form.Item
                        label="Product Category:"
                        //this must be the same in Category tabel at database
                        name="category"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your category name!',
                            },
                        ]}
                    >

                        <Select
                            showSearch
                            optionFilterProp="children"
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={categories}
                        />
                

                    </Form.Item>

                    <Form.Item
                        label="Product Imaage URL:"
                        //this must be the same in Category tabel at database
                        name="img"
                        rules={[
                            {
                                required: false,
                                message: 'Please input your img url!',
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
