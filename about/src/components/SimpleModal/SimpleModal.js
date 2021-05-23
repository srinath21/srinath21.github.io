import { Dialog, DialogTitle, Link, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import React from 'react';

const simpleModal = (props) => {
    return (
        <Dialog onClose={props.onClose} aria-labelledby="modal-title" open={props.open}>
            <List>
                <ListItem>
                    <Typography variant="" component="span" color="textSecondary">Feel free to drop a mail to <Link>{props.email}</Link> and I will reach you as soon as possible!</Typography>
                </ListItem>
            </List>
        </Dialog>
    );
}

export default simpleModal;