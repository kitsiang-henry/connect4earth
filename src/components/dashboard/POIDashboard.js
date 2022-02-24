import React from 'react';
import Fab from '@mui/material/Fab';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import { Steps } from 'intro.js-react';
import poi1 from '../../assets/poibusiness-video/1-poibusiness-map.mp4';
import poi2 from '../../assets/poibusiness-video/2-poibusiness-legend.mp4';
import poi3 from '../../assets/poibusiness-video/3-poibusiness-barchart.mp4';
import poi4 from '../../assets/poibusiness-video/4-poibusiness-chartselector.mp4';

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

function POIDashboard() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
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
            <p>Explore how you can manoeuvre around the web map, map layers can be seen and unseen.</p>
            <iframe className={classes.tutorialVid} src="https://player.vimeo.com/video/646333067" width="640" height="564" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
            </>
        },
        {
            element: '.C4EBotButton',
            intro:
            <>
            <p>The legend describes the data currently shown on the web map.</p>
            <iframe className={classes.tutorialVid} src="https://player.vimeo.com/video/646333092" width="640" height="564" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
            </>
        },
        {
            element: '.C4EBotButton',
            intro:
            <>
            <p>The horizontal bar chart shows the most affected points-of-interest by the flood events. You can click on the bars to filter the points on the map and click the points to see the details.</p>
            <iframe className={classes.tutorialVid} src="https://player.vimeo.com/video/646333123" width="640" height="564" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
            </>
        },
        {
            element: '.C4EBotButton',
            intro:
            <>
            <p>"The bar chart shows the points-of-interest available in the subzones selected. If none is selected, it will collate all points-of-interest for all the subzones.</p>
            <br/>
            <p>The bar chart also filters the data based on the points-of-interest category selected."</p>
            <iframe className={classes.tutorialVid} src="https://player.vimeo.com/video/646333162" width="640" height="564" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
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
            <iframe style={{width: "98vw", height: "88vh", border: "none"}} src="https://smt483-connect4.maps.arcgis.com/apps/dashboards/c58f44741867421bb0b3e9097e7fd34e" />
            <div className="C4EBotButton">
                <Fab className={classes.fab} onClick={() => {setStepsEnabled(true)}} >
                    <LiveHelpIcon />
                </Fab>
            </div>
        </div>
    )
}

export default withStyles(useStyles)(POIDashboard);