import { Button, Form, Input, message } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Carousel } from 'antd';

import AuthCarousel from '../../components/auth/AuthCarousel';


function Register() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        try {
            console.log(values);
            const response = await fetch(process.env.REACT_APP_SERVER_URL + "/api/auth/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
            //console.log(response);
            if(response.status===200){
                message.success("User save successfully.");
                setLoading(false);
                navigate("/login");
            }
        } catch (error) {
            console.log(error);
            
        }


    }

    return (
        <div className="h-screen">
            <div className="flex justify-between h-full">
                <div className="login xl:px-10 px-5 w-full flex flex-col justify-center">
                    <div><h1 className="text-5xl font-semibold text-center mb-2">LOGO</h1></div>
                    <div className="">
                        <Form
                            layout={"vertical"}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                label="User Name"
                                name={"username"}
                                rules={[
                                    {
                                        required: true,
                                        message: "Username can not be empty!",
                                    },
                                ]}
                            >
                                <Input placeholder="" />

                            </Form.Item>
                            <Form.Item label="E-mail"
                                name={"email"}
                                rules={[
                                    {
                                        required: true,
                                        message: "E-mail can not be empty!",
                                    },
                                ]}
                            >
                                <Input placeholder="" />
                            </Form.Item>
                            <Form.Item
                                label="Password"
                                name={"password"}
                                rules={[
                                    {
                                        required: true,
                                        message: "Password can not be empty!",
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item
                                label="Password Again"
                                name={"passwordAgain"}
                                //yukarıda tanımlı name:{"password"} ile uyuşmalı
                                dependencies={["password"]}
                                rules={[
                                    {
                                        required: true,
                                        message: "Password again can not be empty!",
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue("password") === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(
                                                new Error(
                                                    "Passwords must be same!"
                                                )
                                            );
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" loading={loading} size="large" className=" w-full">Sign Up</Button>
                            </Form.Item>
                        </Form>

                        <div className="flex justify-center">
                            Do you have account? &nbsp;
                            <Link to="/login" className="text-blue-600">
                                <span>Login now</span>
                            </Link>
                        </div>

                    </div>
                    <div></div>
                </div>
                {/* display: flex; Flexbox düzenini etkinleştirir. asagıdaki css için flex kullanılmazsa md de görünmüyor*/}
                <div className="xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden bg-[#6c63ff] h-full">
                    <div className="w-full h-full flex items-center">
                        <div className="w-full">
                            <Carousel className="!h-full px-6">
                                <AuthCarousel
                                    img="/images/responsive.svg"
                                    title="Responsive"
                                    desc="Tüm Cihaz Boyutlarıyla Uyumluluk"
                                />
                                <AuthCarousel
                                    img="/images/statistic.svg"
                                    title="İstatistikler"
                                    desc="Geniş Tutulan İstatistikler"
                                />
                                <AuthCarousel
                                    img="/images/customer.svg"
                                    title="Müşteri Memnuniyeti"
                                    desc="Deneyim Sonunda Üründen Memnun Müşteriler"
                                />
                                <AuthCarousel
                                    img="/images/admin.svg"
                                    title="Yönetici Paneli"
                                    desc="Tek Yerden Yönetim"
                                />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;