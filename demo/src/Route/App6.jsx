import {Routes,Route} from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Product from "./Product.jsx";
import Navbar from "./Navbar.jsx";

function App6(){
    return(
        <div>
            <Navbar/>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Product" element={<Product/>}/>
            </Routes>

        </div>
    )
}
 export default App6