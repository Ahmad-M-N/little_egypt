import { Container, Button, Box } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

import Menu from './Menu.js';
import HL from './HL.js';

function Home(){
    return(
        <>
            <div className = "landingPageTopDiv">
                <span className='home-header-block'>
                    <h1 className="page-header"> J&A <br/>Little Egypt </h1><br/>
                    <h2 className="tag-line"> Come for the food. Leave with an experience</h2>
                </span>
            </div>
            <Menu/>
            <HL/>
        </>
    );
}

export default Home;