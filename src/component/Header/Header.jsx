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
      <div className={HeaderStyles.logo}>
        <img src="../../../assets/logo.png" alt="Logo" />
      </div>
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
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/faq">FAQ</Link>
          </div>
        )}

        {/* Material-UI Drawer */}
        <Drawer
          anchor="right"
          open={isMenuOpen}
          onClose={toggleMenu}
        >
          <div className={HeaderStyles.DrawerNavItems} style={{ margin: "10px 50px" }}>
            <List>
              <ListItem button component={Link} to="/">
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component={Link} to="/about">
                <ListItemText primary="About" />
              </ListItem>
              {/* <ListItem button component={Link} to="/contact">
                <ListItemText primary="Contact" />
              </ListItem>
              <ListItem button component={Link} to="/faq">
                <ListItemText primary="FAQ" />
              </ListItem> */}
            </List>
          </div>
          {windowWidth <= 700 && (
            <div className={HeaderStyles.buttons}>
              <Button variant="contained" color="primary">
                Dashboard
              </Button>
            </div>
          )}
        </Drawer>

        {/* Move the buttons here for windowWidth > 700px */}
        {windowWidth > 700 && (
          <div className={HeaderStyles.buttons}>
            <Button variant="contained" color="primary">
              <Link to="https://dashwind.vercel.app/app/welcome" style={{ color: "white", textDecoration: "none" }}>
                Dashboard
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
