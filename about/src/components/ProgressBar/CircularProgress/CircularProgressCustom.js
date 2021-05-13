import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

const circularProgress = (props) => {
    return (
        <div style={{ width: "40%", height: "40%", margin: "auto" }}>
            <CircularProgressbar value={props.value} text={`${props.value}%`} />
        </div>
    )
}

export default circularProgress;