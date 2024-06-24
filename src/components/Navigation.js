import {Link, NavLink} from "react-router-dom"
import {Container, Button} from "@mui/material"
import LittleEgyptLogo from "../assets/images/LittleEgyptLogo.png"
import "../assets/css/Navigation.css"
import { Margin } from "@mui/icons-material"
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
        <div className="conatiner">
        <nav className="nav">
            <NavLink to="/" className="title"> <img src={LittleEgyptLogo} id="nav-logo"/> </NavLink>
            <ul>
                <li> 
                    <a href="#menu">Menu </a>
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
            <div style= {{marginRight: '1em'}}>
                <button> Catering </button>
            </div>
        </nav>
        </div>
    )
}

export default NavBar;