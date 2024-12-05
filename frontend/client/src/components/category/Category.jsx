import React, { useState } from 'react'
import "./style.css"
import {PlusCircleOutlined} from '@ant-design/icons'
import Add from './Add';
import { set } from 'mongoose';


function Category({categories, setCategories}) {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
    
  const handleIsModalOpen = () => {
      setIsModalOpen(!isModalOpen);
  }
  return (
<>
      <ul className="flex md:flex-col gap-3">
      {
        categories.map((category)=>{
          return <li className='category-item' key={category._id}>{category.title}</li>
        })
      }
       
        <li className='category-item !bg-purple-800 hover:opacity-90' onClick={handleIsModalOpen}>
        <PlusCircleOutlined className='md:text-2xl' />
        </li>

      <Add isModalOpen={isModalOpen} 
      handleIsModalOpen={handleIsModalOpen}
      setCategories={setCategories}
      categories={categories}
       />

      </ul>
      </>
  )
}

export default Category
