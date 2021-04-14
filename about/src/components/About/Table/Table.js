import React from 'react';
import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import TableItem from './TableItem/TableItem'
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import "./Table.css"
import CardHeader from '../../CardHeader/CardHeader';
import { ListItemText, ListItemIcon } from '@material-ui/core';

const customTable = (props) => {
    let items = []
    let i = 0;
    while (i + 3 < props.languages.length) {
        items.push(props.languages.slice(i, i + 3).map((item, index) => {
            return (
                <ListItem key={index}>
                    <ListItemIcon>
                        <CheckBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                </ListItem>
            )
        }))

        i += 3
    }

    if (i < props.languages.length) {
        items.push(props.languages.slice(i, props.languages.length).map((item, index) => {
            return (
                <ListItem key={index}>
                    <ListItemIcon>
                        <CheckBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                </ListItem>
            )
        }))
    }

    return (
        <React.Fragment>
            <CardHeader title={props.title} />
            <div class="aboutSkills">
                {items.map((item, index) => {
                    return (
                        <List key={index}>
                            {item}
                        </List>
                    )
                })}
            </div>
        </React.Fragment>
    )
}

export default customTable;