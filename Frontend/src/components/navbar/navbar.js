import { React } from "react";
import { Link } from "react-router-dom";

// importing Navbar Components
import "./navbar.css";
import NavbarMenu from "./navbarmenu";
import NavbarItems from "./navbarlinks";
import SideNav from "./sidenav.js";
// importing Material UI components
import { AppBar, Toolbar, Stack } from "@mui/material";

const NavMenuBase = () => {
  return (
    <Stack className="nav-menu-base">
      <NavbarMenu />
    </Stack>
  );
};



const BaseNavItem = () => {
  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      className="navbar-base-items"
    >
      <div className="nav-base-links nav-desktop-item">
        <NavbarItems />
      </div>
      <NavMenuBase /> 
    </Stack>
  );
};

const Navbar = () => {

  return (
    <AppBar position="sticky" className="navbar">
      <Toolbar variant="regular" sx={{ height: "100%" }}>
        <div className="nav-mobile-item">
          <SideNav />
        </div>
      
        {(window.innerWidth >= 996) && (
          <div className="nav-logo">
            <Link to="/">
              <img src="/images/logo_img.png" alt="Cyber-security awarness" />
            </Link>
          </div>
        )}
        <BaseNavItem/>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
