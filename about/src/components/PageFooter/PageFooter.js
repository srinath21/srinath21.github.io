import { Button, Container, Grid, Link, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import "./PageFooter.css"

const PageFooter = (props) => {

    const [state, setState] = useState({
        mobileView: false,
    });

    const { mobileView } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900 ? setState((prevState) => ({ ...prevState, mobileView: true })) :
                setState((prevState) => ({ ...prevState, mobileView: false }))
        }

        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        }
    }, []);

    return (
        <div className="footer">
            <Container component='section' m={2}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={12} sm={12} lg={12} style={{ margin: "3%" }}>
                        <Typography component="h4" variant="h3" style={{ textAlign: "center", color: "#ccc" }}>
                            Contact Me
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12} sm={12} lg={12} style={{ textAlign: "center", marginBottom: "5%" }} >
                        <Grid container spacing={4}>
                            {props.isMobile ?
                                <Grid item xs={12}>
                                    <Button variant="outlined" onClick={props.clicked} style={{ color: "#5da2d5" }}>
                                        <EmailRoundedIcon fontSize="large" className="iconSize" />
                                        <Typography variant="h4" component="h6" className="label">Mail</Typography>
                                    </Button>
                                </Grid>
                                : null
                            }
                            <Grid item xs={12} sm={6}>
                                <Button variant="outlined" className="customButton">
                                    <Link href="https://www.linkedin.com/in/srinath-r-a0304512a/" style={{ margin: "2%", color: "#5da2d5", minWidth: "100%" }}>
                                        <LinkedInIcon fontSize="large" className="iconSize" />
                                        <Typography variant="h4" component="h6" className="label">LinkedIn</Typography>
                                    </Link>
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button variant="outlined">
                                    <Link href="https://t.me/Srinath21" style={{ margin: "2%", color: "#5da2d5", minWidth: "100%" }}>
                                        <Typography variant="h4" component="h6" className="label">Telegram</Typography>
                                        <TelegramIcon fontSize="large" className="iconSize" />
                                    </Link>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div >
    )
}

export default PageFooter;