import { SportsSoccer, Logout } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

// const navItems = [
//   { text: "Home", link: "/" },
//   { text: "Login", link: "/login" },
// ];

const Navbar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [setQuery] = useState("");

  const onLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const search = () => {
    if (search === "") {
      return "https://api-football-standings.azharimm.site/leagues";
    } else {
      alert("error");
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <SportsSoccer sx={{ display: "flex", mr: 1 }} />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: "block",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
            }}
          >
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/"
            >
              Klasemen Sepak Bola
            </Link>
          </Typography>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setQuery(e.target.value)}
            />
            <IconButton onClick={search} sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          {user ? (
            <Box sx={{ display: "flex" }}>
              <Box sx={{ padding: 1 }}>
                <Logout onClick={onLogout} />
              </Box>
            </Box>
          ) : (
            ""
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
