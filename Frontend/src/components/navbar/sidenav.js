import { useState } from "react";
import { Link } from "react-router-dom";

// Components

// Components
import { Stack, Divider } from "@mui/material";
// import { Stack, Divider } from "@mui/material";

import { IconButton, Drawer } from "@mui/material";
// Icons
import MenuIcon from "@mui/icons-material/Menu";




// Custom Menu Item Stack
const SideNavLink = ({ path, label, setOpen }) => {
  return (
    <Link to={path} onClick={() => setOpen((prev) => !prev)}>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="flex-start"
        alignItems="center"
        className="sidenav-link"
      >
        <span className="sidenav-label">{label}</span>
      </Stack>
      <Divider orientation="horizontal" flexItem={true} />
    </Link>
  );
};

const SideNavLinks = ({ setOpen }) => {

  
  return (
    <Stack className="sidenav-links" spacing={0} sx={{ minWidth: 200 }}>
      <div className="sidenav-logo">
        <img src="/images/logo_img.png" width="50px" alt="cyberSec" />
      </div>
      <SideNavLink
        path="/"
        label="Home"
        setOpen={setOpen}
      />     
      <SideNavLink
        path="/content"
        label="Content"
        setOpen={setOpen}
      />     
      <SideNavLink
        path="/discuss"
        label="Forum & Discuss"
        setOpen={setOpen}
      />
      <SideNavLink
        path="/quiz"
        label="Quiz"
        setOpen={setOpen}
      />
      <SideNavLink
        path="/about"
        label="About Us"
        setOpen={setOpen}
      />
      <SideNavLink
        path="/contact"
        label="Contact"
        setOpen={setOpen}
      />
    </Stack>
  );
};

const SideNavDrawer = ({ open, setOpen }) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={() => setOpen((prev) => !prev)}
      transitionDuration={500}
    >
      <SideNavLinks setOpen={setOpen} />
    </Drawer>
  );
};

const Sidenav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 1 }}
        onClick={() => setOpen((prev) => !prev)}
      >
        <MenuIcon />
      </IconButton>
      <SideNavDrawer  open={open} setOpen={setOpen} />
    </div>
  );
};

export default Sidenav;
