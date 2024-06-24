import { Container, Box, Button, Grid } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Hummus from "../assets/images/Hummus.png"
import "../assets/css/Menu.css"
import { WidthFull } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

const menuItems =
    [
        {name:"Hummus" , price:"10$"},
        {name:"Shawarma" , price:"12$"},
        {name:"Shish Kabob" , price:"10$"},
        {name:"Biryani" , price:"8$"},
        {name:"J&A Special" , price:"20$"}
    ];

const menuSection = (sectionId, sectionHeader, items) => {
    return (
        <Container id={sectionId} style={{padding: 1 }}>
            <h2 className="sectionHeader"> {sectionHeader} </h2>
            {items.map((item, index) => (
                <Box key={index} sx={{lineHeight: "1.4em"}}>
                    <h3 id="card-title"> {item.name} </h3>
                    <p> {item.price} </p>
                    <br/>    
                </Box>
            ))}
        </Container>
    );
}

const menuSectionCarded = (sectionId, sectionHeader, items, bgColor) => {
    return (
        <div id={sectionId} style={{backgroundColor: bgColor, padding: 20}}>
            <h2 className="sectionHeader"> {sectionHeader} </h2>
            <Box display="flex" flexWrap="wrap" justifyContent="center" padding='2em' sx={{gap: 10}}>
              {items.map((item, index) => (
                itemCard(item, index, bgColor)))}
            </Box>
        </div>
    );
}

const itemCard = (item, index) => {
  return (
    <Card key = {index} sx={{boxShadow:"0 0 15px -3px rgb(188 187 187)"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image = {Hummus}
          alt="green iguana"
        />
        <CardContent sx={{backgroundColor: "rgb(242, 242, 242)"}}>
          <div className="card-heading" style={{display:"flex", justifyContent: "space-between", alignItems: "center"}}>
            <h2 className="card-header" style={{margin: 6, overflowWrap: "break-word"}}> {item.name} </h2>
            <p className="card-price" style={{margin: 6, lineHeight:"135%"}}> {item.price} </p>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function Menu(){
    return(
        <div className="menu" id="menu">
            {/* <div class="menu-buttons">
                <Container sx={{padding: 3}}>
                    <Box sx={{display: 'flex', gap: 5, justifyContent: "center"}}>
                        <Button variant='outlined' size='medium' href="#Specialities-section"> Specialities </Button> 
                        <Button variant='outlined' size='medium' href="#Medditerainian-section"> Medditerainian </Button> 
                        <Button variant='outlined' size='medium' href="#Drinks-section"> Drinks </Button> 
                    </Box>
                </Container>
            </div> */}
            {/* <Container>
              <Box display="flex" flexWrap="wrap" justifyContent="Center" sx={{gap: 6}}>
                {itemCard()}
                {itemCard()}
                {itemCard()}
                {itemCard()}
                {itemCard()}
                {itemCard()}
              </Box>
            </Container> */}
            {menuSectionCarded("specialities-carded","Specialities", menuItems)}
            {menuSectionCarded("medditerainian-carded","Medditerainian", menuItems, )}
            {menuSectionCarded("sides-carded","Sides", menuItems, )}
            {menuSectionCarded("drinks-carded","Drinks", menuItems, )}
        </div>
    );
}

export default Menu;