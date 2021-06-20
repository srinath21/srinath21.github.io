import { Box, Container, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import VisibilitySensor from "react-visibility-sensor";
import PageHeader from '../PageHeader/PageHeader';
import LinearProgress from '../ProgressBar/LinearProgress/LinearProgressCustom';
import CircularProgress from '../ProgressBar/CircularProgress/CircularProgressCustom';

const skills = (props) => {
    const linearSkills = [
        [
            "Web Development", 66
        ],
        [
            "UI Development", 66
        ],
        [
            "Data Science", 15
        ],
        [
            "Elastic Search", 40
        ]
    ]
    const circularSkills = [
        ["Leadership", 84],
        ["Creativity", 72],
        ["Management", 70],
        ["Branding", 60],
        ["Motivation", 73],
        ["Marketing", 50]
    ]

    let float = 'left';
    return (
        <Container component='section' m={2} id="skillsSection">
            <PageHeader title="Skills" />
            <Paper elevation={1} style={{ backgroundColor: "#ececec" }}>
                <Grid container xs={12} md={12} sm={12} lg={12} style={{ margin: "5% 0% 5% 0%", paddingTop: "5%" }}>
                    <VisibilitySensor>
                        {({ isVisible }) => {
                            return (linearSkills.map((item, index) => {
                                float = float === 'left' ? 'right' : 'left';
                                const percentage = isVisible ? item[1] : 0;
                                return (
                                    <Grid key={index} item md={6} xs={12}>
                                        <LinearProgress value={percentage} floatValue={float} label={item[0]} />
                                    </Grid>
                                )
                            }))
                        }}
                    </VisibilitySensor>
                </Grid>
                <div style={{ margin: "auto", textAlign: "center", padding: "2%" }}>
                    <Typography variant="h4" component="h4">More Skills</Typography>
                </div>
                <Grid container spacing={2} style={{ padding: "4%" }}>
                    <VisibilitySensor>
                        {({ isVisible }) => {
                            return (circularSkills.map((item, index) => {
                                const percentage = isVisible ? item[1] : 0;
                                return (
                                    <Grid key={index} item md={2} xs={12}>
                                        <CircularProgress value={percentage} style={{ color: "green" }} subText={item[0]} />
                                    </Grid>
                                )
                            }))
                        }}
                    </VisibilitySensor>
                </Grid>
            </Paper>
        </Container>
    )
}

export default skills;