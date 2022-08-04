import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

import LeagueCard from "../components/LeagueCard";

const LeagueList = () => {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    const fetchLeagues = async () => {
      const fetchedLeagues = await axios.get(process.env.REACT_APP_BASE_URL);
      console.log(fetchedLeagues.data.data);
      setLeagues(fetchedLeagues.data.data);
    };

    fetchLeagues();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        mt: 5,
      }}
    >
      {leagues.map((league) => (
        <LeagueCard league={league}></LeagueCard>
      ))}
    </Box>
  );
};

export default LeagueList;
