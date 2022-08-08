import "./App.scss";
import { Route, Routes } from "react-router-dom";
// Import Elements for set route.
import HomePage from "../pages/homePage/HomePage";
import FeaturesPage from "../pages/featuresPage/FeaturesPage";
import ShopPage from "../pages/shopPage/ShopPage";
import ContactPage from "../pages/contactPage/ContactPage";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/Home" element={ <HomePage /> } />
            <Route path="/Features" element={ <FeaturesPage /> } />
            <Route path="/Shop" element={ <ShopPage /> } />
            <Route path="/Contact" element={ <ContactPage /> } />
        </Routes>
    )
}

export default App;