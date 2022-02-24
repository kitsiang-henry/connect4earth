import React from 'react';
import cx from 'clsx';
import { Button, Card, CardMedia, CardContent, Container, Link, makeStyles, ThemeProvider } from '@material-ui/core';
// import { ChevronRightRounded } from '@material-ui/icons';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';
import THEME from '../theme';
import { DashboardImgs } from '../../../assets';

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 800,
        width: 500,
        margin: 'auto',
        boxShadow: 'none',
        borderRadius: 30,
        borderStyle: "groove"
    },
    content: {
        padding: 25,
    },
    cta: {
        marginTop: 15,
        textTransform: 'initial'
    }
}));

const DashboardCards = {
    RainfallCard() {
        const styles = useStyles();
        const mediaStyles = useWideCardMediaStyles();
        const shadowStyles = useBouncyShadowStyles();
    
        return (
            <ThemeProvider theme={THEME}>
                <Card className={cx(styles.root, shadowStyles.root)}>
                    <CardMedia classes={mediaStyles} image={DashboardImgs.dailyRainfall} />
                    <CardContent className={styles.content}>
                        <TextInfoContent heading={"Daily Rainfall Pattern"} />
                    </CardContent>
                    <Button variant="text" color={"primary"} fullWidth className={styles.cta}>
                        <Link to="/dashboard-rainfall">FIND OUT MORE</Link>
                    </Button>
                </Card>
            </ThemeProvider>
        );
    },
    DemographicsCard() {
        const styles = useStyles();
        const mediaStyles = useWideCardMediaStyles();
        const shadowStyles = useBouncyShadowStyles();
    
        return (
            <ThemeProvider theme={THEME}>
                <Card className={cx(styles.root, shadowStyles.root)}>
                    <CardMedia classes={mediaStyles} image={DashboardImgs.demographicFloodProneAreas} />
                    <CardContent className={styles.content}>
                        <TextInfoContent heading={"Demographics Impact Assessment"} />
                    </CardContent>
                    <Link to="/dashboard-demographic">
                        <Button variant="text" color={"primary"} fullWidth className={styles.cta}>
                            FIND OUT MORE
                        </Button>
                    </Link>
                </Card>
            </ThemeProvider>
        );
    },
    BusinessCard() {
        const styles = useStyles();
        const mediaStyles = useWideCardMediaStyles();
        const shadowStyles = useBouncyShadowStyles();
    
        return (
            <ThemeProvider theme={THEME}>
                <Card className={cx(styles.root, shadowStyles.root)}>
                    <CardMedia classes={mediaStyles} image={DashboardImgs.poiBusinessFloodHotspots} />
                    <CardContent className={styles.content}>
                        <TextInfoContent heading={"Point-of-Interest/Business Impact"} />
                    </CardContent>
                    <Button variant="text" color={"primary"} fullWidth className={styles.cta}>
                        <Link to="/dashboard-poi">FIND OUT MORE</Link>
                    </Button>
                </Card>
            </ThemeProvider>
        );
    }
}

export default DashboardCards;
