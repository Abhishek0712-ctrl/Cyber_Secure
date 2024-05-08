import { React } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

// Components
import { Stack } from "@mui/material";
import { Typography, IconButton } from "@mui/material";

// Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Links
const YOUTUBE_URL = "";
const FACEBOOK_URL = "";
const LINKEDIN_URL = "";
const INSTAGRAM_URL = "";

// Footer App starts here
const Footer = () => {
  const Year = new Date().getFullYear();

  // Opening Links
  const OpenLink = (link) => {
    window.open(link, "_blank").focus();
  };
  return (
    <Stack className="footer-container">
      <Stack className="footer-subscription" alignItems="center">
      </Stack>
      <Stack
        sx={{ padding: "0px 24px" }}
        direction={{ xs: "column", sm: "row", md: "row", lg: "row" }}
        spacing={2}
      >
        <Stack
          direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
          spacing={2}
          sx={{ width: "100%", padding: "10px 0px" }}
          justifyContent="space-evenly"
        >
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-evenly"
            sx={{ width: "100%" }}
          >
            <Stack className="footer-link-items">
              <Typography variant="h6">Explore</Typography>
              <Link to="/About" className="cool-link">
                <Typography variant="caption">About Us</Typography>
              </Link>
              <Link to="/Login" className="cool-link">
                <Typography variant="caption">Sign in</Typography>
              </Link>
              
            </Stack>
            <Stack className="footer-link-items">
              <Typography variant="h6">Customer Service</Typography>
              <Link to="/" className="cool-link">
                <Typography variant="caption">Accessibility</Typography>
              </Link>
              <Link to="/Contact" className="cool-link">
                <Typography variant="caption">Contact Us</Typography>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        className="footer-container3"
        direction="row"
        spacing={1}
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="caption">&copy; {Year} Cyber Security Awarness</Typography>
        <img src="/images/india.png" alt = "india" height="16px" />
        <Typography variant="caption">All Rights Reserved</Typography>
      </Stack>

    </Stack>
  );
};
export default Footer;
