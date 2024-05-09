import React from "react";

// Mui Components
import { Stack, IconButton } from "@mui/material";

// Mui Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const TEAM_DATA = [
  {
    Name: "Arun Sharma",
    Location: "Jaipur, India",
    ProfileImg: "images/Team/arun.jpg",
    About: [
      "Backend Engineer",
      "B.Tech Final Year Student @SKIT Jaipur",
    ],
    Skills: [
      "C" , "C++" , "Core Java" , "python" , "javascript" , "HTML" , "CSS" , "PHP" , "Bootstrap" , "MySQL" , "Nodejs"
    ],
    Github: "https://github.com/arunsharma5593",
    Linkedin: "https://www.linkedin.com/in/arun-sharma-19b045242",
  },
  {
    Name: "Abhishek Garg",
    Location: "Jaipur, India",
    ProfileImg: "images/Team/Abhishek.jpg",
    About: [
      "DevOps Engineer",
      "B.Tech Final Year Student @SKIT Lucknow",
    ],
    Skills: [
      "Python",
      "SQL",
      "AWS",
      "Github",
      "DBMS",
      "AI/ML",
      "C",
      "C++",
      "Postman"
    ],
    Github: "https://github.com/Abhishek0712-ctrl",
    Linkedin: "https://www.linkedin.com/in/abhishek-garg0712/",
  },
  {
    Name: "Akshat Lakhara",
    Location: "Jaipur, India",
    ProfileImg:
      "https://media.licdn.com/dms/image/D5603AQFJn734ETlA-g/profile-displayphoto-shrink_800_800/0/1705652797824?e=1715817600&v=beta&t=RA012ddzkBt3U_RNqz7ihDwbKjBRWWjmN-l8m3XJ5Uo",
    About: ["Database Admin", "B.Tech Final Year Student @SKIT Jaipur"],
    Skills: [
      "JAVA",
      "HTML5",
      "CSS",
      "JavaScript",
      "ReactJS",
      "Apex",
      "SQL",
      "SOQL",
      "LWC",
    ],
    Github: "",
    Linkedin: "https://www.linkedin.com/in/akshat-kumar-lakhara-b08086141/",
  },
  {
    Name: "Ashvani Khandelwal ",
    Location: "Jaipur, India",
    ProfileImg:
      "images/Team/Ashvani.jpeg",
    About: ["Frontend Developer", "B.Tech Final Year Student @SKIT Jaipur"],
    Skills: [
      "Python",
      "React JS",
      "Machine learning",
      "C",
      "C++",
      "MySQL",
      "Apex",
      "HTML5",
    ],
    Github: "",
    Linkedin: "",
  }
];

const AboutTeam = () => {
  const OpenLink = (link) => {
    window.open(link, "_blank").focus();
  };

  const ProfileCard = (props) => {
    return (
      <div className="card-container">
        <img className="round" src={props.imgURL} alt={props.Name} />
        <h3>{props.Name}</h3>
        <h6>{props.Location}</h6>
        <p>
          {props?.About?.map((about, i) => (
            <>
              <span key={i}>{about}</span>
              <br />
            </>
          ))}
        </p>
        <Stack direction="row" spacing={1} justifyContent="center">
          <IconButton
            aria-label="github"
            onClick={() => OpenLink(props.Github)}
            size="small"
          >
            <GitHubIcon sx={{ color: "white", height: 16, width: 16 }} />
          </IconButton>
          <IconButton
            aria-label="linkedin"
            onClick={() => OpenLink(props.Linkedin)}
            size="small"
          >
            <LinkedInIcon sx={{ color: "white", height: 16, width: 16 }} />
          </IconButton>
        </Stack>
        <div className="skills">
          <h6>Skills</h6>
          <ul>
            {props?.skills?.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  return (
    <Stack
      direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
      spacing={2}
      justifyContent="space-evenly"
      alignItems="center"
    >
      {TEAM_DATA.map((person) => (
        <ProfileCard
          imgURL={person.ProfileImg}
          Name={person.Name}
          Location={person.Location}
          About={person.About}
          skills={person.Skills}
          profileLink={person.profileLink}
          Github={person.Github}
          Linkedin={person.Linkedin}
        />
      ))}
    </Stack>
  );
};

export default AboutTeam;
