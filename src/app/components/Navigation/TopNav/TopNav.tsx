import React from 'react';
import { Tab, Tabs } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useNavigationStyles } from './styles';
import { useTabValue } from '../hooks';
import { useAppTabs } from '../../../hooks/appTabs/hooks';

const TopNav = () => {
  const classes = useNavigationStyles();
  const tabs = useAppTabs();
  const tabValue = useTabValue();

  return (
    <nav className={classes.navigation}>
      <Tabs value={tabValue}>
        {
          tabs.map(tab => (
            <Tab key={tab.path}
                 component={Link}
                 label={tab.title}
                 value={tab.path}
                 to={tab.path}/>
          ))
        }
      </Tabs>
    </nav>
  );
};

export default TopNav;
