import React from 'react';
import { LinearProgress, Box, Typography } from '@material-ui/core'

const linearProgress = (props) => {
    return (
        <div style={{ width: "90%", margin: "auto", float: props.floatValue }}>
            <Box >
                <Typography variant="h5" color="textSecondary">{props.label}</Typography>
            </Box>
            <Box display="flex" alignItems="center">
                <Box width="100%" mr={1}>
                    <LinearProgress variant="determinate" {...props} />
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

export default linearProgress;