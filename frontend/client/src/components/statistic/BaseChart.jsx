import React from 'react'
import { Area, Line } from '@ant-design/plots';

function BaseChart({data}) {

    const config = {
        title: {
            visible: true,
            text: 'Basic area map',
        },
        data,
        xField: "customerName",
        yField: "subtotal",
        xAxis: {
            range: [0, 1],
          },
    };

    return (
        <div>
            < Area {...config} />

        </div >
    )
}

export default BaseChart
