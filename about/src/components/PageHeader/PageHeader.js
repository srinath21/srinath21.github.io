import React from 'react';
import './PageHeader.css'

const pageHeader = (props) => {
    return (
        <div>
            <h1 className="pageHeader">
                {props.title}
            </h1>
            <hr />
        </div>
    )
}

export default pageHeader