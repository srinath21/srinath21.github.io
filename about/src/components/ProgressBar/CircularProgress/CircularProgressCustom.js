import { Typography } from '@material-ui/core';
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

const circularProgress = (props) => {
    return (
        <div>
            <div style={{ width: "80%", height: "80%", margin: "auto" }}>
                <CircularProgressbar value={props.value} text={`${props.value}%`} />
            </div>
            <div style={{ margin: "auto", textAlign: "center", paddingTop: "1%" }}>
                <Typography variant="subtitle1" style={{ fontWeight: "bold" }} component="h3">{props.subText}</Typography>
            </div>
        </div >
    )
}

export default circularProgress;