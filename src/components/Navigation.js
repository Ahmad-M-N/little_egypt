import {Link, NavLink} from "react-router-dom"
import {Button} from "@mui/material"
import logo2 from "../assets/images/logo2.png"
import "../assets/css/Navigation.css"
function NavBar(){
    return(
        // <div class="Nav" style={{display: "flex"}}>
        //     <div style={{width: "20%"}}>
        //         LOGO
        //     </div>
        //     <div style={{width: "60%"}}>
        //         Options
        //     </div>
        //     <div style={{width: "20%"}}>
        //         Reserve
        //     </div>
        // </div>
        <nav class="Nav">
            <NavLink to="/" className="title"> <img src={logo2} id="nav-logo"/> </NavLink>
            <ul>
                <li> 
                    <NavLink to="/">Menu</NavLink>
                </li>
                <li> 
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <a href="#hours&location">Hours & Location </a>
                </li>                
                <li> 
                    <NavLink to="/">Gallery</NavLink>
                </li>
            </ul>
            <NavLink to="/" className="reserve"> <button> RESERVE </button> </NavLink>
        </nav>
    )
}

export default NavBar;