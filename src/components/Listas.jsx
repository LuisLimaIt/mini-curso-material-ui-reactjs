import React from 'react';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@material-ui/core'
import { CloudQueue, Deck } from '@material-ui/icons';

const Listas = () => {
    return (
        <div>
            <List component="nav">

                <ListItem button>
                    <ListItemIcon>
                        <CloudQueue />
                    </ListItemIcon>
                    <ListItemText primary="Item do Menu" />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <Deck />
                    </ListItemIcon>
                    <ListItemText primary="Novo item do Menu" />
                </ListItem>

                <Divider />

            </List>
        </div>
    );
}

export default Listas;
