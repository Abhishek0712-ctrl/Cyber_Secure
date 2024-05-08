import { useLocation } from "react-router-dom";
import { Stack } from "@mui/material";
import NavLink from "../../assets/components/links/navlink";

const NavbarItems = () => {
  const location = useLocation();
  const activePath = location.pathname;
  return (
    <Stack
      direction="row"
      spacing={3}
      sx={{ height: "100%" }}
      justifyContent="center"
      alignItems="center"
    >
      <NavLink path="/" name="Home" active={activePath.length === 1} />
      <NavLink 
        path = "/content"
        name = "Content"
        active={activePath.startsWith("/content")}
      />
      <NavLink
        path="/discuss"
        name="Forum & Discuss"
        active={activePath.startsWith("/discuss")}
      />
      <NavLink 
        path = "/quiz"
        name = "Quiz"
        active={activePath.startsWith("/quiz")}
      />
      <NavLink
        path="/about"
        name="About"
        active={activePath.startsWith("/about")}
      />
      <NavLink 
        path = "/contact"
        name = "Contact"
        active={activePath.startsWith("/contact")}
      />
      <NavLink 
        path='/password-genrator'
        name = "Password Genrator"
        active={activePath.startsWith("/password-genrator")}
      />
    </Stack>
  );
};

export default NavbarItems;
