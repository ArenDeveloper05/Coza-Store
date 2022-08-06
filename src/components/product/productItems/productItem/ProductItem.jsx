import { BsHeart } from "react-icons/bs"
import { AiFillHeart } from "react-icons/ai"
import { useState } from "react";
import BaseButton from "../../../common/BaseButton/BaseButton";

const ProductItem = ({ item }) => {
  const [isOver, setIsOver] = useState(false);
  const { modelName, price, isLiked, image } = item;
  const { src, alt } = image;
  console.log(image);
    return (
        <div className="product-items-item">
            <div className="product-items-item-image">
                <img src={ src } alt={ alt } />
                <BaseButton text="Quick View" />
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