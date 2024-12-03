import React from 'react'
import Header from '../components/header/Header';
import Category from '../components/category/Category';
import Product from '../components/product/Product';
import CardTotal from '../cart/CardTotal';

function HomePage() {
  return (
    <div>
      
      <div className="home flex flex-col md:flex-row px-3 
      gap-3">

        <div className='category overflow-auto 
      max-h-[calc(100vh_-_112px)]'>
          <Category />
        </div>
        <div className='product flex-[8] overflow-auto  max-h-[calc(100vh_-_112px)]'>
          <Product />
        </div>
        <div className='cardtotal'>
          <CardTotal />
        </div>
      </div>
    </div>
  )
}

export default HomePage
