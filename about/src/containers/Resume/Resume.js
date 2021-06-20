import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Link, Box, Paper, Avatar, Fab } from '@material-ui/core'
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import "./Resume.css"
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
import SimpleModal from '../../components/SimpleModal/SimpleModal';
import PageFooter from '../../components/PageFooter/PageFooter';
import resume from '../../assets/Srinath.docx';
import { Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    title: "3D graphical simulation of Goal-Line Technology",
                    techStack: "C++",
                    description: "This was a mini-project based on OpenGL. We made use of these libraries to simulate the Goal Line Technology which has been implemented in football matches to determine if a goal has been scored or not."
                },
                {
                    title: "QR Code Generator",
                    techStack: "Python",
                    description: "A mini-project making use of Python libraries that generates a unique QR Code based on the text that is provided."
                },
                {
                    title: "Application of Data Analytics and Learning Techniques for Decision Making in Crop Cultivation",
                    techStack: "Python/Django/numpy/scikit-learn",
                    description: "This was a project that made use of the Machine Learning libraries available in Python to make decisions about crop cultivation based on a number of factors, so as to provide the best solution to maximize yield and thereby profit. This Decision-Making module was then integrated into an interactive website to provide a simple, yet elegant way to obtain results that a particular user desires."
                }
            ],
            open: false,
            emailText: "srinathrao921@gmail.com",
            mobileView: false
        }
    }


    componentDidMount() {
        window.addEventListener("scroll", () => {
            const topBorder = document
                .getElementById("navbar-container")
                .getBoundingClientRect().top;

            topBorder >= 0 ?
                document.getElementsByTagName("header")[0].classList.remove("fixed") :
                document.getElementsByTagName("header")[0].classList.add("fixed");
        });
        const setResponsiveness = () => {
            return window.innerWidth < 900 ? this.setState((prevState) => ({ ...prevState, mobileView: true })) :
                this.setState((prevState) => ({ ...prevState, mobileView: false }))
        }

        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        }
    }

    componentWillUnmount() {
        window.removeEventListener("scroll");
    }

    handleOpenMail = () => {
        this.setState({ open: true });
    }

    handleClose = () => {
        this.setState({ open: false });
    }

    render() {
        return (
            <React.Fragment>
                <Box component="section" m={0} className="backGround" id="homeSection" >
                    <div style={{ color: "white", textAlign: "center" }}>
                        {/*<Avatar style={{ "margin": "auto", "height": "200px", "width": "200px", "top": "40vh" }}>SR</Avatar>*/}
                        <div style={{ top: "40vh", position: "relative" }}>
                            <Typography variant="h3" component="h6" className="preNameStyle" >
                                Hello there, I'm
                            </Typography>
                            <Typography variant="h1" component="h1" className="nameStyle">
                                SRINATH
                            </Typography>
                            <code className="descriptionStyle">I'm a Computer Science Engineer, specializing in Full Stack Web Developement <br />and interested in Machine Learning and Data Science</code>
                            <br />
                            <span style={{ position: "relative", top: "15px" }}>
                                <Link href="https://github.com/srinath21" color="inherit" style={{ margin: "2%" }}>
                                    <GitHubIcon fontSize="large" />
                                </Link>
                            </span>
                        </div>
                    </div>
                </Box>
                <Navbar isMobile={this.state.mobileView} />
                <hr className="sep-2"></hr>
                <About />
                <Skills />
                <Projects projects={this.state.projects} />
                <PageFooter clicked={this.handleOpenMail} isMobile={this.state.mobileView} />
                {!this.state.mobileView ?
                    (
                        <React.Fragment>
                            <a href={resume}>
                                <Fab variant="extended" style={{ left: "92%", bottom: "10%", position: "fixed", color: "aliceblue", backgroundColor: "#026670" }}>
                                    <DescriptionOutlinedIcon style={{ margin: "5%" }} />
                                    <span style={{ fontWeight: "bold" }}>Resume</span>
                                </Fab>
                            </a>
                            <Fab variant="extended" style={{ left: "86%", bottom: "10%", position: "fixed", color: "aliceblue", backgroundColor: "#026670" }} onClick={this.handleOpenMail} >
                                <EmailRoundedIcon style={{ margin: "5%" }} />
                                <span style={{ fontWeight: "bold" }}>Mail</span>
                            </Fab>
                        </React.Fragment>
                    ) : null
                }
                <SimpleModal email={this.state.emailText} open={this.state.open} onClose={this.handleClose.bind(this)} />
            </React.Fragment >
        )
    }
}

export default Resume;