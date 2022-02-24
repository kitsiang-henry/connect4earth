import React, { useEffect } from 'react';
import Fab from '@mui/material/Fab';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import { Steps } from 'intro.js-react';
import demo1 from "../../assets/demographic-video/1-demographic-map.mp4"
import demo2 from "../../assets/demographic-video/2-demographic-legend.mp4"
import demo3 from "../../assets/demographic-video/3-demographic-barchart.mp4"
import demo4 from "../../assets/demographic-video/4-demographic-piechart.mp4"

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
    }
}));

function DemographicDashboard() {
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
            element: '.C4EBotButton',
            intro:
            <>
            <p>Explore how you can manoeuvre around the web map, map layers can be seen and unseen.</p>
            <iframe className={classes.tutorialVid} src="https://player.vimeo.com/video/646330357" width="640" height="564" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
            </>
        },
        {
            element: '.C4EBotButton',
            intro:
            <>
            <p>The legend describes the data currently shown on the web map.</p>
            <iframe className={classes.tutorialVid} src="https://player.vimeo.com/video/646332636" width="640" height="564" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
            </>
        },
        {
            element: '.C4EBotButton',
            intro:
            <>
            <p>The bar chart shows the total population in the subzones impacted by the flood events, sorted in descending order. You can also click on the bars to see the corresponding area on the map.</p>
            <iframe className={classes.tutorialVid} src="https://player.vimeo.com/video/646332666" width="640" height="564" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
            </>
        },
        {
            element: '.C4EBotButton',
            intro:
            <>
            <p>The subzone selector on the top right corner will filter the age group and dwellings data accordingly. It also highlights the selected subzone area on both maps!</p>
            <iframe className={classes.tutorialVid} src="https://player.vimeo.com/video/646332707" width="640" height="564" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
            </>
        }
    ];

    // const e = window.frames.document.getElementsByTagName("iframe")[0].contentWindow.document
    // console.log(e);

    const onExit = () => {
        setStepsEnabled(false);
    };

    return(
        <div>
            <Steps 
                enabled={stepsEnabled}
                steps={steps}
                initialStep={initialStep}
                onExit={onExit}
            />
            <iframe id="demoIframe" style={{width: "98vw", height: "88vh", border: "none"}} src="https://smt483-connect4.maps.arcgis.com/apps/dashboards/e67bce69da6749c39adc415b08b37b3a" />
            <div className="C4EBotButton">
                <Fab className={classes.fab} onClick={() => {setStepsEnabled(true)}} >
                    <LiveHelpIcon />
                </Fab>
            </div>
        </div>
    )
}

export default withStyles(useStyles)(DemographicDashboard);