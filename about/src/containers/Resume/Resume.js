import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Container, Box, Paper, Avatar, Fab } from '@material-ui/core'
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import "./Resume.css"
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';

class Resume extends Component {
    componentDidMount() {
        window.addEventListener("scroll", () => {
            const topBorder = document
                .getElementById("navbar-container")
                .getBoundingClientRect().top;

            topBorder >= 0 ?
                document.getElementsByTagName("header")[0].classList.remove("fixed") :
                document.getElementsByTagName("header")[0].classList.add("fixed");
        })
    }

    componentWillUnmount() {
        window.removeEventListener("scroll");
    }

    render() {
        return (
            <React.Fragment>
                <Box component="section" m={0} className="backGround" >
                    <div style={{ color: "white", textAlign: "center" }}>
                        <Avatar style={{ "margin": "auto", "height": "200px", "width": "200px", "top": "40vh" }}>SR</Avatar>
                        <h1 style={{ top: "40vh", position: "relative" }}>
                            Hi, I'm Srinath
                        </h1>
                        <code style={{ "fontSize": "110%", "top": "40vh", position: "relative" }}>Software Developer</code>
                    </div>
                </Box>
                <Navbar />
                <hr className="sep-2"></hr>
                <About />
                <hr className="sep-2"></hr>
                <Skills />
                <Projects />
                <Fab variant="extended" style={{ left: "92%", bottom: "10%", position: "fixed" }}>
                    <DescriptionOutlinedIcon style={{ margin: "5%" }} />
                    <span style={{ fontWeight: "bold" }}>Resume</span>
                </Fab>
                <Fab variant="extended" style={{ left: "86%", bottom: "10%", position: "fixed" }}>
                    <EmailRoundedIcon style={{ margin: "5%" }} />
                    <span style={{ fontWeight: "bold" }}>Mail</span>
                </Fab>
            </React.Fragment>
        )
    }
}

export default Resume;