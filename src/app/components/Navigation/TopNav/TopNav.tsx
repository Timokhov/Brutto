import React from 'react';
import { Tab, Tabs } from '@material-ui/core';
import { AvailableUrls } from '../../../utils/constants';
import { Link } from 'react-router-dom';
import { useNavigationStyles } from './styles';
import { useTabValue } from '../hooks';

const TopNav = () => {
  const classes = useNavigationStyles();
  const tabValue = useTabValue();

  return (
    <nav className={classes.navigation}>
      <Tabs value={tabValue}>
        <Tab component={Link}
             label="My Training"
             value={AvailableUrls.MY_TRAINING}
             to={AvailableUrls.MY_TRAINING}/>
        <Tab component={Link}
             label="Schedule"
             value={AvailableUrls.SCHEDULE}
             to={AvailableUrls.SCHEDULE}/>
        <Tab component={Link}
             label="Personal Records"
             value={AvailableUrls.PERSONAL_RECORDS}
             to={AvailableUrls.PERSONAL_RECORDS}/>
      </Tabs>
    </nav>
  );
};

export default TopNav;
