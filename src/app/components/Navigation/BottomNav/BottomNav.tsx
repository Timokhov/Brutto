import React from 'react';
import { AppBar, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { useBottomNavStylesStyles } from './styles';
import { useTabValue } from '../hooks';
import { Link } from 'react-router-dom';
import { useAppTabs } from '../../../hooks/appTabs/hooks';

const BottomNav = () => {
  const classes = useBottomNavStylesStyles();
  const tabs = useAppTabs();
  const tabValue = useTabValue();

  return (
    <AppBar position="fixed" color="transparent" style={{top: "auto", bottom: 0}}>
      <BottomNavigation value={tabValue}
                        showLabels
                        className={classes.bottomNav}>
        {
          tabs.map(tab => (
            <BottomNavigationAction key={tab.path}
                                    classes={classes}
                                    component={Link}
                                    label={tab.shortTitle || tab.title}
                                    icon={tab.iconComponent}
                                    value={tab.path}
                                    to={tab.path}/>
          ))
        }
      </BottomNavigation>
    </AppBar>
  );
};

export default BottomNav;
