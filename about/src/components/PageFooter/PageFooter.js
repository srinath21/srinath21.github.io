import { Button, Container, Grid, Link, Typography } from '@material-ui/core';
import React from 'react';
import { withStyles } from '@material-ui/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import "./PageFooter.css"


const ColorButton = withStyles((theme) => ({
    root: {
        color: "#2d4159",
        backgroundColor: "#68c3a3",
        '&:hover': {
            backgroundColor: "#edeae5",
        },
    },
}))(Button);

const PageFooter = (props) => {

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
                                    <ColorButton variant="outlined" onClick={props.clicked} style={{ color: "#5da2d5" }}>
                                        <EmailRoundedIcon fontSize="large" className="iconSize" style={{ color: "#2d4159" }} />
                                        <Typography variant="h4" component="h6" style={{ color: "#2d4159" }} className="label">Mail</Typography>
                                    </ColorButton>
                                </Grid>
                                : null
                            }
                            <Grid item xs={12} sm={6}>
                                <ColorButton variant="contained" color="primary">
                                    <Link href="https://www.linkedin.com/in/srinath-r-a0304512a/" style={{ margin: "2%", color: "#2d4159", minWidth: "100%" }}>
                                        <LinkedInIcon fontSize="large" className="iconSize" />
                                        <Typography variant="h4" component="h6" className="label">LinkedIn</Typography>
                                    </Link>
                                </ColorButton>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <ColorButton variant="outlined" color="primary">
                                    <Link href="https://t.me/Srinath21" style={{ margin: "2%", color: "#2d4159", minWidth: "100%" }}>
                                        <Typography variant="h4" component="h6" className="label">Telegram</Typography>
                                        <TelegramIcon fontSize="large" className="iconSize" />
                                    </Link>
                                </ColorButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container >
        </div >
    )
}

export default PageFooter;