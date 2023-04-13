import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material'
import { Drawer, Typography, List, ListItemIcon, ListItemText, ListItemButton, AppBar, Toolbar, Avatar } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { format } from 'date-fns'

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
    return {
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3)
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
        },
        title: {
            padding: theme.spacing(2)
        },
        appBar: {
            '& .MuiToolbar-root': {
                //width: `calc(100% - ${drawerWidth}px)`, // Set the width of the Toolbar component
                marginLeft: drawerWidth,
                background: '#fff'
            }
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow: 1
        },
        avatar: {
            marginLeft: theme.spacing(2)
        }
    }
})

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
            <AppBar
                className={classes.appBar}
                elevation={0}
            >
                <Toolbar>
                    <Typography className={classes.date}>
                        Today is the {format(new Date(), 'do MMMM Y')}
                    </Typography>
                    <Typography>
                        Mantas
                    </Typography>
                    <Avatar className={classes.avatar} src='https://media.licdn.com/dms/image/D4E35AQEJAHufmzTSbg/profile-framedphoto-shrink_400_400/0/1678980356821?e=1682010000&v=beta&t=nfhKGEfUpi8G7NJZGvd05r6sE58YoswsSwbRVpv28BY'/>
                </Toolbar>
            </AppBar>

            {/* side drawer */}
            <Drawer className={classes.drawer} 
                variant='permanent' 
                anchor='left'
                classes={{ paper: classes.drawerPaper }}
            >
                <div>
                    <Typography variant='h5' className={classes.title}>
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
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    ))}   
                </List>
            </Drawer>

            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}
