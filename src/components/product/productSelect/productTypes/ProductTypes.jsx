import { useContext } from 'react'
import { ProductContext } from '../../Product'
import "./ProductTypes.scss"

const ProductTypes = () => {
  const { types } = useContext(ProductContext);
    return (
        <div className='product-types'>
            {
                types.map(item => {
                    const { text, isActive, id } = item;
                    return <h4 key={ id } className={`product-types-item ${ isActive ? "active" : ""}`}>{ text }</h4>
                })
            }
        </div>
    )
}

export default ProductTypes