import { Button, Form, Input, message, Modal, Table } from 'antd'
import React, { useState } from 'react'

function Edit({ isEditCategoryModalOpen,
    handleIsEditCategoryModalOpen,
    setCategories,
    categories }) {

    const [editingRow, setEditingRow] = useState({});
    // console.log("Editingrow: ",editingRow)
    // console.log("EditingrowId: ",editingRow._id)

    //this is use clean field after added
    const [form] = Form.useForm();

    //this is use for post operation
    const onFinish = (values) => {
        console.log("onfinish:", values)
        try {
            fetch("http://localhost:5000/api/category/update", {
                method: "PUT",
                //When sending data to a web server, the data has to be a string.
                //Convert a JavaScript object into a string with 
                //spread özelliği ile sonradan eklenen key varsa yenid deger 
                //üzerine yazılır yoksa yeni key: value olarak eklenir.
                body: JSON.stringify({...values, categoryId: editingRow._id}),
                headers: { "Content-type": "application/json; charset=UTF-8" },
            });
            message.success("Category updated succesfully.");
            form.resetFields();
            setCategories(
                categories.map((item) => {
                  if (item._id === editingRow._id) {
                    // Spread syntax, sonraki özelliklerin aynı isimde olan özelliklerin üzerine yazılmasını sağlar.
                    return { ...item, title: values.title };
                  }
                  return item;
                })
              );
        } catch (error) {
            console.log(error);
        }
    }

//Delete Category
    const deleteCategory = (id) => {
        if (window.confirm("Emin misiniz?")) {
          try {
            fetch("http://localhost:5000/api/category/delete", {
              method: "DELETE",
              body: JSON.stringify({ categoryId: id }),
              headers: { "Content-type": "application/json; charset=UTF-8" },
            });
            message.success("Kategori başarıyla silindi.");
            setCategories(categories.filter((item) => item._id !== id));
          } catch (error) {
            message.error("Bir şeyler yanlış gitti.");
            console.log(error);
          }
        }
      };


    const columns = [
        {
            title: "Category Title",
            dataIndex: "title",
            //record bulunan satırı döner
            render: (_, record) => {
                //Düzenle butonuna tıklandıgında o satır için input içinde default deger gösterilir
                if (record._id === editingRow._id) {
                    return (
                        <Form.Item className="mb-0" name="title">
                            <Input defaultValue={record.title} />
                        </Form.Item>
                    );
                } else {
                    return <p>{record.title}</p>;
                }
            },
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (text, record) => {
                return (
                    <div>
                        {/* kullanıcıya satıra özel işlemler sunan */}
                        <Button type="link" className="pl-0" onClick={() => { setEditingRow(record) }}>
                            Düzenle
                        </Button>
                        <Button type="link" htmlType="submit" className="text-gray-500">
                            Kaydet
                        </Button>
                        <Button type="link" danger onClick={()=>{deleteCategory(record._id)}}>
                            Sil
                        </Button>
                    </div>
                );
            },
        },
    ];

    return (
        <div>
            <Modal title="Basic Modal" open={isEditCategoryModalOpen} onCancel={handleIsEditCategoryModalOpen} footer={false}>
                <Form layout='vertical' onFinish={onFinish}>
                    <Table rounded dataSource={categories} columns={columns} rowKey={"_id"} />
                </Form>
            </Modal>
        </div>
    )
}

export default Edit
