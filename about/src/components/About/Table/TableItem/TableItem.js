import React from 'react'
import { Typography } from '@material-ui/core';

const tableItem = props => {
    return (
        <td>
            <Typography>{props.item}</Typography>
        </td>
    )
}

export default tableItem;