import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://klasbol-app.netlify.app/">
        15223586510074 -
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
      }}
      style={{ backgroundColor: "#009688" }}
      color="white"
    >
      <Container maxWidth="sm">
        <Typography variant="body1" align="center">
          Feby Giansyah
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
};
export default Footer;
