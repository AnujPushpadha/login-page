import * as React from "react";
import "./Style.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const Navigate = useNavigate();

  return (
    <div className="home">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              App Name
            </Typography>
            <Button color="inherit" onClick={() => Navigate("/login")}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
