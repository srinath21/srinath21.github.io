import { Container, Grid, Link, Typography } from '@material-ui/core';
import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';

const pageFooter = (props) => {
    return (
        <div style={{ minHeight: "25vh", backgroundColor: "grey", marginTop: "10%" }}>
            <Container component='section' m={2}>
                <Grid container spacing={3}>
                    <Grid xs={12} md={12} sm={12} lg={12} style={{ margin: "3%" }}>
                        <Typography component="h4" variant="h4" color="textSecondary" style={{ textAlign: "center" }}>
                            Contact Me
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12} sm={12} lg={12} style={{ textAlign: "center" }} >
                        <Link href="https://github.com/srinath21" color="inherit" style={{ margin: "2%" }}>
                            <GitHubIcon style={{ fontSize: "2.5rem" }} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/srinath-r-a0304512a/" style={{ margin: "2%" }}>
                            <LinkedInIcon style={{ fontSize: "2.5rem" }} />
                        </Link>
                        <Link href="https://t.me/Srinath21" style={{ margin: "2%" }}>
                            <TelegramIcon style={{ fontSize: "2.5rem" }} />
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default pageFooter;