import React, { setState } from 'react';
import { Box, Button, Card, CardMedia, CardContent, Container, Link, makeStyles, Typography, ThemeProvider } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import THEME from '../theme';
import { InstagramImgs, InstagramLinks } from '../../../assets';

const useStyles = makeStyles({
    profile: {
        height: "200px",
        width: "80%",
        margin: "0 auto",
    },
    box: {
        marginBottom: 50,
        marginTop: -15
    }
});

const InstagramProfiles = {
    AlgoreProfile() {
        const classes = useStyles();
        return (
            <div>
                <ThemeProvider theme={THEME}>
                    <img src={InstagramImgs.algoreImg} className={classes.profile} />
                    <Link href={InstagramLinks.algoreLink} target="_blank">                    
                        <Button variant="text" color={"primary"} className={classes.box}>
                            @algore
                        </Button>
                    </Link>
                </ThemeProvider>
            </div>
        );
    },
    Cop26Profile() {
        const classes = useStyles();
        return (
            <div>
                <ThemeProvider theme={THEME}>
                    <img src={InstagramImgs.cop26Img} className={classes.profile} />
                    <Link href={InstagramLinks.cop26Link} target="_blank">                    
                        <Button variant="text" color={"primary"} className={classes.box}>
                            @cop26uk
                        </Button>
                    </Link>
                </ThemeProvider>
            </div>
        );
    },
    DavidProfile() {
        const classes = useStyles();
        return (
            <div>
                <ThemeProvider theme={THEME}>
                    <img src={InstagramImgs.davidImg} className={classes.profile} />
                    <Link href={InstagramLinks.davidLink} target="_blank">                    
                        <Button variant="text" color={"primary"} className={classes.box}>
                            @davidattenborough
                        </Button>
                    </Link>
                </ThemeProvider>
            </div>
        );
    },
    GraceProfile() {
        const classes = useStyles();
        return (
            <div>
                <ThemeProvider theme={THEME}>
                    <img src={InstagramImgs.graceImg} className={classes.profile} />
                    <Link href={InstagramLinks.graceLink} target="_blank">                    
                        <Button variant="text" color={"primary"} className={classes.box}>
                            @gracefu.hy
                        </Button>
                    </Link>
                </ThemeProvider>
            </div>
        );
    },
    GretaProfile() {
        const classes = useStyles();
        return (
            <div>
                <ThemeProvider theme={THEME}>
                    <img src={InstagramImgs.gretaImg} className={classes.profile} />
                    <Link href={InstagramLinks.gretaLink} target="_blank">                    
                        <Button variant="text" color={"primary"} className={classes.box}>
                            @gretathunberg
                        </Button>
                    </Link>
                </ThemeProvider>
            </div>
        );
    },
    IpccProfile() {
        const classes = useStyles();
        return (
            <div>
                <ThemeProvider theme={THEME}>
                    <img src={InstagramImgs.ipccImg} className={classes.profile} />
                    <Link href={InstagramLinks.ipccLink} target="_blank">                    
                        <Button variant="text" color={"primary"} className={classes.box}>
                            @ipcc
                        </Button>
                    </Link>
                </ThemeProvider>
            </div>
        );
    },
    JaneProfile() {
        const classes = useStyles();
        return (
            <div>
                <ThemeProvider theme={THEME}>
                    <img src={InstagramImgs.janeImg} className={classes.profile} />
                    <Link href={InstagramLinks.janeLink} target="_blank">                    
                        <Button variant="text" color={"primary"} className={classes.box}>
                            @janegoodallinst
                        </Button>
                    </Link>
                </ThemeProvider>
            </div>
        );
    },
    NrdcProfile() {
        const classes = useStyles();
        return (
            <div>
                <ThemeProvider theme={THEME}>
                    <img src={InstagramImgs.nrdcImg} className={classes.profile} />
                    <Link href={InstagramLinks.nrdcLink} target="_blank">                    
                        <Button variant="text" color={"primary"} className={classes.box}>
                            @nrdc_org
                        </Button>
                    </Link>
                </ThemeProvider>
            </div>
        );
    },
    SycaProfile() {
        const classes = useStyles();
        return (
            <div>
                <ThemeProvider theme={THEME}>
                    <img src={InstagramImgs.sycaImg} className={classes.profile} />
                    <Link href={InstagramLinks.sycaLink} target="_blank">                    
                        <Button variant="text" color={"primary"} className={classes.box}>
                            @syclimateaction
                        </Button>
                    </Link>
                </ThemeProvider>
            </div>
        );
    },
    UnccProfile() {
        const classes = useStyles();
        return (
            <div>
                <ThemeProvider theme={THEME}>
                    <img src={InstagramImgs.unccImg} className={classes.profile} />
                    <Link href={InstagramLinks.unccLink} target="_blank">                    
                        <Button variant="text" color={"primary"} className={classes.box}>
                            @unclimatechange
                        </Button>
                    </Link>
                </ThemeProvider>
            </div>
        );
    }
};

