import { Route, Routes } from "react-router-dom";
// Import Elements for set route.
import HomePage from "../pages/homePage/HomePage";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={ <HomePage /> } />
        </Routes>
    )
}

export default App;