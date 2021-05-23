import React from 'react';
import { makeStyles, Toolbar, Button, Container } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const customStyles = makeStyles((theme) => ({
    nameHeader: {
        // marginRight: theme.spacing(2)
        float: "left"
    },
    navLinks: {
        float: "right",
        marginLeft: "auto",
        '& > button:hover': {
            color: "black",
            fontWeight: "bold"

        }
    }
}))

const navbar = (props) => {
    const classes = customStyles();

    return (
        <div id="navbar-container">
            <AppBar position="relative">
                <Container>
                    <Toolbar>
                        <Typography variant='h6' className={classes.nameHeader}>
                            Srinath
                    </Typography>
                        <div className={classes.navLinks}>
                            <Button color='inherit'>Home</Button>
                            <Button color='inherit'>About</Button>
                            <Button color='inherit'>Skills</Button>
                            <Button color='inherit'>Projects</Button>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default navbar;