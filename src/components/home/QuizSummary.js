import React from 'react';
import { Button, Card, CardContent, Typography, Box, Link, Container, ThemeProvider, makeStyles } from '@material-ui/core';
import THEME from './theme';
import { ChevronRightRounded } from '@material-ui/icons';
import Fade from 'react-reveal/Fade';
import { Steps, Hints } from "intro.js-react";
import 'intro.js/introjs.css';
import marketImg from '../../assets/market.jpg';

const useStyles = makeStyles(() => ({
    box: {
        height: 100,
        display: "flex",
        border: "1 px solid black"
    },
    topLeftBox: {
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    semiContainer: {
        display: "flex",
        flexDirection: "column",
        margin: 0,
        paddingLeft: 0
    },
    container: {
        display: "flex",
        flexDirection: "row",
        margin: 0,
        paddingBottom: 120
    },
    img: {
        height: "565px"
    },
    button: {
        background: "linear-gradient(45deg, #56e87c 30%, #A7F0BA 75%)",
        border: 0,
        borderRadius: 3
    }
}));

const QuizSummary = () => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={THEME}>
            <Container className={classes.container} maxWidth="xl">
                <Fade left>
                    <Container className={classes.semiContainer}>
                        <Typography variant="h5" align="left" style={{ paddingBottom: 15 }}>
                            <strong>Personalised Sustainability Quiz</strong>
                        </Typography>
                        <Typography variant="body1" align="left" style={{ paddingBottom: 35 }}>
                            Test your understanding of your lifestyle's contribution to climate data.
                        </Typography>
                        <Box component="span" className={`${classes.box} ${classes.topLeftBox}`}>
                            <Link to="/quiz">
                                <Button variant="text" style={{color:"black"}} className={classes.button}>
                                    Take the quiz here <ChevronRightRounded />
                                </Button>
                            </Link>
                        </Box>
                    </Container>
                </Fade>
                <Fade right>
                    <img src={marketImg} className={classes.img} />
                </Fade>
            </Container>
        </ThemeProvider>
    );
}

export default QuizSummary;