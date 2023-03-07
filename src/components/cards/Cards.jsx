import React from "react";
import "./Cards.css";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import PostAddIcon from "@mui/icons-material/PostAdd";
import ProductionQuantityLimitsSharpIcon from "@mui/icons-material/ProductionQuantityLimitsSharp";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import CategoryIcon from "@mui/icons-material/Category";

const Cards = () => {
  return (
    <div>
      <Box height={20} />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={{ xs: 3, sm: 6, md: 12 }}>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }} className="style">
              <CardContent>
                <ShowChartIcon />
                <Typography gutterBottom variant="h5" component="div">
                  <span>Stock</span>
                </Typography>
                <Typography gutterBottom body="b5" component="div">
                  <span>Value</span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <CategoryIcon />
                <Typography gutterBottom variant="h5" component="div">
                  Category
                </Typography>
                <Typography gutterBottom body="b5" component="div">
                  <span>Value</span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <PostAddIcon />
                <Typography gutterBottom variant="h5" component="div">
                  Products
                </Typography>
                <Typography gutterBottom body="b5" component="div">
                  <span>Value</span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <ProductionQuantityLimitsSharpIcon />
                <Typography gutterBottom variant="h5" component="div">
                  Out of Stock
                </Typography>
                <Typography gutterBottom body="b5" component="div">
                  <span>Value</span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Cards;
