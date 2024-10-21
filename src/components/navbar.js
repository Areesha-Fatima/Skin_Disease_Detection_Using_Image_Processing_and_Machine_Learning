import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import img2 from "../images/logo-white.png";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#3f51b5" }}>
      <Toolbar>
        <div className="site-branding">
          <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <img
              src={img2}
              style={{ width: "170px", height: "70px" }}
              alt="Logo"
            />
          </a>
        </div>
        <Typography variant="h6" style={{ flexGrow: 1 }} />
        {isMobile ? (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
          >
            <MenuIcon sx={{ color: "#ffeb3b" }} />
          </IconButton>
        ) : (
          <div className="navbar-links">
            <Button color="inherit" href="/" sx={{ color: "#ffeb3b" }}>
              Home
            </Button>
            <Button color="inherit" href="/about" sx={{ color: "#ffeb3b" }}>
              About Us
            </Button>
            <Button color="inherit" href="/login" sx={{ color: "#ffeb3b" }}>
              Login
            </Button>
            <Button color="inherit" href="/signup" sx={{ color: "#ffeb3b" }}>
              Create an Account
            </Button>
          </div>
        )}
      </Toolbar>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose} component="a" href="/">
          Home
        </MenuItem>
        <MenuItem onClick={handleClose} component="a" href="/about">
          About Us
        </MenuItem>
        <MenuItem onClick={handleClose} component="a" href="/login">
          Login
        </MenuItem>
        <MenuItem onClick={handleClose} component="a" href="/signup">
          Create an Account
        </MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
