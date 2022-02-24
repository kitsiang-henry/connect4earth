import React from 'react';
import Fab from '@mui/material/Fab';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import { Steps } from 'intro.js-react';

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
}));

function SeaLevelDashboard() {
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
            <iframe style={{width: "98vw", height: "88vh", border: "none"}} src="https://smt483-connect4.maps.arcgis.com/apps/dashboards/e67bce69da6749c39adc415b08b37b3a" />
            <div className="C4EBotButton">
                <Fab className={classes.fab} onClick={() => {setStepsEnabled(true)}} >
                    <LiveHelpIcon />
                </Fab>
            </div>
        </div>
    )
}

export default withStyles(useStyles)(SeaLevelDashboard);