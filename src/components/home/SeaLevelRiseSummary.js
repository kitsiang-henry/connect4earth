import React from 'react';
import { Container, makeStyles, ThemeProvider, Typography } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import seaLevelRiseGif from '../../assets/sea_level_rise_gif_v2.gif';
import THEME from './theme';

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        flexDirection: "row",
        margin: 0,
        paddingLeft: 0,
        paddingBottom: 120
    },
    semiContainer: {
        display: "flex",
        flexDirection: "column",
        margin: 0
    },
    gif: {
        width: "1100px"
    }
}));

function SeaLevelRiseSummary() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={THEME}>
            <Container className={classes.container} maxWidth={false}>
                <Fade left>
                    <Container className={classes.semiContainer}>
                        <Typography variant="h5" align="left" style={{ paddingBottom: 15 }}>
                            <strong>Climate Change in Singapore</strong>
                        </Typography>
                        <Typography variant="body1" align="left">
                            Do you know that presently, about 40% of the world's population lives within 100 kilometers of the coast. In Singapore, we are not spared from the impact of rising sea level. Worst, if the Greenland ice sheet melts completely, the sea level will rise by 5-7 meters.
                            <br /> <br />
                        </Typography>
                        <Typography variant="body1" align="left" style={{ color: "#71abd1" }}>
                            Have a look at our sea level rise simulation on your right.
                        </Typography>
                    </Container>
                </Fade>
                <Fade right>
                    <img src={seaLevelRiseGif} className={classes.gif} />
                </Fade>
            </Container>
        </ThemeProvider>
    );
}

export default SeaLevelRiseSummary;