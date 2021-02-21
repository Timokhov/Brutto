import React from 'react';
import {
  AppBar,
  Toolbar
} from '@material-ui/core';
import { useHeaderStyles } from './styles';
import logo from '../../../assets/logo.svg';
import DesktopHeaderContent from './desktop/HeaderContent';
import MobileHeaderContent from './mobile/HeaderContent';
import { useIsMobile } from '../../hooks/mobile/hooks';
import AccountDrawer from '../AccountDrawer/AccountDrawer';

const Header = () => {
  const classes = useHeaderStyles();
  const isMobile = useIsMobile();

  return (
    <AppBar position="static" >
      <Toolbar className={classes.toolbar}>
        <img className={classes.logo} alt="logo" src={logo}/>
        {
          isMobile ? <MobileHeaderContent/> : <DesktopHeaderContent/>
        }
        <div className={classes.logo}>
          <AccountDrawer/>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
