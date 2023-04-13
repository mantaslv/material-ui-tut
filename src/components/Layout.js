import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material'
import { Drawer, Typography, List, ListItemIcon, ListItemText, ListItemButton } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min'

const drawerWidth = 240

const useStyles = makeStyles(() => ({
    page: {
        background: '#f9f9f9',
        width: '100%'
    },
    drawer: {
        width: drawerWidth
    },
    drawerPaper: {
        width: drawerWidth
    },
    root: {
        display: 'flex'
    },
    active: {
        '&.Mui-selected': {
            background: '#f4f4f4'
        }
    }    
}))

export default function Layout({ children }) {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color='secondary' />,
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlineOutlined color='secondary' />,
            path: '/create'
        }
    ]

    return (
        <div className={classes.root}>
            {/* app bar */}

            {/* side drawer */}
            <Drawer className={classes.drawer} 
                variant='permanent' 
                anchor='left'
                classes={{ paper: classes.drawerPaper }}
            >
                <div>
                    <Typography variant='h5'>
                        My Notes
                    </Typography>
                </div>

                <List>
                    {menuItems.map(item => (
                        <ListItemButton
                            key={item.text}
                            onClick={() => { history.push(item.path) }}
                            selected={location.pathname === item.path}
                        >
                            {console.log(item.path)}
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    ))}   
                </List>
            </Drawer>

            <div className={classes.page}>
                {children}
            </div>
        </div>
    )
}
