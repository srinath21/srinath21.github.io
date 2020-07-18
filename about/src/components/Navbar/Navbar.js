import React from 'react';
import { makeStyles, Toolbar } from '@material-ui/core';
import Appbar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const navbar = (props) => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant='h6'>
                        Srinath
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default navbar;