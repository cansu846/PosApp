import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header';
import Category from '../components/category/Category';
import Product from '../components/product/Product';
import CardTotal from '../components/cart/CardTotal';

function HomePage() {

  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      var response = await fetch("http://localhost:5000/api/category/get-all");
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json);
      setCategories(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);



  return (
    <div>

      <div className="home flex flex-col md:flex-row px-3 
      gap-3">

        <div className='category overflow-auto 
      max-h-[calc(100vh_-_112px)]'>
          <Category categories={categories} setCategories={setCategories}/>
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
