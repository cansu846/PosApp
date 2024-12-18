import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header';
import Category from '../components/category/Category';
import Product from '../components/product/Product';
import CardTotal from '../components/cart/CardTotal';

function HomePage({search}) {

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  const getCategories = async () => {
    try {
      var response = await fetch(process.env.REACT_APP_SERVER_URL + "/api/category/get-all");
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json);
      setCategories(json.map((category) => (
        { ...category, value: category.title }
      ))
      );
    } catch (error) {
      console.error(error.message);
    }
  }

  const getProducts = async () => {
    try {
      var response = await fetch(process.env.REACT_APP_SERVER_URL + "/api/product/get-all");
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json);
      setProducts(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getCategories();
    getProducts();

  }, []);



  return (
    <div>

      <div className="home flex flex-col md:flex-row px-3 
      gap-3">

        <div className='category overflow-auto 
      max-h-[calc(100vh_-_112px)]'>
          <Category
            categories={categories}
            setCategories={setCategories}
            //Kategori adına göre filtreleme yapılacagı için setFiltered props olarak gönderilir.
            setFilteredProduct={setFilteredProduct} 
            filteredProduct={filteredProduct}
            products={products}/>
        </div>
        <div className='product flex-[8] overflow-auto  max-h-[calc(100vh_-_112px)]'>
          <Product
            products={products}
            setProducts={setProducts}
            categories={categories}
            //filtrelenen product lar gösterilir 
            filteredProduct={filteredProduct}
            search={search}
          />
        </div>
        <div className='cardtotal'>
          <CardTotal />
        </div>
      </div>
    </div>
  )
}

export default HomePage
