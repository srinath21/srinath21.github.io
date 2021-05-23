import { Card, CardContent, Container, Paper, Typography } from '@material-ui/core';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@material-ui/lab';
import React from 'react';
import cardHeader from '../CardHeader/CardHeader';
import PageHeader from '../PageHeader/PageHeader';

const projects = (props) => {
    return (
        <div>
            <Container component="section" m={2}>
                <PageHeader title="Projects" />
                <Paper elevation={1}>
                    <Timeline align="alternate">
                        {props.projects.map((item, index) => {
                            return (
                                <TimelineItem key={index}>
                                    <TimelineSeparator>
                                        <TimelineDot color="primary" />
                                        {index >= (props.projects.length - 1) ? null : <TimelineConnector />
                                        }
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Paper elevation={2}>
                                            <Card>
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
        </div >
    )
}

export default projects;