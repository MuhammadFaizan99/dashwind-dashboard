import React, { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import HeaderStyles from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={HeaderStyles.header}>
      <div className={HeaderStyles.logo}>Logo</div>
      <div className={HeaderStyles.navButtons}>
        {windowWidth <= 700 ? (
          <div className={HeaderStyles.hamburgerMenu} onClick={toggleMenu}>
            &#9776;
          </div>
        ) : (
          <div
            className={`${HeaderStyles.navItems} ${
              isMenuOpen ? HeaderStyles.open : ""
            }`}
          >
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
          </div>
        )}

        {/* Material-UI Drawer */}
        <Drawer
          anchor="right"
          open={isMenuOpen}
          style={{ width: "300px" }}
          onClose={toggleMenu}
        >
          <List>
            <ListItem button component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/blog">
              <ListItemText primary="Blog" />
            </ListItem>
            <ListItem button component={Link} to="/about">
              <ListItemText primary="About" />
            </ListItem>
          </List>
          {windowWidth <= 700 && (
            <div className={HeaderStyles.buttons}>
              <Button variant="contained" color="primary">
                Sign In
              </Button>
              <Button variant="contained" color="primary">
                Sign Up
              </Button>
            </div>
          )}
        </Drawer>

        {/* Move the buttons here for windowWidth > 700px */}
        {windowWidth > 700 && (
          <div className={HeaderStyles.buttons}>
            <Button variant="contained" color="primary">
              Sign In
            </Button>
            <Button variant="contained" color="primary">
              Sign Up
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}