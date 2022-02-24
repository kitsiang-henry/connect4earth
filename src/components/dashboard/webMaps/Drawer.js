import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Button } from '@material-ui/core';
import { Steps, Hints } from 'intro.js-react';
import introJs from 'intro.js';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
        height: "max-content"
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
}));

export default function MiniDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [dashboard, setDashboard] =  React.useState(1);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>

        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
            >
            <ChevronRightIcon />
        </IconButton>
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
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
            </div>
            <Divider />

            <div style={{display:"flex", flexDirection: "column", margin: "0 2%"}}>
                <Button onClick={() => {setDashboard(1)}}>Demographic impacted by flood</Button>
                <Button onClick={() => {setDashboard(2)}}>Business impacted by flood</Button>
                <Button onClick={() => {setDashboard(3)}}>Daily Rainfall Analysis</Button>
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
    );
    }
