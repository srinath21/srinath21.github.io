import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Container, Box, Paper, Avatar, Fab } from '@material-ui/core'
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import "./Resume.css"
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
import SimpleModal from '../../components/SimpleModal/SimpleModal';
import PageFooter from '../../components/PageFooter/PageFooter';
import resume from '../../assets/Srinath.docx';

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
            emailText: "srinathrao921@gmail.com"
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
        })
        console.log(process.env.PUBLIC_URL)
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
                <Projects projects={this.state.projects} />
                <PageFooter />
                <a href={resume}>
                    <Fab variant="extended" style={{ left: "92%", bottom: "10%", position: "fixed" }}>
                        <DescriptionOutlinedIcon style={{ margin: "5%" }} />
                        <span style={{ fontWeight: "bold" }}>Resume</span>
                    </Fab>
                </a>
                <Fab variant="extended" style={{ left: "86%", bottom: "10%", position: "fixed" }} onClick={this.handleOpenMail} >
                    <EmailRoundedIcon style={{ margin: "5%" }} />
                    <span style={{ fontWeight: "bold" }}>Mail</span>
                </Fab>
                <SimpleModal email={this.state.emailText} open={this.state.open} onClose={this.handleClose.bind(this)} />
            </React.Fragment>
        )
    }
}

export default Resume;