import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import { navItems } from "../../Data/NavData";
const NavBar = () => {
  const navigation = useNavigate();

  return (
    <Box>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#ffff",
          boxShadow: "none",
          borderBottom: " 2px solid #EEEDEB",
        }}
      >
        <Toolbar>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                sx={{ color: "#000" }}
                onClick={() => navigation(item.linkTo)}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ p: 2 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default NavBar;
