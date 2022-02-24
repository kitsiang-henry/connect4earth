import { Container, makeStyles, ThemeProvider, Typography } from '@material-ui/core';
import React from 'react';
import THEME from './theme';
import BackgroundSlideshow from './animation/BackgroundSlideshow';

const useStyles = makeStyles(() => ({
    container: {
        color: "white",
        display: "flex",
        flexDirection: "column",
        paddingTop: 260,
        paddingBottom: 200,
        margin: 0,
        height: "100vh",
        zIndex: 99
    }
}));

function Introduction() {
    const classes = useStyles();

    return(
        <ThemeProvider theme={THEME}>
            <Container className={classes.container} maxWidth="xl">
                <Typography variant="h3" align="left" style={{ paddingBottom: 35 }}>
                    Climate change. Data-driven. Sustainability.
                </Typography>
                <Typography variant="h6" align="left">
                    Connect4Earth wants to empower you with up-to-date climate data & analysis so that
                    you can contribute your efforts in climate change adaptation and mitigation.
                </Typography>
                <BackgroundSlideshow />
            </Container>
        </ThemeProvider>
    );
}

export default Introduction;