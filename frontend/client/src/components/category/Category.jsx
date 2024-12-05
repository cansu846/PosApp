import React, { useState } from 'react'
import "./style.css"
import { PlusCircleOutlined, EditOutlined } from '@ant-design/icons'
import Add from './Add';
import Edit from './Edit';

function Category({ categories, setCategories }) {

  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);
  const [isEditCategoryModalOpen, setIsEditCategoryModalOpen] = useState(false);

  const handleIsAddCategoryModalOpen = () => {
    setIsAddCategoryModalOpen(!isAddCategoryModalOpen);
  }

  const handleIsEditCategoryModalOpen = () => {
    setIsEditCategoryModalOpen(!isEditCategoryModalOpen);
  }
  return (
    <>
      <ul className="flex md:flex-col gap-3">
        {
          categories.map((category) => {
            return <li className='category-item' key={category._id}>{category.title}</li>
          })
        }

        <li className='category-item !bg-purple-800 hover:opacity-90' onClick={handleIsAddCategoryModalOpen}>
          <PlusCircleOutlined className='md:text-2xl' />
        </li>

        <li className='category-item !bg-orange-800 hover:opacity-90' onClick={handleIsEditCategoryModalOpen}>
          <EditOutlined className='md:text-2xl' onClick={handleIsEditCategoryModalOpen} />
        </li>

        <Add isAddCategoryModalOpen={isAddCategoryModalOpen}
          handleIsAddCategoryModalOpen={handleIsAddCategoryModalOpen}
          setCategories={setCategories}
          categories={categories}
        />

        <Edit isEditCategoryModalOpen={isEditCategoryModalOpen}
          handleIsEditCategoryModalOpen={handleIsEditCategoryModalOpen}
          setCategories={setCategories}
          categories={categories}
        />

      </ul>
    </>
  )
}

export default Category
