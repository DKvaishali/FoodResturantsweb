import { Box, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", p: 3, bgcolor: "#1A1A19", color: "white" }}
      >
        <Box sx={{
            my :3,
            "& svg":{
                fontSize:"60px",
                cursor:"pointer",
                mr:2,
            },
            "& svg:hover":{
                color:"goldenrod",
                transform:"translateX(5px)",
                transition:"all 400ms"
            }
        }}>
            {/*icons */}
            <InstagramIcon/>
            <TwitterIcon/>
            <FacebookIcon/>
            <LinkedInIcon/>
            <YouTubeIcon/>
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media(max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Right Reserved ©copyright
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
