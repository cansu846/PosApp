import React, { useEffect, useState } from 'react'
import "./style.css"
import { PlusCircleOutlined, EditOutlined } from '@ant-design/icons'
import Add from './Add';
import Edit from './Edit';

function Category({ categories, setCategories, setFilteredProduct, products, filteredProduct }) {

  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);
  const [isEditCategoryModalOpen, setIsEditCategoryModalOpen] = useState(false);
  const [categoryTitle, setCategoryTitle] = useState("All");

  const handleIsAddCategoryModalOpen = () => {
    setIsAddCategoryModalOpen(!isAddCategoryModalOpen);
  }

  const handleIsEditCategoryModalOpen = () => {
    setIsEditCategoryModalOpen(!isEditCategoryModalOpen);
  }

  console.log("cateogry title:", categoryTitle);
  const filterProductByCategoryName = () => {
    if (categoryTitle === "All") {
      setFilteredProduct(products);
    } else {
      //Boşluklar ve buyuk küçük harfedikkat edilmediğinde filtreleme olmuyor
      setFilteredProduct(products.filter((product) => 
        product.category?.trim().toLowerCase() === categoryTitle.trim().toLowerCase()
    ));
    }
  }

  useEffect(() => {
    filterProductByCategoryName();

  }, [products, setFilteredProduct, categoryTitle]);

  return (
    <>
      <ul className="flex md:flex-col gap-3">
        {

          categories
            .sort((a, b) => a.title.localeCompare(b.title)) // Sorts alphabetically by title
            .map((category) => {
              return <li className='category-item' key={category._id} onClick={() => setCategoryTitle(category.title)}>{category.title}</li>
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
