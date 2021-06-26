import React, { useState } from 'react';
import { makeStyles, Toolbar, Container, Drawer, ListItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-scroll'

const customStyles = makeStyles((theme) => ({
    nameHeader: {
        // marginRight: theme.spacing(2)
        float: "left",
        backgroundColor: "#86c232",
        padding: "1%",
        cursor: "pointer"
    },
    navLinks: {
        float: "right",
        marginLeft: "auto",
        '& > button:hover': {
            color: "black",
            fontWeight: "bold"

        }
    },
    menuIcon: {
        paddingRight: "10px",
        paddingLeft: 0
    },
    drawer: {
        width: "45%"
    },
    navItem: {
        padding: 17,
        fontWeight: "bold",
        cursor: "pointer"
    },
    navItemActive: {
        fontWeight: "bold",
        backgroundColor: "darkcyan"
    }
}))

const Navbar = (props) => {
    const classes = customStyles();
    const [state, setState] = useState({
        drawerOpen: false
    });

    const { drawerOpen } = state;

    const toggleDrawer = (status) => {
        setState((prevState) => ({ ...prevState, drawerOpen: status }))
    }

    return (
        <div id="navbar-container">
            <AppBar position="relative" style={{ "backgroundColor": "#501f4a" }}>
                {props.isMobile ? (
                    <Toolbar>
                        <MenuIcon className={classes.menuIcon} onClick={() => toggleDrawer(true)} />
                        <Link className={classes.nameHeader} to="homeSection" smooth={true}>
                            <Typography variant="h6" style={{ "fontWeight": "bolder" }}>
                                Srinath
                            </Typography>
                        </Link>
                    </Toolbar>) : (
                    <Container>
                        <Toolbar>
                            <Link className={classes.nameHeader} to="homeSection" smooth={true} spy={true}>
                                <Typography variant="h6" style={{ "fontWeight": "bolder" }}>
                                    Srinath
                                </Typography>
                            </Link>
                            <div className={classes.navLinks}>
                                <Link className={classes.navItem} color='inherit' to="homeSection" activeClass={classes.navItemActive} smooth={true} spy={true}>Home</Link>
                                <Link className={classes.navItem} color='inherit' to="aboutSection" activeClass={classes.navItemActive} smooth={true} spy={true} offset={-150}>About</Link>
                                <Link className={classes.navItem} color='inherit' to="skillsSection" activeClass={classes.navItemActive} smooth={true} spy={true} offset={-110}>Skills</Link>
                                <Link className={classes.navItem} color='inherit' to="projectSection" activeClass={classes.navItemActive} smooth={true} spy={true} offset={-150}>Projects</Link>
                            </div>
                        </Toolbar>
                    </Container>
                )}
                <Drawer anchor='left' open={drawerOpen} onClose={() => toggleDrawer(false)} className={classes.drawer} classes={{ paper: classes.drawer }}>
                    <ListItem button>
                        <Link to="homeSection" smooth={true} spy={true}>Home</Link>
                    </ListItem>
                    <ListItem button>
                        <Link to="aboutSection" smooth={true} spy={true}>About</Link>
                    </ListItem>
                    <ListItem button>
                        <Link to="skillsSection" smooth={true} spy={true}>Skills</Link>
                    </ListItem>
                    <ListItem button>
                        <Link to="projectSection" smooth={true} spy={true}>Projects</Link>
                    </ListItem>
                </Drawer>
            </AppBar>
        </div >
    )
}

export default Navbar;