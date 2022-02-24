import React from 'react';
import { Container, makeStyles, Typography, ThemeProvider } from "@material-ui/core";
import THEME from '../home/theme';
import { AboutImgs } from '../../assets';
import BackgroundSlideshow from '../home/animation/BackgroundSlideshow';

const useStyles = makeStyles(() => ({
    container: {
        color: "black",
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        paddingTop: 260,
        paddingBottom: 200,
        margin: 0,
        height: "100vh",
        zIndex: 99
    },
    background: {
        position: "absolute",
        display: "flex",
        backgroundImage: `url(${AboutImgs.treesImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "90%"
    }
}));

function AboutIntroduction() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={THEME}>
            <Container className={classes.container} maxWidth="xl">
                <Typography variant="h3" align="left" style={{ paddingBottom: 35 }}>
                    <strong>About Team Connect4Earth</strong>
                </Typography>
                <Typography variant="h6" align="left">
                    <strong>Aspiring Smart-city Management & Technology students from Singapore Management University.
                    <br />
                    We are passionate about using technology for public good.</strong>
                </Typography>
                {/* <BackgroundSlideshow /> */}
            </Container>
            <Container className={classes.background} maxWidth={false}></Container>
        </ThemeProvider>
    );
}

export default AboutIntroduction;