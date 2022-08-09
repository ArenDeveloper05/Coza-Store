import "./ProductSearchDrop.scss"
import { AiOutlineSearch } from "react-icons/ai"

const ProductSearchDrop = () => {
  return (
    <div className='product-search-drop-container'>
        <div className='product-search-drop'>
            <i><AiOutlineSearch /></i>
            <input type="text" placeholder="Search" />
        </div>
    </div>
  )
}

export default ProductSearchDrop