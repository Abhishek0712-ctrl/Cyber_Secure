import { React, useState, useEffect } from "react";

// Components
import { Divider, Button } from "@mui/material";
import { Stack, MenuItem } from "@mui/material";

// Icons
import LogoutIcon from "@mui/icons-material/Logout";
import axios from "axios";

const NavbarMenu = () => {
  const goolgeAuth = () =>{
    window.open(
        `${process.env.REACT_APP_API_URL}/auth/google/callback`,
        "_self"
    )
  }
  const [user, setUser] = useState(null);
  const handleLogout = () => {
		window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
	};
	const getUser = async () => {
		try {
			const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
		} catch (err) {
      console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);
  
  return (
    <Stack>
        <Divider />
        {user? 
        <MenuItem onClick={handleLogout} className="nav-menu-logout">
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
            className="nav-menu-logout"
          >
            <LogoutIcon />
            <span>Logout</span>
          </Stack>
        </MenuItem>
        : 
        <Button
        className="navbar-login-btn"
        variant="outlined"
        size="small"
        color="success"
        onClick={goolgeAuth}
      >
        Login
      </Button>
        }
    
    </Stack>
  );
};
export default NavbarMenu;
