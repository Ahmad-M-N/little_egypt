import { Container, Button, Box } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

import Menu from './Menu.js';
import HL from './HL.js';

function Home(){
    return(
        <>
            <div Class = "landingPageTopDiv"> 
                <h1 className="page-header"> LITTLE EGYPT </h1>
            </div>
            <Menu/>
            <HL/>
        </>
    );
}

export default Home;