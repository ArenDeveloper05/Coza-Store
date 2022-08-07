import { BsHeart } from "react-icons/bs"
import { AiFillHeart } from "react-icons/ai"
import { useState } from "react";
import BaseButton from "../../../common/baseButton/BaseButton";

const ProductItem = ({ item, setModalData, setIsModalOpen }) => {
  const [isOver, setIsOver] = useState(false);
  const { modelName, price, isLiked, image, modal } = item;
  const { src, alt } = image;

  const openModal = () => {
    setIsModalOpen(true);
    setModalData({
        imageData: modal,
        textData: {
            price,
            modelName
        }
    });
  }

    return (
        <div className="product-items-item">
            <div className="product-items-item-image">
                <img src={ src } alt={ alt } />
                <BaseButton func={openModal} text="Quick View" />
            </div>
            <div className="product-items-item-info">
                <div className="row-line">
                    <h4>{ modelName }</h4>
                    <i onMouseLeave={() => setIsOver(false)} onMouseOver={() => setIsOver(true)}>{ isOver ? <AiFillHeart /> : <BsHeart />}</i>
                </div>
                <p>{ price }</p>
            </div>            
        </div>
    )
}

export default ProductItem