import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import { Paper, Avatar, Typography, Container, Grid } from '@material-ui/core';
import "./About.css"
import CardHeader from '../CardHeader/CardHeader';
import Table from './Table/Table'
import avatar from '../../assets/images/Srinath.jpg'


const about = (props) => {
    const languages = ["Python", "C#", "JavaScript", "C", "C++"]
    const frameworks = ["Django", "Django-Rest", ".NET MVC", ".NET WebAPI", ".NET Core"]
    const libraries = ["ReactJS", "Redux", "jQuery"]
    const technologies = ["PostgreSQL", "SQL Server"]
    const aboutMe = {
        "Name": "Srinath R",
        "Date Of Birth": "24 November 1995",
        "Address": "Vidyaranyapura, Bengaluru",
        "Nationality": "Indian",
    }

    let leftPane = [];
    let i = 0;

    for (var item in aboutMe) {
        leftPane.push(
            <div className="avatarContent" key={i}>
                <Typography component='strong' style={{ fontWeight: "bold" }}>{item}: </Typography>
                <Typography component="span">{aboutMe[item]}</Typography>
            </div>
        )

        i++;
    }

    return (
        <Container component='section' m={2} id="aboutSection">
            <PageHeader title="About Me" />
            <Grid container spacing={2}>
                <Grid item xs={12} lg={3} md={3} sm={3}>
                    <Paper elevation={1} className="rightCard" style={{ backgroundColor: "#ececec" }}>
                        <Avatar alt="Srinath" variant="circle" className="avatar" src={avatar}></Avatar>
                        <CardHeader title="" style={{ "width": "80%", "margin": "10% auto 10% auto" }} />
                        {leftPane}
                    </Paper>
                </Grid>
                <Grid item xs={12} lg={9} md={9} sm={9}>
                    <Paper elevation={1} className="leftCard" style={{ backgroundColor: "#ececec" }}>
                        <Container m={2}>
                            <CardHeader title="What I do?" style={{ paddingTop: "2%" }} />
                            <p style={{ paddingBottom: "1%" }}>I'm a <strong>Software Developer</strong> primarily focused on designing and building dynamic and robust Web Applications.</p>
                            <Table title="Languages" languages={languages} />
                            <Table title="Frameworks" languages={frameworks} />
                            <Table title="Libraries" languages={libraries} />
                            <Table title="Technologies" languages={technologies} />
                        </Container>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default about;