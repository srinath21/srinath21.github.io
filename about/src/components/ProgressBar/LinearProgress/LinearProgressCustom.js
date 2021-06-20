import React from 'react';
import { LinearProgress, Box, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    barColorPrimary: props => ({
        backgroundColor: "rgb(223, 85, 85)"
    }),
    colorPrimary: props => ({
        backgroundColor: "#f78888"
    })
}))

const LinearProgressCustom = (props) => {
    const classes = useStyles();
    return (
        <div style={{ width: "90%", margin: "auto", float: props.floatValue }}>
            <Box >
                <Typography variant="h5" color="textSecondary">{props.label}</Typography>
            </Box>
            <Box display="flex" alignItems="center">
                <Box width="100%" mr={1}>
                    <LinearProgress classes={{ colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary }} variant="determinate" {...props} />
                </Box>
                <Box minWidth={35}>
                    <Typography variant="body2" color="textSecondary">{`${Math.round(
                        props.value,
                    )}%`}</Typography>
                </Box>
            </Box>
        </div>
    )
}

export default LinearProgressCustom;