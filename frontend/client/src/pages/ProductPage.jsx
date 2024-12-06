import React from 'react'
import Edit from '../components/product/Edit'

function ProductPage() {
    return (
        <div>
            <div className="px-6">
                <h1 className="text-4xl font-bold text-center mb-4">Products</h1>
                <Edit />
            </div>
        </div>
    )
}

export default ProductPage
