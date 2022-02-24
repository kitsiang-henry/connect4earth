import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import QuizWelcome from './QuizWelcome';

const useStyles = makeStyles(() => ({
    container: {
        height: "95vh"
    }
}));

const QuizIntroduction = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <QuizWelcome />
        </Container>
    );
}

export default QuizIntroduction;