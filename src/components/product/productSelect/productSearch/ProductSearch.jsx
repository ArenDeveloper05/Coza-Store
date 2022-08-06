import { AiOutlineSearch } from "react-icons/ai"
import BaseSelectMenu from "../../../common/BaseSelectMenu/BaseSelectMenu"
import "./ProductSearch.scss"

const ProductSearch = () => {
  return (
    <div className='product-search'>
        <BaseSelectMenu Icon={ AiOutlineSearch } text="Search" />
    </div>
  )
}

export default ProductSearch