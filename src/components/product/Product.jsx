import { createContext } from 'react'
import "./Product.scss"
import ProductSelect from './productSelect/ProductSelect'
import { productData } from '../../data/homePageData'
import ProductItems from './productItems/ProductItems';

export const ProductContext = createContext();

const Product = ({ title }) => {
    return (
        <ProductContext.Provider value={ productData }>
            <div className='product'>
                <h1 className='product-title'>{ title && title }</h1>
                <ProductSelect />
                <ProductItems />
            </div>
        </ProductContext.Provider>
    )
}

export default Product