import React, { useEffect, useState } from 'react'
import { Pie } from '@ant-design/plots';

function DonatChart({data}) {

  const config = {
    data: data,
    angleField: "subtotal",
    colorField: "customerName",
    radius:1,
    innerRadius: 0.6,
    label: {
      text: "subtotal",
      style: {
        fontWeight: 'bold',
      },
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5,
      },
    },
    annotations: [
      {
        type: 'text',
        style: {
          text: "Total\nAmount",
          x: '50%',
          y: '50%',
          textAlign: 'center',
          fontSize: 40,
          fontStyle: 'bold',
        },
      },
    ],
  };
  return <Pie {...config} />;
}

export default DonatChart
