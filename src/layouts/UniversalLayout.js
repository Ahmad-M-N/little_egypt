import {Outlet} from "react-router-dom";

// Navigation
import ResponsiveAppBar from "../components/ResponsiveNav";
import NavBar from "../components/Navigation";

function UniversalLayout(){
    return(
        <>
            <NavBar/>   
            <Outlet name="pages"/>
        </>
    );
}


export default UniversalLayout;