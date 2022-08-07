import Slider from "../../components/header/slider/Slider";
import Layout from "../../components/layout/Layout";
import ProductCategory from "../../components/productCategory/ProductCategory";
import { productCategoryData, productData } from "../../data/homePageData";
import { createContext } from "react";
import Product from "../../components/product/Product";

export const HomeContext = createContext();

const HomePage = () => {
    return (
        <Layout>
           <HomeContext.Provider value={{ productCategoryData, productData, productTitle: "PRODUCT OVERVIEW" }}>
                <main className="page-main">
                    <Slider/>
                    <div className="page-main-wrapper">
                        <ProductCategory />
                        <Product />
                    </div>
                </main>
           </HomeContext.Provider>
        </Layout>
    )
}

export default HomePage;