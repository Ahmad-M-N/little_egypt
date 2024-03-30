import { Container, Box, Button } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const menuItems =
    [
        {name:"Item1" , price:"10$"},
        {name:"Item2" , price:"10$"},
        {name:"Item3" , price:"10$"},
        {name:"Item4" , price:"10$"}
    ];

const menuSection = (sectionId, sectionHeader, items) => {
    return (
        <Container id={sectionId} style={{padding: 1 }}>
            <h2> {sectionHeader} </h2>
            {items.map((item, index) => (
                <Box style={{lineHeight: "1.4em"}}>
                    <h3> {item.name} </h3>
                    <p> {item.price} </p>
                    <br/>
                </Box>
            ))}
        </Container>
    );
}

const itemCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <div className="card-heading" style={{display:"flex", justifyContent: "space-between", alignItems: "center"}}>
            <h2 className="card-header" style={{width: "70%", margin:"0", overflowWrap: "break-word"}}> Hello djshks ndsfkjndsk bjhbhj </h2>
            <p className="card-price" style={{margin:"0", lineHeight:"135%"}}> Jello </p>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function Menu(){
    return(
        <div className="menu">
            <div class="menu-buttons">
                <Container sx={{padding: 3}}>
                    <Box sx={{display: 'flex', gap: 5, justifyContent: "center"}}>
                        <Button variant='outlined' size='medium' href="#Specialities-section"> Specialities </Button> 
                        <Button variant='outlined' size='medium' href="#Medditerainian-section"> Medditerainian </Button> 
                        <Button variant='outlined' size='medium' href="#Drinks-section"> Drinks </Button> 
                    </Box>
                </Container>
            </div>
            <Outlet name="menu"/>
                {menuSection("Specialities-section","Specialities", menuItems)}
                {menuSection("Medditerainian-section","Medditerainian", menuItems)}
                {menuSection("Drinks-section","Drinks", menuItems)}
                {menuSection("Some-sample","Sample", menuItems)}
        </div>
    );
}

export default Menu;