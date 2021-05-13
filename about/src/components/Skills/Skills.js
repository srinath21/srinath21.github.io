import { Box, Container, Grid, Paper } from '@material-ui/core';
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

    ]

    let float = 'left';
    return (
        <Container component='section' m={2}>
            <PageHeader title="Skills" />
            <Paper elevation={1}>
                <Grid container spacing={3} style={{ margin: "5%", paddingTop: "5%" }}>
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
                <Grid container spacing={3}>
                    <VisibilitySensor>
                        {({ isVisible }) => {
                            const percentage = isVisible ? 66 : 0;
                            return (
                                <React.Fragment>
                                    <Grid item md={2} xs={12}>
                                        <CircularProgress value={percentage} />
                                    </Grid>
                                    <Grid item md={2} xs={12}>
                                        <CircularProgress value={percentage} />
                                    </Grid>
                                    <Grid item md={2} xs={12}>
                                        <CircularProgress value={percentage} />
                                    </Grid>
                                    <Grid item md={2} xs={12}>
                                        <CircularProgress value={percentage} />
                                    </Grid>
                                    <Grid item md={2} xs={12}>
                                        <CircularProgress value={percentage} />
                                    </Grid>
                                    <Grid item md={2} xs={12}>
                                        <CircularProgress value={percentage} />
                                    </Grid>
                                </React.Fragment>
                            );
                        }}
                    </VisibilitySensor>
                </Grid>
            </Paper>
        </Container>
    )
}

export default skills;