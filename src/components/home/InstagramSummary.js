import React from 'react';
import { Container, makeStyles, ThemeProvider, Typography } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import { v4 as uuidv4 } from 'uuid';
import InstagramCarroussel from './carousel/InstagramCarousel';
import InstagramProfiles from './carousel/InstagramProfiles';
import WavesAnimation from './animation/WavesAnimation';
import THEME from './theme';

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        flexDirection: "column",
        margin: 0
    },
    carousel: {
        paddingTop: 80,
        paddingBottom: 80
    },
    waves: {
        display: "flex",
        margin: 0
    }
}));

function InstagramSummary() {
    let profiles = [
        {
            key: uuidv4(),
            content: <InstagramProfiles.AlgoreProfile />
        },
        {
            key: uuidv4(),
            content: <InstagramProfiles.Cop26Profile />
        },
        {
            key: uuidv4(),
            content: <InstagramProfiles.DavidProfile />
        },
        {
            key: uuidv4(),
            content: <InstagramProfiles.GraceProfile />
        },
        {
            key: uuidv4(),
            content: <InstagramProfiles.GretaProfile />
        },
        {
            key: uuidv4(),
            content: <InstagramProfiles.IpccProfile />
        },
        {
            key: uuidv4(),
            content: <InstagramProfiles.JaneProfile />
        },
        {
            key: uuidv4(),
            content: <InstagramProfiles.NrdcProfile />
        },
        {
            key: uuidv4(),
            content: <InstagramProfiles.SycaProfile />
        },
        {
            key: uuidv4(),
            content: <InstagramProfiles.UnccProfile />
        }
    ];

    const classes = useStyles();

    return (
        <ThemeProvider theme={THEME}>
            <Fade bottom>
                <Container className={classes.container}>
                    <Typography variant="h6" align="left">
                        Follow these environmental activities and organisations!
                    </Typography>
                </Container>
            </Fade>
            <Fade bottom>
                <Container className={classes.carousel}>
                    <InstagramCarroussel cards={profiles} height="200px" width="80%" margin="0 auto" offset={2} showArrows={false} />
                </Container>
            </Fade>
            <WavesAnimation />
        </ThemeProvider>
    );
}

export default InstagramSummary;