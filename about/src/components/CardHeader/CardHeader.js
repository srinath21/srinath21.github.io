import React from 'react';
import "./CardHeader.css"

const cardHeader = (props) => {
    return (
        <React.Fragment>
            <h3 className="cardHeader" style={props.style}>
                {props.title}
            </h3>
        </React.Fragment>
    )
}

export default cardHeader;