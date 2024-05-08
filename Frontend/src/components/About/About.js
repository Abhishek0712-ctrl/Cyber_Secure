import { React } from "react";
import { Helmet } from "react-helmet-async";
import "./About.css";

// Components
import { Box, Stack, Typography, Avatar } from "@mui/material";

// About Components
import AboutSocial from "./AboutSocial";
import AboutTeam from "./AboutTeam";

const Year = new Date().getFullYear();
const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Cyber Security Awarness</title>
        <meta
          name="description"
          content="We are a team of students who are enthusiastic developers. We are trying to create a platform for basic understanding of the Cyber Security"
        />
      </Helmet>
      <Box className="about-bg">
        <Stack
          sx={{ width: "100%", padding: "10px" }}
          direction="column"
          alignItems="center"
        >
          <Avatar
            src="/images/logo_img.png"
            alt="Cyber Security Awarness"
            variant="rounded"
            sx={{ height: 56, width: "auto" }}
          />
          <Typography
            variant="h3"
            sx={{
              fontFamily: "PT sans",
              color: "rgba(255,255,255,0.9)",
              letterSpacing: "2px",
              fontWeight: "bolder",
              "@media screen and (max-width:600px)": { fontSize: "2em " },
            }}
          >
            Cyber Security Awarness
          </Typography>
          <AboutSocial />
          <Typography
          
            variant="h5"
            sx={{
              padding : "20px",
              color: "rgba(255,255,255,0.9)",
              letterSpacing: "5px",
            }}
          >
            TEAM
          </Typography>
          <AboutTeam />
          <Typography
            variant="h6"
            sx={{ color: "rgba(255,255,255,0.4)", letterSpacing: "5px" }}
            align="center"
          >
            {Year}
          </Typography>
        </Stack>
      </Box>
    </>
  );
};
export default About;
