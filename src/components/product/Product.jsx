import "./Product.scss"
import { createContext, useContext, useState } from 'react'
import ProductSelect from './productSelect/ProductSelect'
import ProductItems from './productItems/ProductItems';
import { HomeContext } from '../../pages/homePage/HomePage';
import ProductModal from "./productModal/ProductModal";
import BaseButton from "../common/baseButton/BaseButton";

export const ProductContext = createContext();

const Product = () => {
  const { productData, productTitle } = useContext(HomeContext);
  const [itemsData, setItemsData] = useState(productData.items);
  const [typesData, setTypesData] = useState(productData.types);
  const [modalData, setModalData] = useState({
    imageData: null,
    textData: null
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sortItems = (type) => {
    setItemsData(() => {
        return productData.items.filter(item => {
            if (type === "all products") {
                return productData.types;
            } else {
                return item.type === type;
            }
        })
    });
  }

  const onChangeActive = (id) => {
    setTypesData(() => {
        return productData.types.map(item => {
            if (item.id === id) {
                item.isActive = true;
            } else {
                item.isActive = false;
            }

            return item;
        })
    })
  }

    return (
        <ProductContext.Provider value={{ productItemsData: itemsData, productTypesData: typesData, sortItems, onChangeActive, setModalData, setIsModalOpen }}>
            <div className='product'>
                <h1 className='product-title'>{ productTitle && productTitle }</h1>
                <ProductSelect />
                <ProductItems />
                <BaseButton text="Load More" />
                { isModalOpen ? <ProductModal modalData={ modalData } /> : undefined}
            </div>
        </ProductContext.Provider>
    )
}

export default Product