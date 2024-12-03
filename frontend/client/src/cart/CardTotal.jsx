import { Button } from 'antd'
import React from 'react'
import { ClearOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons'

function CardTotal() {
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
      <div className='cart-items overflow-auto'>
        <ul className='cart-list'>

          <li className='cart-item py-2 flex justify-between items-center'>

            <div className='content-item flex justify-between '>
              <img src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg" alt="not found"
                className='h-15 w-16 object-cover' />
              <div className='flex flex-col mr-auto ml-2'>
                <b>Elma</b>
                <span>9.99£</span>
              </div>
            </div>

            <div className='button-item'>
              <Button type='primary' className='rounded-full' size='small'>
                <PlusOutlined style={{ fontSize: '10px'}}/>
              </Button>
              <span className='px-1'>1</span>
              <Button type='primary' className='rounded-full' size='small'>
                <MinusOutlined style={{ fontSize: '10px'}}/>
              </Button>
            </div>

          </li>

        </ul>
      </div>

      <div className='cart-items overflow-auto'>
        <ul className='cart-list'>

          <li className='cart-item py-2 flex justify-between items-center'>

            <div className='content-item flex justify-between '>
              <img src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg" alt="not found"
                className='h-15 w-16 object-cover' />
              <div className='flex flex-col mr-auto ml-2'>
                <b>Elma</b>
                <span>9.99£</span>
              </div>
            </div>

            <div className='button-item'>
              <Button type='primary' className='rounded-full' size='small'>
                <PlusOutlined style={{ fontSize: '10px'}}/>
              </Button>
              <span className='px-1'>1</span>
              <Button type='primary' className='rounded-full' size='small'>
                <MinusOutlined style={{ fontSize: '10px'}}/>
              </Button>
            </div>
            
          </li>

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
            <span>99£</span>
          </div>

          <div className='flex justify-between p-1'>
            <b>KDV %8</b>
            <span className='text-red-700'>+7.90£</span>
          </div>

        </div>

        <div className='flex justify-between p-1 border-b'>
          <b className='text-green-700'>Total</b>
          <span className=''>+7.90£</span>
        </div>

        <div className=''>
          <Button type='primary' className='w-full mt-3' size='large'>
            Create Order
          </Button>
          <Button type='primary' danger className='w-full mt-3' size='large'>
            <ClearOutlined />Clear
          </Button>
        </div>

      </div>





    </div>


  )
}

export default CardTotal
