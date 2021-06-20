import { Card, CardContent, Container, makeStyles, Paper, Typography } from '@material-ui/core';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@material-ui/lab';
import React from 'react';
import PageHeader from '../PageHeader/PageHeader';


const customStyles = makeStyles((theme) => ({
    timelineDot: props => ({
        backgroundColor: "#fbe8a6"
    })
}))

const Projects = (props) => {
    const classes = customStyles()

    return (
        <Container component="section" m={2} id="projectSection">
            <PageHeader title="Projects" />
            <Paper elevation={1} style={{ backgroundColor: "#0f292f" }}>
                <Timeline align="alternate">
                    {props.projects.map((item, index) => {
                        return (
                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <TimelineDot color="primary" classes={{ defaultPrimary: classes.timelineDot }} />
                                    {index >= (props.projects.length - 1) ? null : <TimelineConnector />
                                    }
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Paper elevation={2}>
                                        <Card style={{ backgroundColor: "#68c3a3" }}>
                                            <CardContent>
                                                <Typography variant="h5" component="h1">
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="subtitle2" style={{ fontWeight: "bold" }} component="h3">
                                                    {item.techStack}
                                                </Typography>
                                                <Typography variant="body2" component="p">
                                                    {item.description}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>)
                    })
                    }
                </Timeline>
            </Paper>
        </Container>
    )
}

export default Projects;