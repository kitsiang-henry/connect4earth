import React from 'react';
import { Container, makeStyles, ThemeProvider } from '@material-ui/core';
import THEME from '../home/theme';
import AboutIntroduction from './AboutIntroduction';
import DataSource from './DataSource';
import SCComponents from './SCComponents';

const useStyles = makeStyles(() => ({
    container: {
        height: "600px"
    }
}));

function AboutMain() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={THEME}>
            <div className={classes.container}>
                <AboutIntroduction />
            </div>
            <div>
                <SCComponents />
            </div>
            <div>
                <DataSource />
            </div>
        </ThemeProvider>
    );
}

export default AboutMain;