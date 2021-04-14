import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Container, Box, Paper, Avatar } from '@material-ui/core'
import "./Resume.css"
import About from '../../components/About/About'

class Resume extends Component {
    render() {
        return (
            <div style={{ "overflow": "auto" }}>
                {/*<Navbar />*/}
                <div class="backGround" >
                    <div style={{ color: "white", textAlign: "center", margin: "15% auto 50% auto" }}>
                        <Avatar style={{ "margin": "auto", "height": "200px", "width": "200px" }}>SR</Avatar>
                        <h1>
                            Hi, I'm Srinath
                        </h1>
                        <code style={{ "fontSize": "110%" }}>Software Developer</code>
                    </div>
                </div>
                {/*<About />*/}
            </div >
        )
    }
}

export default Resume;