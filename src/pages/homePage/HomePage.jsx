import Layout from "../../components/layout/Layout";
import ProductCategory from "../../components/productCategory/ProductCategory";
import { productCategoryData } from "../../data/homePageData";
import { createContext } from "react";

export const HomeContext = createContext();

const HomePage = () => {
    return (
        <Layout>
           <HomeContext.Provider value={ { productCategoryData } }>
                <main className="page-main">
                    <ProductCategory />
                </main>
           </HomeContext.Provider>
        </Layout>
    )
}

export default HomePage;