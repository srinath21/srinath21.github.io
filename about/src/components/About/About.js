import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import { makeStyles, Box, Paper, Avatar, Typography, Container } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import "./About.css"
import CardHeader from '../CardHeader/CardHeader';
import Table from './Table/Table'

const customStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(5),
            width: theme.spacing(60),
            // height: theme.spacing(16),
        },
    },
    large: {
        height: theme.spacing(35),
        width: theme.spacing(35)
    }
}));

const about = (props) => {
    const classes = customStyles();
    const languages = ["Python", "C#", "JavaScript", "C", "C++"]
    const frameworks = ["Django", ".NET MVC", ".NET WebAPI"]
    const libraries = ["ReactJS", "Redux", "jQuery"]
    const technologies = ["PostgreSQL", "SQL Server"]
    const aboutMe = {
        "Name": "Srinath R",
        "Date Of Birth": "24 November 1995",
        "Address": "Vidyaranyapura, Bengaluru",
        "Nationality": "Indian",
        "Email": "test@test.com"
    }

    let leftPane = [];

    for (var item in aboutMe) {
        leftPane.push(
            <div className="avatarContent">
                <Typography component='strong' style={{ fontWeight: "bold" }}>{item}: </Typography>
                <Typography component="span">{aboutMe[item]}</Typography>
            </div>
        )

    }

    return (
        <Container component='section' m={2}>
            <PageHeader title="About Me" />
            <Paper elevation={1} className="rightCard">
                <Avatar alt="Srinath" className="avatar">
                    <PersonIcon className="avatar" />
                </Avatar>
                <CardHeader title="" style={{ "width": "80%", "margin": "10%" }} />
                {leftPane}
            </Paper>
            <Paper elevation={1} className="leftCard">
                <Container m={2}>
                    <CardHeader title="What I do?" />
                    <p>I'm a <strong>Software Developer</strong> primarily focused on designing and building Web Applications.</p>
                    <Table title="Languages" languages={languages} />
                    <Table title="Frameworks" languages={frameworks} />
                    <Table title="Libraries" languages={libraries} />
                    <Table title="Technologies" languages={technologies} />
                </Container>
            </Paper>
        </Container>
    )
}

export default about;