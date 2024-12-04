import { Card, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import StatisticCard from "../components/statistic/StatisticCard"
import { Area} from '@ant-design/charts';
import { Pie } from '@ant-design/charts' ;     
import { Donut } from '@ant-design/charts' ;   

function StatisticPage() {

    const [data, setData] = useState([]);
    useEffect(() => {
        asyncFetch();
    }, []);
    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/antfincdn/YdLK%24VvSkW/fireworks-sales.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        title: {
            visible: true,
            text: 'Basic area map',
        },
        data,
        xField: 'Date',
        yField: 'scales',
        xAxis: {
            type: 'dateTime',
            tickCount: 5,
        },
    };



    return (
        <div className='mx-4'>
            <h1 className='flex justify-center font-bold text-lg pb-4' >Statistic</h1>
            <p>Welcome, <span className='text-green-700 font-bold'>Admin</span></p>
            <div className='statistic-cards flex flex-col md:flex-row 
            my-10 md:gap-10 gap-4 '>

                <StatisticCard
                    title={"Total Customer"}
                    amount={"10"}
                    img={"images/user.png"}
                />
                <StatisticCard
                    title={"Total Invoice"}
                    amount={"660.96 ₺"}
                    img={"images/money.png"}
                />
                <StatisticCard
                    title={"Total Sale"}
                    amount={"6"}
                    img={"images/sale.png"}
                />
                <StatisticCard
                    title={"Total Product"}
                    amount={"28"}
                    img={"images/product.png"}
                />
            </div>

            <div>
                <div> < Area {...config} /></div>
            <div></div>
            </div>

        </div>


    )
}
export default StatisticPage
