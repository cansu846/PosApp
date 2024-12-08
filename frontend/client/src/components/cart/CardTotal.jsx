import { Button } from 'antd'
import React from 'react'
import { ClearOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, increase, decrease, reset } from '../../redux/cartSlice';
import ProductQuantity from './ProductQuantity';
import { useNavigate } from 'react-router-dom';

function CardTotal() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  return (
    // max-h:
    // Bu, maksimum yükseklik (maximum height) anlamına gelir.
    // 100vh (görünüm yüksekliği - viewport height): Tarayıcının görünür alanının tamamının yüksekliğidir.
    // Elementin maksimum yüksekliği, tarayıcı penceresinin toplam yüksekliğinden 90 piksel (navbar yüksekliği) daha küçük olacak şekilde ayarlanır.
    <div className='cart h-full max-h-[calc(100vh_-_100px)] flex flex-col'>

      <div className='header-info'>
        <h2 className='bg-blue-600 text-center p-4 text-white font-bold tracking-wide'>
          Products in basket
        </h2>
      </div>
      {/* overflow-auto: Uzun içeriklerin kaydırılabilir olmasını sağlar.
        flex-1: Bu alan, kalan boşluğu doldurur  */}

      <div className='cart-items overflow-y-auto'>
        <ul className='cart-list pr-2'>
          {
            cart.cartItems.map((item) => (
              <li className='cart-item py-2 flex justify-between items-center' >

                <div className='content-item flex justify-between'
                  onClick={() => {
                    if (window.confirm("Do you want to delete products ?")) {
                      dispatch(deleteProduct(item))
                    }
                  }}>
                  <img src={item.img} alt="not found"
                    className='h-15 w-16 object-cover' />
                  <div className='flex flex-col mr-auto ml-2'>
                    <b>{item.title}</b>
                    <span>{item.price}₺ x {item.quantity}</span>
                  </div>
                </div>

                <div className='button-item'>
                  <ProductQuantity item={item}/>
                </div>

              </li>
            ))
          }
        </ul>
      </div>


      {/* mt-auto: Bu sınıf, ilgili elemanı 
        diğer elemanların itmesiyle otomatik olarak en alta taşır */}
      <div className='cart-totals mt-auto'>
        {/* border-b	border-bottom-width: 1px; 
      border-t	border-top-width: 1px;*/}
        <div className='bordet-t border-b'>
          <div className='flex justify-between p-1'>
            <b>Subtotal</b>
            <span>{cart.total > 0 ? cart.total.toFixed(2) : 0}₺</span>
          </div>

          <div className='flex justify-between p-1'>
            <b>KDV %{cart.tax}</b>
            <span className='text-red-700'>
              {(cart.total * cart.tax) / 100 > 0
                ? `+${((cart.total * cart.tax) / 100).toFixed(2)}`
                : 0}
              ₺
            </span>
          </div>

        </div>

        <div className='flex justify-between p-1 border-b'>
          <b className='text-green-700'>Total</b>
          <span className=''>
            {cart.total + (cart.total * cart.tax) / 100 > 0
              ? (cart.total + (cart.total * cart.tax) / 100).toFixed(2)
              : 0}
            ₺
          </span>
        </div>

        <div className=''>
          <Button type='primary'
            className='w-full mt-3'
            size='large'
            disabled={cart.cartItems.length === 0}
            onClick={()=> navigate("/cart")}
          >
            Create Order
          </Button>
          <Button type='primary'
            danger
            className='w-full mt-3'
            size='large'
            disabled={cart.cartItems.length === 0}
            onClick={() => {
              if (window.confirm("Do you want to delete all products ?"))
                dispatch(reset());
            }
            }>
            <ClearOutlined />Clear
          </Button>
        </div>

      </div>





    </div >


  )
}

export default CardTotal
