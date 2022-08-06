import "./ProductCategory.scss";
import { useContext } from "react";
import { HomeContext } from "../../pages/homePage/HomePage";
import ProductCategoryItem from "./productCategoryItem/ProductCategoryItem";

const ProductCategory = () => {
  const { productCategoryData } = useContext(HomeContext);
    return (
        <div className="product-category">
            {
                productCategoryData.map(item => {
                    return <ProductCategoryItem key={ item.id } item={ item } />
                })
            }
        </div>
    )
}

export default ProductCategory;