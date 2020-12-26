import React from 'react';
import { AppBar, BottomNavigation, BottomNavigationAction, Tab } from '@material-ui/core';
import EventNoteIcon from '@material-ui/icons/EventNote';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import FlagIcon from '@material-ui/icons/Flag';
import { useBottomNavStylesStyles } from './styles';
import { useTabValue } from '../hooks';
import { Link } from 'react-router-dom';
import { AvailableUrls } from '../../../utils/constants';

const BottomNav = () => {
  const classes = useBottomNavStylesStyles();
  const tabValue = useTabValue();

  return (
    <AppBar position="fixed" color="transparent" style={{top: "auto", bottom: 0}}>
      <BottomNavigation value={tabValue}
                        showLabels
                        className={classes.bottomNav}>
        <BottomNavigationAction classes={classes}
                                component={Link}
                                label="My Training"
                                icon={<FitnessCenterIcon/>}
                                value={AvailableUrls.MY_TRAINING}
                                to={AvailableUrls.MY_TRAINING}/>
        <BottomNavigationAction classes={classes}
                                component={Link}
                                label="Schedule"
                                icon={<EventNoteIcon/>}
                                value={AvailableUrls.SCHEDULE}
                                to={AvailableUrls.SCHEDULE}/>
        <BottomNavigationAction classes={classes}
                                component={Link}
                                label="Records"
                                icon={<FlagIcon/>}
                                value={AvailableUrls.PERSONAL_RECORDS}
                                to={AvailableUrls.PERSONAL_RECORDS}/>
      </BottomNavigation>
    </AppBar>
  );
};

export default BottomNav;
