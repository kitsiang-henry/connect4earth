import React from 'react';
import Wave from 'react-wavify';
import { Container, makeStyles, ThemeProvider } from '@material-ui/core';
import THEME from '../theme';

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        margin: -25
    },
    wave: {
        opacity: 10,
        zIndex: 99
    }
}));

function WavesAnimation() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={THEME}>
            <Container className={classes.container} maxWidth={false}>
                <Wave fill="url(#gradient)" options={{ height: 15, amplitude: 20, speed: 0.2 }} style={{ position: "absolute" }}>
                    <defs>
                        <linearGradient id="gradient" gradientTransform="rotate(90)">
                            <stop offset="10%" stopColor="#87CEEB" />
                            <stop offset="90%" stopColor="#0F52BA" />
                        </linearGradient>
                    </defs>
                </Wave>
                <Wave fill="url(#gradient2)" options={{ height: 30, amplitude: 35, speed: 0.3 }} style={{ position: "absolute" }}>
                    <defs>
                        <linearGradient id="gradient2" gradientTransform="rotate(90)">
                            <stop offset="10%" stopColor="#0F52BA" />
                            <stop offset="90%" stopColor="#87CEEB" />
                        </linearGradient>
                    </defs>
                </Wave>
                <Wave fill="url(#gradient3)" options={{ height: 50, amplitude: 50, speed: 0.15 }} style={{ position: "absolute" }}>
                    <defs>
                        <linearGradient id="gradient3" gradientTransform="rotate(90)">
                            <stop offset="10%" stopColor="#A7C7E7" />
                            <stop offset="90%" stopColor="#87CEEB" />
                        </linearGradient>
                    </defs>
                </Wave>
            </Container>
        </ThemeProvider>
    );
}

export default WavesAnimation;