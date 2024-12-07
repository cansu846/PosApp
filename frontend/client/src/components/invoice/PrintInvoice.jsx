import React, { useEffect } from 'react'
import { Button, Card, Form, Input, Modal, Select } from 'antd';
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

function PrintInvoice({ isModalOpen, showModal, customer }) {

    //console.log("customer:", customer)

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    useEffect(() => {
        if (componentRef.current) {
            console.log('Component is ready for printing.');
        } else {
            console.log('Component is not ready for printing.');

        }
    }, []);
    return (

        <Modal title="Print Invoice"
            open={isModalOpen} onOk={showModal} onCancel={showModal} footer={false}>
            {/* ref={componentRef}: yazdırılcak içerigi almak iiçin kullanılır */}
            <section className="py-20 bg-black" ref={componentRef}>
                {customer?.cartItems?.map((item) => (
                    <div className="max-w-5xl mx-auto bg-white px-6" >
                        <article className="overflow-hidden">
                            <div className="logo my-6">
                                <h2 className="text-4xl font-bold text-slate-700">LOGO</h2>
                            </div>
                            <div className="bill-details">
                                <div className="flex flex-row">
                                    <div className="text-md text-slate-500 p-3">
                                        <p className="font-bold text-slate-700">Invoice Detial:</p>
                                        <p>{customer.customerName}</p>
                                        {/* <p> Fake Street 123</p>
                                        <p> San Javier </p>
                                        <p> CA 1234</p> */}
                                    </div>
                                    <div className="text-md text-slate-500 p-3">
                                        <p className="font-bold text-slate-700">Invoice:</p>
                                        The Boring Company
                                        <p> Tesla Street 007</p>
                                        <p> Frisco </p>
                                        <p> CA 0000</p>
                                    </div>
                                    <div className="text-md text-slate-500 p-3">
                                        <div>
                                            <p className="font-bold text-slate-700">Invoice Number:</p>
                                            <p>000{Math.floor(Math.random() * 100)}</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-700 mt-2">
                                                Veriliş Tarihi:
                                            </p>
                                            {/* <p>{customer?.createdAt.substring(0, 10)}</p> */}
                                        </div>
                                    </div>
                                    <div className="text-md text-slate-500 sm:block hidden p-3">
                                        <div>
                                            <p className="font-bold text-slate-700">Şartlar:</p>
                                            <p>10 gün</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-700 mt-2">Vade:</p>
                                            <p>2023-11-21</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bill-table-area mt-8">
                                <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                                    <thead>
                                        <tr className="border-b border-slate-200">
                                            <th
                                                scope="col"
                                                className="py-3.5 text-left text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                                            >
                                                Image
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 text-left text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                                            >
                                                {" "}
                                                Title
                                            </th>

                                            <th
                                                scope="col"
                                                className="py-3.5 text-center text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                                            >
                                                Price
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 text-end text-sm font-normal text-slate-700 md:pl-0"
                                            >
                                                Quantity
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 pl-4 text-end text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                                            >
                                                Total
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* customer ve customerItem ın null gelme durumlarında hata vermemesi adına ? koyuldu */}

                                        <tr className="border-b border-slate-200">
                                            <td className="py-4 sm:table-cell hidden">
                                                <img
                                                    src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
                                                    // src={item.img}
                                                    alt=""
                                                    className="w-12 h-12 object-cover"
                                                />
                                            </td>
                                            <td className="py-4 sm:table-cell hidden">
                                                <div className="flex flex-col">
                                                    <span className="font-medium">{item.title}</span>
                                                    <span className="sm:hidden inline-block text-xs">
                                                        Unit Price {item.price}₺
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="py-4 sm:hidden" colSpan={4}>
                                                <div className="flex flex-col">
                                                    <span className="font-medium">{item.title}</span>
                                                    <span className="sm:hidden inline-block text-xs">
                                                        Unit Price {item.price}₺
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="py-4 text-center sm:table-cell hidden">
                                                <span>{item.price.toFixed(2)}₺</span>
                                            </td>
                                            <td className="py-4 sm:text-center text-right sm:table-cell hidden">
                                                <span>{item.quantity}</span>
                                            </td>
                                            <td className="py-4 text-end">
                                                <span>{(item.price * item.quantity).toFixed(2)}₺</span>
                                            </td>
                                        </tr>
                                    </tbody>

                                    <tfoot>
                                        <tr>
                                            <th
                                                className="text-right pt-4 sm:table-cell hidden"
                                                colSpan="4"
                                                scope="row"
                                            >
                                                <span className="font-normal text-slate-700">
                                                    Subtotal
                                                </span>
                                            </th>
                                            <th
                                                className="text-left pt-4 sm:hidden"
                                                scope="row"
                                                colSpan="4"
                                            >
                                                <p className="font-normal text-slate-700">Subtotal</p>
                                            </th>
                                            <th className="text-right pt-4" scope="row">
                                                <span className="font-normal text-slate-700">{customer?.subtotal}₺</span>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th
                                                className="text-right pt-4 sm:table-cell hidden"
                                                colSpan="4"
                                                scope="row"
                                            >
                                                <span className="font-normal text-slate-700">KDV</span>
                                            </th>
                                            <th
                                                className="text-left pt-4 sm:hidden"
                                                scope="row"
                                                colSpan="4"
                                            >
                                                <p className="font-normal text-slate-700">KDV</p>
                                            </th>
                                            <th className="text-right pt-4" scope="row">
                                                <span className="font-normal text-red-600">+{customer?.tax}₺</span>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th
                                                className="text-right pt-4 sm:table-cell hidden"
                                                colSpan="4"
                                                scope="row"
                                            >
                                                <span className="font-normal text-slate-700">Total Amount</span>
                                            </th>
                                            <th
                                                className="text-left pt-4 sm:hidden"
                                                scope="row"
                                                colSpan="4"
                                            >
                                                <p className="font-normal text-slate-700">Genel Toplam</p>
                                            </th>
                                            <th className="text-right pt-4" scope="row">
                                                <span className="font-normal text-slate-700">{customer?.totalAmount}₺</span>
                                            </th>
                                        </tr>
                                    </tfoot>
                                </table>
                                <div className="py-9">
                                    <div className="border-t pt-9 border-slate-200">
                                        <p className="text-sm font-light text-slate-700">
                                            The payment terms are 14 days. Please note that under the Late Payment of Unpackaged Debts Act 0000, freelancers have the right to charge a late payment fee of 00.00 if debts are not paid after this period, and a revised invoice will be issued at this point.
                                            If the revised invoice is not paid within 14 days, additional interest will be applied to the overdue account at a rate of 8% statutory interest plus 0.5% Bank of England base rate, totaling 8.5%.
                                            Parties cannot contract outside the provisions of the Act.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>

                ))
                }
            </section>
            <div className="flex justify-end mt-4" >
                {/* Print sayfası açılmadı */}
                <Button type="primary" size="large" onClick={handlePrint}>Print</Button>
            </div>
        </Modal>

    )
}

export default PrintInvoice
