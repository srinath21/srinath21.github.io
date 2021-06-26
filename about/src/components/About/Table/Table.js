import React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import "./Table.css"
import CardHeader from '../../CardHeader/CardHeader';
import { ListItemText, ListItemIcon } from '@material-ui/core';

const customTable = (props) => {
    let items = []

    items.push(props.languages.map((item, index) => {
        return (
            <ListItem key={index}>
                <ListItemIcon style={{ minWidth: "30px" }}>
                    <CheckBoxIcon style={{ color: "green" }} />
                </ListItemIcon>
                <ListItemText primary={item} style={{ width: "max-content" }} />
            </ListItem>
        )
    }))

    return (
        <React.Fragment>
            <CardHeader title={props.title} />
            <div className="aboutSkills">
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