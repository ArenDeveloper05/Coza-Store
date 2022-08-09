import "./Product.scss"
import { createContext, useState } from 'react'
import ProductSelect from './productSelect/ProductSelect'
import ProductItems from './productItems/ProductItems';
import ProductModal from "./productModal/ProductModal";
import BaseButton from "../common/baseButton/BaseButton";
import { Link } from "react-router-dom"
import ProductSearchDrop from "./productDrops/productSearchDrop/ProductSearchDrop";

export const ProductContext = createContext();

const Product = ({ productData, productTitle, distanceStyle }) => {
  const [itemsData, setItemsData] = useState(productData.items);
  const [typesData, setTypesData] = useState(productData.types);
  const [modalData, setModalData] = useState({
    imageData: null,
    textData: null
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchDropOpen, setIsSearchDropOpen] = useState(false);

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
        <ProductContext.Provider value={{ productItemsData: itemsData, productTypesData: typesData, sortItems, onChangeActive, setModalData, setIsModalOpen, setIsSearchDropOpen, isSearchDropOpen }}>
            <div style={distanceStyle && distanceStyle} className='product'>
                <h1 className='product-title'>{ productTitle && productTitle }</h1>
                <ProductSelect />
                { isSearchDropOpen && <ProductSearchDrop /> }
                <ProductItems />
                <Link to="/Shop"><BaseButton text="Load More" /></Link>
                { isModalOpen ? <ProductModal modalData={ modalData } setIsModalOpen={ setIsModalOpen } /> : undefined}
            </div>
        </ProductContext.Provider>
    )
}

export default Product