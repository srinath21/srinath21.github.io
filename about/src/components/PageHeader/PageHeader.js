import { Typography } from '@material-ui/core';
import React from 'react';
import './PageHeader.css'

const pageHeader = (props) => {
    return (
        <div className="pageHeader">
            <Typography variant="h2" component="h3" className="headerText">
                {props.title}
            </Typography>
        </div>
    )
}

export default pageHeader