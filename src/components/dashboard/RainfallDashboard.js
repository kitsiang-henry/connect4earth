import React from 'react';
import Fab from '@mui/material/Fab';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import { Steps } from 'intro.js-react';
import rainfall1 from '../../assets/rainfall-video/1-rainfall-helpline.mp4';
import rainfall2 from '../../assets/rainfall-video/2-rainfall-map.mp4';
import rainfall3 from '../../assets/rainfall-video/3-rainfall-legend.mp4';
import rainfall4 from '../../assets/rainfall-video/4-rainfall-selector.mp4';
import rainfall5 from '../../assets/rainfall-video/5-rainfall-selector.mp4';

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
      left: theme.spacing(2),
      backgroundColor: "#A7F0BA !important",
      color: "#525252"
    },
    tutorialVid: {
        height: 200,
        width: 250
    },
}));

function RainfallDashboard() {
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
        },
        {
            element: '.C4EBotButton',
            intro:
            <>
            <p>Flood helplines is provided in the sidepanel for people affected by flood events.</p>
            <iframe className={classes.tutorialVid} src="https://player.vimeo.com/video/646333482" width="640" height="564" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
            </>
        },
        {
            element: '.C4EBotButton',
            intro:
            <>
            <p>Explore how you can manoeuvre around the web map, map layers can be seen and unseen.</p>
            <iframe className={classes.tutorialVid} src="https://player.vimeo.com/video/646333516" width="640" height="564" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
            </>
        },
        {
            element: '.C4EBotButton',
            intro:
            <>
            <p>"The legend describes the data currently shown on the web map.</p>
            <br/>
            <p>The higher the rainfall data, the more blue the data point will appear. In the legend, it is shown that white points indicate 0 mm of rainfall and the maximum rainfall is around 190 mm."</p>
            <iframe className={classes.tutorialVid} src="https://player.vimeo.com/video/646333544" width="640" height="564" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
            </>
        },
        {
            element: '.C4EBotButton',
            intro:
            <>
            <p>"Weather stations are located all around Singapore and are equpped with rainfall, temperature, humidity, surface wind and air pressure sensors.</p>
            <br/>
            <p>Weather stations can be filtered using the selector and the charts and map will change accordingly. "</p>
            <iframe className={classes.tutorialVid} src="https://player.vimeo.com/video/646333588" width="640" height="564" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
            </>
        },
        {
            element: '.C4EBotButton',
            intro:
            <>
            <p>The daily rainfall map can be filtered using the date selector on the top right corner. Changing the date will also filter out the two bar charts available showing the sum and maximum daily rainfall in the date range selected.</p>
            <iframe className={classes.tutorialVid} src="https://player.vimeo.com/video/646333634" width="640" height="564" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
            </>
        },
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
            <div style={{height: "100%", width: "100%"}}>
                <iframe style={{width: "98vw", height: "88vh", border: "none"}} src="https://smt483-connect4.maps.arcgis.com/apps/dashboards/9bd2d39d2e1f47cfbd23ba32616d39b0" />
            </div>
            <div className="C4EBotButton">
                <Fab className={classes.fab} onClick={() => {setStepsEnabled(true)}} >
                    <LiveHelpIcon />
                </Fab>
            </div>
        </div>
    )
}

export default withStyles(useStyles)(RainfallDashboard);