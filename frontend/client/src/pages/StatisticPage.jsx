import { Card, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import StatisticCard from "../components/statistic/StatisticCard"
import { Area, Line } from '@ant-design/charts';
import { Pie } from '@ant-design/charts';
import { Donut } from '@ant-design/charts';
import BaseChart from '../components/statistic/BaseChart';
import DonatChart from '../components/statistic/DonatChart';


function StatisticPage() {

    const [data, setData] = useState([]);
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/product/get-all");
            const data = await res.json();
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    };

    const asyncFetch = () => {
        fetch("http://localhost:5000/api/bill/get-all")
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };

    useEffect(() => {
        getProducts();
        asyncFetch();
    }, []);

    const totalAmount = () => {
        //data.reduce metodu, bir dizideki elemanları bir işleve göre biriktirerek tek bir değer oluşturur.
        //Başlangıç Değeri (total için): 0 (Son parametre olarak veriliyor).
        const amount = data.reduce((total, item) => item.totalAmount + total, 0);
        return `${amount.toFixed(2)}₺`;
    };

    return (
        <div className='mx-4'>
            <h1 className='flex justify-center font-bold text-lg pb-4' >Statistic</h1>
            <p>Welcome, <span className='text-green-700 font-bold'>Admin</span></p>
            <div className='statistic-cards flex flex-col md:flex-row 
            my-10 md:gap-10 gap-4 '>

                <StatisticCard
                    title={"Total Customer"}
                    amount={data?.length}
                    img={"images/user.png"}
                />
                <StatisticCard
                    title={"Total Invoice"}
                    amount={totalAmount()}
                    img={"images/money.png"}
                />
                <StatisticCard
                    title={"Total Sale"}
                    amount={data?.length}
                    img={"images/sale.png"}
                />
                <StatisticCard
                    title={"Total Product"}
                    amount={products?.length}
                    img={"images/product.png"}
                />
            </div>

            <div className='flex flex-col md:flex-row md:justify-between items-center p-10'>
                <div> <BaseChart data={data} /></div>
                <div><DonatChart data={data} /></div>
            </div>

        </div>


    )
}
export default StatisticPage
