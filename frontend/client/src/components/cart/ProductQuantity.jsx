import React from 'react'
import { Button } from 'antd';
import {PlusOutlined, MinusOutlined } from '@ant-design/icons'

import { useDispatch } from 'react-redux'
import { decrease, increase } from '../../redux/cartSlice';

function ProductQuantity({item}) {

    const dispatch = useDispatch();

    return (
        <div className='flex justify-start'>
            <Button type='primary'
             className='rounded-full'
              size='small' 
              onClick={() => dispatch(increase(item))}>
                <PlusOutlined style={{ fontSize: '8px' }} />
            </Button>
            <span className='px-1'>{item.quantity}</span>
            <Button type='primary'
             className='rounded-full'
              size='small' 
              onClick={() => dispatch(decrease(item))}>

                <MinusOutlined style={{ fontSize: '8px' }} />
            </Button>
        </div>
    )
}

export default ProductQuantity
