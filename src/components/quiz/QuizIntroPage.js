import React from 'react';
import { Container, makeStyles, ThemeProvider } from '@material-ui/core';
import QuizWelcome from './components/QuizWelcome';
import THEME from '../home/theme';

const useStyles = makeStyles(() => ({
    container: {
        height: "98vh"
    }
}));

const QuizIntroPage = () => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={THEME}>
            <div className={classes.container}>
                <QuizWelcome />
            </div>
        </ThemeProvider>
    );
}

export default QuizIntroPage;