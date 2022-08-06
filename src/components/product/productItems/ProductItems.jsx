import { useContext } from "react"
import { ProductContext } from "../Product"
import ProductItem from "./productItem/ProductItem";
import "./ProductItems.scss"

const ProductItems = () => {
  const { items } = useContext(ProductContext);
    return (
        <div className="product-items">
            {
                items.map(item => {
                    console.log(item);
                    return <ProductItem key={ item.id } item={ item } />
                })
            }
        </div>
    )
}

export default ProductItems