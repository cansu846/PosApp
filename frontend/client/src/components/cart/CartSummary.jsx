import { Button, Card } from 'antd'
import React from 'react'

function CartSummary({showModal}) {
  return (
    <div>
       <Card title="" style={{ width: 300 }}>
                    <div className='flex flex-row justify-between'>
                        <p className='font-bold'>Subtotal</p>
                        <p>30£</p>
                    </div>

                    <div className='flex flex-row justify-between py-2'>
                        <p className='font-bold'>KDV %8</p>
                        <p className='text-red-700'>+30£</p>
                    </div>

                    <div className='flex flex-row justify-between'>
                        <p className='font-bold'>Total</p>
                        <p className='text-green-700'>60£</p>
                    </div>
                    <Button type='primary' size='middle'
                        className='w-full mt-4' onClick={showModal} >Create Order </Button>
                </Card>
    </div>
  )
}

export default CartSummary
