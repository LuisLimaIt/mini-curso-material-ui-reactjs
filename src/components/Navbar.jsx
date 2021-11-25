import React from 'react';
import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'
const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        }
    },
    title: {
        flexGrow: 1
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${240}px)`,
            marginLeft: 240,
        }
    }
}));

const Navbar = ({ openMenu }) => {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton 
                    color="inherit" 
                    aria-label='menu'
                    className={classes.menuButton}
                    onClick={openMenu} 
                >
                    <MenuIcon />
                </IconButton>
            <Typography variant="h6" className={classes.title}>
                Luis
            </Typography>
            <Button variant="text" color="inherit">
                Login
            </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;