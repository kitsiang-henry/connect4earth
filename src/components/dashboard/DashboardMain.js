import React from 'react';
<<<<<<< HEAD
=======
import WebMap from '../webMaps/WebMap';
// import WebMapWithTimeSlider from './webMaps/WebMapWithTimeSlider';
import MiniDrawer from './webMaps/Drawer';
import Box from '@mui/material/Box';
>>>>>>> feature/introjs
import Fab from '@mui/material/Fab';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Button } from '@material-ui/core';
import { Steps } from 'intro.js-react';
import Tooltip from '@mui/material/Tooltip';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        // width: `calc(100% - ${drawerWidth}px)`,
        // marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
        height: "max-content",
        background: "#fad48e",
        borderRadius: 12,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        // width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        top: 74,
        width: drawerWidth,
        position: "absolute"
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 0,

    },
    contentShift: {
        transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    fab: {
      position: 'fixed !important',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      backgroundColor: "#A7F0BA !important",
      color: "#525252"
    },
}));

function DashboardMain() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [dashboard, setDashboard] =  React.useState(1);
    const [stepsEnabled, setStepsEnabled] = React.useState(false);
    const initialStep = 0
    const steps = [
        {
          element: '.C4EBotButton',
          intro: 'Welcome to the C4E Dashboard! Let us show you around.',
          position: 'top'
        },
        {
          element: '.menuButton',
          intro: 'Click here to view the other dashboards. Now close me and start exploring!',
        }
    ];

    const onExit = () => {
        setStepsEnabled(false);
    };
   
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return(
        <div>
            <Steps 
                enabled={stepsEnabled}
                steps={steps}
                initialStep={initialStep}
                onExit={onExit}
            />
            <div className={classes.root}>
                <div class="menuButton">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                        >
                        <ChevronRightIcon />
                    </IconButton>
                </div>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose} style={{background:"#fad48e", borderRadius: 12,}}>
                        <ChevronLeftIcon/>
                    </IconButton>
                    </div>
                    <Divider />

                    <div style={{display:"flex", flexDirection: "column", margin: "0 2%"}}>
                        <Tooltip title="Add" placement="right-start" arrow>
                        <Button onClick={() => {setDashboard(1)}}>Demographic impacted by flood</Button>
                        </Tooltip>
                        <Divider />
                        <Button onClick={() => {setDashboard(2)}}>Business impacted by flood</Button>
                        <Divider />
                        <Button onClick={() => {setDashboard(3)}}>Daily Rainfall Analysis</Button>
                        <Divider />
                    </div>
                </Drawer>
                <main
                    className={clsx(classes.content, {
                    [classes.contentShift]: open,
                    })}
                >
                {dashboard == 1 && <div style={{height: "100%", width: "100%"}}>
                    <iframe style={{width: "90vw", height: "88vh"}} src="https://smt483-connect4.maps.arcgis.com/apps/dashboards/e67bce69da6749c39adc415b08b37b3a" />
                </div>}
                {dashboard == 2 && <div style={{height: "100%", width: "100%"}}>
                    <iframe style={{width: "90vw", height: "88vh"}} src="https://smt483-connect4.maps.arcgis.com/apps/dashboards/c58f44741867421bb0b3e9097e7fd34e" />
                </div>}
                {dashboard == 3 && <div style={{height: "100%", width: "100%"}}>
                    <iframe style={{width: "90vw", height: "88vh"}} src="https://smt483-connect4.maps.arcgis.com/apps/dashboards/9bd2d39d2e1f47cfbd23ba32616d39b0" />
                </div>}
                    
                </main>
            </div>
            <div className="C4EBotButton">
                <Fab className={classes.fab} onClick={() => {setStepsEnabled(true)}} >
                    <LiveHelpIcon />
                </Fab>
            </div>
        </div>
    )
}

export default withStyles(useStyles)(DashboardMain);