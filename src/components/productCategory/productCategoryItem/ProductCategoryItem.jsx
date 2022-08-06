const ProductCategoryItem = ({ item }) => {
  const { type, info, image } = item;
  const { src, alt } = image;

  return (
    <div className="product-category-item">
      <div className="product-category-item-bg"></div> 
      <div className="product-category-item-info">
            <h2>{ type && type }</h2>
            <p>{ info && info }</p>
      </div>
      <img src={ src } alt={ alt } />
      <div className="product-category-item-button">
          <div className="product-category-item-button-text">
                SHOP NOW
          </div>
      </div>
    </div>
  )
}

export default ProductCategoryItem;