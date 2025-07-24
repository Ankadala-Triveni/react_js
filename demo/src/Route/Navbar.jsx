import {NavLink,Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"
function Navbar(){
    const Navigate=useNavigate();
    return(
        <div>
            <h1>Web Page</h1>
            <ul>
                {/*<link to={'/}><li>Home</li></link>
                <link to ={'/about'}><li>About</li></link>
                <link to={'/product}><li>product</li></link>*/}
                <NavLink to={'/'}><li>Home</li></NavLink>
                <NavLink to={'/about'}><li>About</li></NavLink>
                <NavLink to={'/product'}><li>Product</li></NavLink>

            </ul>
            <button onClick={()=> Navigate('/about')}>Info</button>

        </div>
    )
}
export default Navbar