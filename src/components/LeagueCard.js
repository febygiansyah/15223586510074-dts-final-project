import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LeagueCard = ({ league }) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const fetchData = async () => {
    const response = await axios.get(
      `https://api-football-standings.azharimm.site/leagues/${league.id}/seasons`
    );
    return response.data;
  };
  const getDetailsLeague = async () => {
    if (user) {
      const data = await fetchData();
      return navigate("/leaguedetail", { state: { leagues: data } });
    } else {
      return navigate("/login");
    }
  };
  return (
    <Card
      id={league.id}
      onClick={getDetailsLeague}
      sx={{ display: "flex", width: 300, margin: 5 }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={league.logos.light}
          alt="logos"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {league.abbr}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {league.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default LeagueCard;
