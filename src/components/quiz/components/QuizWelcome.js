import React from 'react';
import { Button, Container, makeStyles, ThemeProvider, Typography } from '@material-ui/core';
import { ChevronRightRounded } from '@material-ui/icons';
import THEME from '../../home/theme';
import { QuizBackgroundImg } from '../../../assets';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    container: {
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingTop: 230,
        zIndex: 99,
        [theme.breakpoints.up('lg')]: {
            maxWidth: "1480px"
        }
    },
    background: {
        position: "absolute",
        display: "flex",
        backgroundImage: `url(${QuizBackgroundImg.quizImg1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "98%",
        left: 0,
        [theme.breakpoints.up('lg')]: {
            maxWidth: "1520px"
        }
    },
    header: {
        margin: 0,
        color: "black",
        paddingBottom: 30
    },
    subtitle: {
        color: "black",
        paddingBottom: 50
    },
    button: {
        background: "linear-gradient(45deg, #A7F0BA 30%, #56e87c 90%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2 px rgba(255, 105, 135, 0.3)"
    }
}));

function QuizWelcome() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={THEME}>
            <Container className={classes.container}>
                <Typography variant="h2" align="right" className={classes.header}>
                    Welcome To <br /> My Sustainability Journey!
                </Typography>
                <Typography variant="h6" align="right" className={classes.subtitle}>
                    Connect4Earth aims to help you in finding out your sustainability profile <br /> through our quiz!
                </Typography>
                    <Button variant="contained" className={classes.button}>
                        <Link to="/quiz" style={{textDecoration: "none", display: "flex", color: "black"}}>
                            Take the quiz <ChevronRightRounded />
                        </Link>
                    </Button>
            </Container>
            <Container className={classes.background}></Container>
        </ThemeProvider>
    );
}

export default QuizWelcome;