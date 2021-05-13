import React from 'react';
import "./CardHeader.css"

const cardHeader = (props) => {
    return (
        <React.Fragment>
            <h3 style={props.style}>
                {props.title}
            </h3>
            <div className="cardBorder" style={{ width: "45%" }}></div>
        </React.Fragment>
    )
}

export default cardHeader;