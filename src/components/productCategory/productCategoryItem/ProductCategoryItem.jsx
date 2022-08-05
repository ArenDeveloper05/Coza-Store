const ProductCategoryItem = ({ item }) => {
  const { type, info, image } = item;
  const { src, alt } = image;

  return (
    <div className="product-category-item">
        <div className="product-category-item-info">
            <h2>{ type && type }</h2>
            <p>{ info && info }</p>
        </div>
        <img src={ src } alt={ alt } />
    </div>
  )
}

export default ProductCategoryItem;