import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import { AboutImgs } from '../../assets';

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        flexDirection: "column",
        paddingTop: 150
    },
    semiContainer: {
        display: "flex",
        flexDirection: "row",
        left: 0,
        paddingTop: 35,
        paddingBottom: 100
    },
    card: {
        display: "flex",
        flexDirection: "column"
    },
    img: {
        height: "230px",
        paddingBottom: 15
    }
}));

function SCComponents() {
    const classes = useStyles();

    return(
        <Container className={classes.container}>
            <Typography variant="h6" align="center">
                With Connect4Earth, we hope to
            </Typography>
            <Container className={classes.semiContainer}>
                <Container className={classes.card}>
                    <img src={AboutImgs.dataAvailable} className={classes.img} />
                    <Typography variant="body1" align="center">
                        Make climate change data available
                    </Typography>
                </Container>
                <Container className={classes.card}>
                    <img src={AboutImgs.thinkScientifically} className={classes.img} />
                    <Typography variant="body1" align="center">
                        Allow user to think more scientifically
                    </Typography>
                </Container>
                <Container className={classes.card}>
                    <img src={AboutImgs.dataSharing} className={classes.img} />
                    <Typography variant="body1" align="center">
                        Allow data holders to share data
                    </Typography>
                </Container>
                <Container className={classes.card}>
                    <img src={AboutImgs.dataConnectivity} className={classes.img} />
                    <Typography variant="body1" align="center">
                        Be the one-stop platform for everything about climate change
                    </Typography>
                </Container>
            </Container>
        </Container>
    );
}

export default SCComponents;