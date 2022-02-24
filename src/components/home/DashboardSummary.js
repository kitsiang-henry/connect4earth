import React from 'react';
import DashboardCarroussel from './carousel/DashboardCarousel';
import { v4 as uuidv4 } from 'uuid';
import DashboardCards from './carousel/DashboardCards';
import { Container, makeStyles, ThemeProvider, Typography } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import THEME from './theme';

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        margin: 0
    },
    carousel: {
        paddingBottom: 120
    }
}));

const RainfallCard = DashboardCards.RainfallCard;
const DemographicsCard = DashboardCards.DemographicsCard;
const BusinessCard = DashboardCards.BusinessCard;

function DashboardSummary() {
    let cards = [
        {
            key: uuidv4(),
            content: <RainfallCard />
        },
        {
            key: uuidv4(),
            content: <DemographicsCard />
        },
        {
            key: uuidv4(),
            content: <BusinessCard />
        }
    ];

    const classes = useStyles();

    return (
        <ThemeProvider theme={THEME}>
            <Fade bottom>
                <Container className={classes.container}>
                    <Typography variant="h5" align="left" style={{ paddingBottom: 15 }}>
                        <strong>Climate Dashboards</strong>
                    </Typography>
                    <Typography variant="body1" align="left" style={{ paddingBottom: 30 }}>
                        Check out our growing collection of climate data dashboards & analysis on flooding in Singapore.
                    </Typography>
                </Container>
            </Fade>
            <Fade bottom>
                <Container className={classes.carousel}>
                    <DashboardCarroussel cards={cards} height="500px" width="90%" margin="0 auto" offset={2} showArrows={false} />
                </Container>
            </Fade>
        </ThemeProvider>
    );
}

export default DashboardSummary;