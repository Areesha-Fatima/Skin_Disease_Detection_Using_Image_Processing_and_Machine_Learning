import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
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
import img2 from "../images/sdd.png";
import { AuthContext } from "../index";

function Navbar() {
  const { loggedIn, logout } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "rgba(15, 23, 42, 0.95)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        zIndex: 1000,
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          padding: "8px 16px !important",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <img
              src={img2}
              alt="Logo"
              style={{ width: "140px", height: "auto", objectFit: "contain" }}
            />
          </Link>
        </div>

        <Typography variant="h6" sx={{ flexGrow: 1 }} />

        {isMobile ? (
          <IconButton
            edge="end"
            aria-label="menu"
            onClick={handleMenuClick}
            sx={{
              color: "#ffffff",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              borderRadius: "8px",
              padding: "8px",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.15)",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Button
              component={Link}
              to="/"
              sx={{
                color: "#cbd5e1",
                fontWeight: 500,
                textTransform: "none",
                fontSize: "0.95rem",
                padding: "8px 16px",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                },
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/about"
              sx={{
                color: "#cbd5e1",
                fontWeight: 500,
                textTransform: "none",
                fontSize: "0.95rem",
                padding: "8px 16px",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                },
              }}
            >
              About Us
            </Button>
            {loggedIn ? (
              <Button
                onClick={logout}
                sx={{
                  color: "#cbd5e1",
                  fontWeight: 500,
                  textTransform: "none",
                  fontSize: "0.95rem",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#ffffff",
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                  },
                }}
              >
                Logout
              </Button>
            ) : (
              <>
                <Button
                  component={Link}
                  to="/login"
                  sx={{
                    color: "#cbd5e1",
                    fontWeight: 500,
                    textTransform: "none",
                    fontSize: "0.95rem",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#ffffff",
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                    },
                  }}
                >
                  Login
                </Button>
                <Button
                  component={Link}
                  to="/signup"
                  sx={{
                    background:
                      "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
                    color: "#ffffff",
                    fontWeight: 600,
                    textTransform: "none",
                    fontSize: "0.95rem",
                    padding: "8px 20px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(14, 165, 233, 0.3)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
                      transform: "translateY(-1px)",
                    },
                  }}
                >
                  Create an Account
                </Button>
              </>
            )}
          </div>
        )}
      </Toolbar>

      {/* Mobile Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundColor: "#0f172a",
            color: "#ffffff",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "12px",
            marginTop: "8px",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
            "& .MuiMenuItem-root": {
              padding: "12px 24px",
              fontWeight: 500,
              transition: "background 0.2s",
              "&:hover": {
                backgroundColor: "rgba(14, 165, 233, 0.15)",
                color: "#38bdf8",
              },
            },
          },
        }}
      >
        <MenuItem onClick={handleClose} component={Link} to="/">
          Home
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/about">
          About Us
        </MenuItem>
        {loggedIn ? (
          <MenuItem
            onClick={() => {
              logout();
              handleClose();
            }}
          >
            Logout
          </MenuItem>
        ) : (
          <>
            <MenuItem onClick={handleClose} component={Link} to="/login">
              Login
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/signup">
              Create an Account
            </MenuItem>
          </>
        )}
      </Menu>
    </AppBar>
  );
}

export default Navbar;
