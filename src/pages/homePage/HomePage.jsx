import Slider from "../../components/header/slider/Slider";
import Layout from "../../components/layout/Layout";
import ProductCategory from "../../components/productCategory/ProductCategory";
import { productCategoryData } from "../../data/homePageData";
import { createContext } from "react";
import Product from "../../components/product/Product";

export const HomeContext = createContext();

const HomePage = () => {
    return (
        <Layout>
           <HomeContext.Provider value={ { productCategoryData } }>
                <main className="page-main">
                    <Slider/>
                    <div className="page-main-wrapper">
                        <ProductCategory />
                        <Product title="PRODUCT OVERVIEW" />
                    </div>
                </main>
           </HomeContext.Provider>
        </Layout>
    )
}

export default HomePage;