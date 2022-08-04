import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material";
import theme from "../themes/theme";
import { useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

const LeagueDetailCard = () => {
  const location = useLocation();
  const leagues = location.state.leagues;

  console.log(leagues);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar></Navbar>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 10,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "start",
            }}
          >
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {leagues.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {leagues.desc}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Lihat</Button>
              </CardActions>
            </Card>
          </Box>
        </Box>
        <Footer></Footer>
      </ThemeProvider>
    </>
  );
};

export default LeagueDetailCard;