export default InstagramProfiles;

/* const InstagramProfiles = {
    AlgoreProfile() {
        const classes = useStyles();
        function handleClick(e) {
            e.preventDefault();
        }

        return (
            <ThemeProvider theme={THEME}>
                <IconButton onClick={handleClick}>
                    <Link href={InstagramLinks.algoreLink} target="_blank">
                        <img src={InstagramImgs.algoreImg} className={classes.profile} />
                    </Link>
                </IconButton>
            </ThemeProvider>
        );
    },
    Cop26Profile() {
        const classes = useStyles();
        function handleClick(e) {
            e.preventDefault();
        }

        return (
            <ThemeProvider theme={THEME}>
                <IconButton onClick={handleClick}>
                    <Link href={InstagramLinks.cop26Link} target="_blank">
                        <img src={InstagramImgs.cop26Img} className={classes.profile} />
                    </Link>
                </IconButton>
            </ThemeProvider>
        );
    },
    DavidProfile() {
        const classes = useStyles();
        function handleClick(e) {
            e.preventDefault();
        }

        return (
            <ThemeProvider theme={THEME}>
                <IconButton onClick={handleClick}>
                    <Link href={InstagramLinks.davidLink} target="_blank">
                        <img src={InstagramImgs.davidImg} className={classes.profile} />
                    </Link>
                </IconButton>
            </ThemeProvider>
        );
    },
    GraceProfile() {
        const classes = useStyles();
        return (
            <ThemeProvider theme={THEME}>
                <IconButton>
                    <Link href={InstagramLinks.graceLink} target="_blank">
                        <img src={InstagramImgs.graceImg} className={classes.profile} />
                    </Link>
                </IconButton>
            </ThemeProvider>
        );
    },
    GretaProfile() {
        const classes = useStyles();
        return (
            <ThemeProvider theme={THEME}>
                <IconButton>
                    <Link href={InstagramLinks.gretaLink} target="_blank">
                        <img src={InstagramImgs.gretaImg} className={classes.profile} />
                    </Link>
                </IconButton>
            </ThemeProvider>
        );
    },
    IpccProfile() {
        const classes = useStyles();
        return (
            <ThemeProvider theme={THEME}>
                <IconButton>
                    <Link href={InstagramLinks.ipccLink} target="_blank">
                        <img src={InstagramImgs.ipccImg} className={classes.profile} />
                    </Link>
                </IconButton>
            </ThemeProvider>
        );
    },
    JaneProfile() {
        const classes = useStyles();
        return (
            <ThemeProvider theme={THEME}>
                <IconButton>
                    <Link href={InstagramLinks.janeLink} target="_blank">
                        <img src={InstagramImgs.janeImg} className={classes.profile} />
                    </Link>
                </IconButton>
            </ThemeProvider>
        );
    },
    NrdcProfile() {
        const classes = useStyles();
        return (
            <ThemeProvider theme={THEME}>
                <IconButton>
                    <Link href={InstagramLinks.nrdcLink} target="_blank">
                        <img src={InstagramImgs.nrdcImg} className={classes.profile} />
                    </Link>
                </IconButton>
            </ThemeProvider>
        );
    },
    SycaProfile() {
        const classes = useStyles();
        return (
            <ThemeProvider theme={THEME}>
                <IconButton>
                    <Link href={InstagramLinks.sycaLink} target="_blank">
                        <img src={InstagramImgs.sycaImg} className={classes.profile} />
                    </Link>
                </IconButton>
            </ThemeProvider>
        );
    },
    UnccProfile() {
        const classes = useStyles();
        return (
            <ThemeProvider theme={THEME}>
                <IconButton>
                    <Link href={InstagramLinks.unccLink} target="_blank">
                        <img src={InstagramImgs.unccImg} className={classes.profile} />
                    </Link>
                </IconButton>
            </ThemeProvider>
        );
    }
} */

/* const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        paritialVisibilityGutter: 60
    }
};

const Simple = ({ deviceType }) => {
    const classes = useStyles();

    return (
        <Carousel ssr partialVisbile deviceType={deviceType} itemClass="image-item" responsive={responsive}>
            <ThemeProvider theme={THEME}>
                {InstagramLists.map(element => {
                    return (
                        <IconButton>
                            <Link href={element[1]} target="_blank">
                                <img src={element[0]} className={classes.profile} />
                            </Link>
                        </IconButton>
                    )
                })};
            </ThemeProvider>
        </Carousel>
    );
}

export default Simple; */