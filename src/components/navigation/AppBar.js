import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import QuizMain from "../quiz/QuizMain";
import HomeMain from "../home/HomeMain";
import AboutMain from "../about/AboutMain";
import CONNECT4EARTHAppBar from '../../assets/CONNECT4EARTHAppBar.png';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/styles";
import { useCookies } from "react-cookie";
import { ThemeProvider } from '@material-ui/core';
import THEME from '../home/theme';
import QuizIntroPage from "../quiz/QuizIntroPage";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Tooltip from '@mui/material/Tooltip';
import DemographicDashboard from "../dashboard/DemographicDashboard";
import POIDashboard from "../dashboard/POIDashboard";
import RainfallDashboard from "../dashboard/RainfallDashboard";
import DashboardGlossary from "../dashboard/DashboardGlossary";

const useStyles = makeStyles({
  navLink: {
    backgroundColor: "transparent",
    color: "#525252",
    textDecoration: "none"
  },
  appBar: {
    backgroundColor: "#A7F0BA"
  },
  logo: {
    height: '50px', 
  }
});

function AppBar2() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <ThemeProvider theme={THEME}>
      <Router>
        <div>
          <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" className={classes.appBar} style={{ background: "white", boxShadow: "none" }}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
              <img src={CONNECT4EARTHAppBar} sx={{ flexGrow: 1 }} className={classes.logo}></img>
              </IconButton>
              <Button>
                <Link className={classes.navLink} to="/">Home</Link>
              </Button>
              
              <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Button style={{color: "#525252"}} {...bindTrigger(popupState)}>
                    Dashboard
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <Tooltip title={`
                        Explore the demographics/age groups affected by flood in Singapore, visualized by subzones.
                        Subzone is Singapore’s smallest administrative area and Singapore has more than 300 subzones.  
                        You can filter the data by subzones. Don’t forget that you can hide & unhide map layers too!                      
                      `}
                      placement="right-start" arrow>
                    <MenuItem onClick={popupState.close}>
                      <Link to='/dashboard-demographic' style={{textDecoration: "none", color: "#525252"}}>
                        Demographic impacted by flood
                      </Link>
                    </MenuItem>
                    </Tooltip>
                    <Tooltip title={`
                        Explore the POIs affected by flood in Singapore.
                        POI refers to a specific location of a place that people may find interest in. Example of a POI would be a hospital or a train station.
                        You can filter the data by subzones or by the type/category of POIs. Don’t forget that you can hide & unhide map layers too!
                      `}
                      placement="right-start" arrow>
                    <MenuItem onClick={popupState.close}>
                      <Link to='/dashboard-poi' style={{textDecoration: "none", color: "#525252"}}>
                        Business impacted by flood
                      </Link>
                    </MenuItem>
                    </Tooltip>
                    <Tooltip title={`
                        Explore the amount of daily rainfall that Singapore receives. 
                        You can filter rainfall data by weather stations or by the date. Don’t forget that you can hide & unhide map layers too!
                      `}
                      placement="right-start" arrow>
                    <MenuItem onClick={popupState.close}>
                      <Link to='/dashboard-rainfall' style={{textDecoration: "none", color: "#525252"}}>
                        Daily Rainfall Analysis
                      </Link>
                    </MenuItem>
                    </Tooltip>
                    <Tooltip title={`
                        Coming Soon!                      
                      `}
                      placement="right-start" arrow>
                    <MenuItem onClick={popupState.close} disabled>
                      {/* <Link to='/dashboard-sealevel' style={{textDecoration: "none", color: "#525252"}}> */}
                          Sea-Level Rise (Coming Soon)
                      {/* </Link> */}
                    </MenuItem>
                    </Tooltip>
                  </Menu>
                </React.Fragment>
              )}
              </PopupState>
              <Button color="inherit">
                <Link className={classes.navLink} to="/quizIntro">My Sustainability Journey</Link>
              </Button>
              <Button color="inherit">
                <Link className={classes.navLink} to="/about">About</Link>
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/dashboard-demographic">
              <DemographicDashboard />
            </Route>
            <Route path="/dashboard-poi">
              <POIDashboard />
            </Route>
            <Route path="/dashboard-rainfall">
              <RainfallDashboard />
            </Route>
            <Route path="/dashboard-sealevel">
              <DemographicDashboard />
            </Route>
            <Route path="/quiz">
              <QuizMain />
            </Route>
            <Route path="/quizIntro">
              <QuizIntroPage />
            </Route>
            <Route path="/about">
              <AboutMain />
            </Route>
            <Route path="/glossary">
              <DashboardGlossary />
            </Route>
            <Route path="/">
              <HomeMain />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default withStyles(useStyles)(AppBar2);