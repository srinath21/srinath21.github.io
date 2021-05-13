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
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="primary" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={2}>
                                    <Card>
                                        <CardContent>
                                            <Typography variant="h5" component="h1">
                                                Test
                                            </Typography>
                                            <Typography variant="subtitle2" style={{ fontWeight: "bold" }} component="h3">
                                                Python Django
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                This is a sample description of the project details
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="secondary" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3}>
                                    <Card>
                                        <CardContent    >
                                            <Typography variant="h5" component="h1">
                                                Test
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Paper>
            </Container>
        </div >
    )
}

export default projects;