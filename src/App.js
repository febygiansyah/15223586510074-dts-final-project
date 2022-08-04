import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// import "./style/landingPage.css";

import { ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import theme from "./themes/theme";
import LeagueList from "./containers/LeagueList";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar></Navbar>
        <LeagueList></LeagueList>
        <Footer></Footer>
        
      </div>
    </ThemeProvider>
  );
};

export default App;
