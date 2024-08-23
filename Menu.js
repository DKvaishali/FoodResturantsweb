// src/pages/MenuPage.js
import React from 'react';
import Layout from '../Components/Layout/Layout';
// Importing the MenuList data from the data file
import { MenuList } from "../Data/data";
// Importing the necessary components from the Material UI library
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

// Defining the Menu component
const Menu = () => {
  // Returning the layout and the map of the MenuList data
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          // Mapping through the MenuList data and creating a card for each item
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              // Setting the image of the card
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                // Setting the name of the card
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                // Setting the description of the card
                <Typography variant="body2">{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

// Exporting the Menu component
export default Menu;
