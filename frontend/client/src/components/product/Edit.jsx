import { Button, Form, Input, message, Modal, Select, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import Product from './Product';

function Edit() {

    const [editingItem, setEditingItem] = useState({});
    const [products, setProducts] = useState([]);
    const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    // console.log("Editingrow: ",editingRow)
    // console.log("EditingrowId: ",editingRow._id)

    //this is use clean field after added
    const [form] = Form.useForm();

    const getProducts = async () => {
        const url = "http://localhost:5000/api/product/get-all";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            console.log("not json: ", response)
            const json = await response.json();
            console.log(json);
            setProducts(json);
        } catch (error) {
            console.error(error.message);
        }
    }

    const getCategories = async () => {
        const url = "http://localhost:5000/api/category/get-all";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            console.log("categories: ", response)
            const json = await response.json();
           
            setCategories(
                json.map((category) => {
                    return { ...category, value: category.title }
                })
            );
            console.log("categories with values", categories);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    //this is use for post operation
    const onFinish = (values) => {
        console.log("onfinish:", values)
        console.log("EditingItem :", editingItem, )
        try {
            fetch("http://localhost:5000/api/product/update", {
                method: "PUT",
                //When sending data to a web server, the data has to be a string.
                //Convert a JavaScript object into a string with 
                //spread özelliği ile sonradan eklenen key varsa yenid deger 
                //üzerine yazılır yoksa yeni key: value olarak eklenir.
                //value obje oldugu için ...values sonucu key:value çiftleri çıkar
                //record degeri veritabanından geldigi için id degerine sahip
                body: JSON.stringify({ ...values, productId: editingItem._id}),
                headers: { "Content-type": "application/json; charset=UTF-8" },
            });
            message.success("Porduct updated succesfully.");
            setProducts(
                products.map((product)=>{
                    if(product._id===editingItem._id){
                        return {...product, ...values}
                    }else{
                        return product
                    }
                })
            );
        } catch (error) {
            console.log(error);
        }
    }

    //Delete Category
    const deleteProduct = (id) => {
        if (window.confirm("Emin misiniz?")) {
            try {
                fetch("http://localhost:5000/api/product/delete", {
                    method: "DELETE",
                    body: JSON.stringify({ productId: id }),
                    headers: { "Content-type": "application/json; charset=UTF-8" },
                });
                message.success("Product başarıyla silindi.");
                setProducts(products.filter((item) => item._id !== id));
            } catch (error) {
                message.error("Something went wrong");
                console.log(error);
            }
        }
    };


    const columns = [
        {
            title: "Product Name",
            dataIndex: "title",
            width: "4%",
            // render: (_, record) => {
            //     return <p>{record.title}</p>;
            // },
        },
        {
            title: "Product Image",
            dataIndex: "img",
            width: '2%',
            render: (_, record) => {
                return (
                    <img src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
                        alt="" className="w-full h-20 object-cover" />
                );
            },
        },
        {
            title: "Product Price",
            dataIndex: "price",
            width: "4%",
        },
        {
            title: "Category",
            dataIndex: "category",
            width: "4%",

        },
        {
            title: "Action",
            dataIndex: "action",
            width: "8%",
            render: (_, record) => {
                return (
                    <div>
                        <Button type="link" className="pl-0" 
                        //record degeri veritabanından geldigi için id degerine sahip
                        onClick={() => { setIsEditProductModalOpen(true); setEditingItem(record) }}>
                            Edit
                        </Button>

                        <Button
                            type="link"
                            danger
                            onClick={() => deleteProduct(record._id)}
                        >
                            Delete
                        </Button>
                    </div>
                );
            },
        },
    ];
    return (
        <div>

            {/* Eğer tablo içerikleri 1000 piksel genişliği aşarsa, yatayda bir kaydırma çubuğu eklenir. */}
            {/* Tablonun dikeyde 600 piksel yüksekliğe sahip olduğunu belirtir. Eğer tablo içerikleri 600 piksel yüksekliği aşarsa, dikeyde bir kaydırma çubuğu eklenir. */}
            <Table rounded dataSource={products} columns={columns} scroll={{ x: 1000, y: 600 }} />

            <Modal title="Basic Modal" open={isEditProductModalOpen} onCancel={() => { setIsEditProductModalOpen(false) }} footer={false}>
                <Form layout='vertical' onFinish={onFinish} form={form} initialValues={editingItem} form={form}>
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
                            Save
                        </Button>
                    </Form.Item>

                </Form>
            </Modal>
        </div>
    )
}

export default Edit
