import React, { useCallback, useState } from 'react';
import { Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import HistoryIcon from '@material-ui/icons/History';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useAccountDrawerStyles } from './styles';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/auth/flows';
import { DrawerItem } from './types';

const AccountDrawer = () => {
  const classes = useAccountDrawerStyles();
  const [isShowDrawer, setShowDrawer] = useState(false);

  const dispatch = useDispatch();
  const logoutHandler = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  const drawerUpperItems: DrawerItem[] = [
    {
      id: 'profile',
      title: 'My Profile',
      icon: <AccountCircleIcon/>
    },
    {
      id: 'settings',
      title: 'Settings',
      icon: <SettingsIcon/>
    },
    {
      id: 'history',
      title: 'History',
      icon: <HistoryIcon/>
    }
  ];

  const drawerLowerItems: DrawerItem[] = [
    {
      id: 'logout',
      title: 'Logout',
      icon: <ExitToAppIcon/>,
      onClick: logoutHandler
    }
  ];

  return (
    <>
      <IconButton className={classes.accountButton}
                  edge="start"
                  color="inherit"
                  aria-label="account"
                  onClick={() => setShowDrawer(true)}>
        <AccountCircleIcon/>
      </IconButton>
      <Drawer anchor="right"
              open={isShowDrawer}
              onClose={() => setShowDrawer(false)}>
        <List className={classes.drawerList}>
          {
            drawerUpperItems.map(item => (
              <ListItem button key={item.id} onClick={item.onClick}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title}/>
              </ListItem>
            ))
          }
        </List>
        <Divider/>
        <List className={classes.drawerList}>
          {
            drawerLowerItems.map(item => (
              <ListItem button key={item.id} onClick={item.onClick}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title}/>
              </ListItem>
            ))
          }
        </List>
      </Drawer>
    </>
  );
};

export default AccountDrawer;
