import { Button, Card } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux';

function CartSummary({ showModal }) {

  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <Card title="" style={{ width: 300 }}>
        <div className='flex flex-row justify-between'>
          <p className='font-bold'>Subtotal</p>
          <span>{cart.total > 0 ? cart.total.toFixed(2) : 0}₺</span>
        </div>

        <div className='flex flex-row justify-between py-2'>
          <b>KDV %{cart.tax}</b>
          <span className='text-red-700'>
            {(cart.total * cart.tax) / 100 > 0
              ? `+${((cart.total * cart.tax) / 100).toFixed(2)}`
              : 0}
            ₺
          </span>
        </div>

        <div className='flex flex-row justify-between'>
          <p className='font-bold'>Total</p>
          <span className=''>
            {cart.total + (cart.total * cart.tax) / 100 > 0
              ? (cart.total + (cart.total * cart.tax) / 100).toFixed(2)
              : 0}
            ₺
          </span>
        </div>
        <Button type='primary'
          size='middle'
          className='w-full mt-4'
          onClick={showModal}
          disabled={cart.cartItems.length === 0}
        >
          Create Order
        </Button>
      </Card>
    </div>
  )
}

export default CartSummary
