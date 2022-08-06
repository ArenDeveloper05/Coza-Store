import React from 'react'
import ProductFilter from './productFilter/ProductFilter'
import ProductSearch from './productSearch/ProductSearch'
import ProductTypes from './productTypes/ProductTypes'

const ProductSelect = ({ typesData }) => {
  return (
    <div className='product-select'>
       <ProductTypes />
       <div className='product-select-second-side'>
            <ProductFilter />
            <ProductSearch />
       </div>
    </div>
  )
}

export default ProductSelect