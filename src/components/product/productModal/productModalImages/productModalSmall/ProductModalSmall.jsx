import React from 'react'

const ProductModalSmall = ({ imageData }) => {
  const { image1, image2, image3 } = imageData;
  console.log(image1)
  console.log(image2)
  console.log(image3)

    return (
        <div className="product-modal-container-images-small">
            <div className='product-modal-container-images-small-item'>
                <img src={ image1 } alt="ok" />
            </div>
            <div className='product-modal-container-images-small-item'>
                <img src={ image2 } alt="ok" />
            </div>
            <div className='product-modal-container-images-small-item'>
                <img src={ image3 } alt="ok" />
            </div>
        </div> 
    )
}

export default ProductModalSmall