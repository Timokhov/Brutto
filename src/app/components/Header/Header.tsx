import React from 'react';
import {
  AppBar,
  Toolbar, Typography
} from '@material-ui/core';
import { useHeaderStyles } from './styles';
import logo from '../../../assets/logo.svg';
import TopNav from '../Navigation/TopNav/TopNav';
import AccountDrawer from '../AccountDrawer/AccountDrawer';
import { useIsMobile } from '../../hooks/useIsMobile';
import { usePageTitle } from './hooks';


const Header = () => {
  const classes = useHeaderStyles();
  const isMobile = useIsMobile();
  const pageTitle = usePageTitle();

  return (
    <AppBar position="static" >
      <Toolbar style={isMobile ? { minHeight: '50px' } : {} }>
        <img className={classes.logo} alt="logo" src={logo}/>
        {
          !isMobile && (
            <>
              <TopNav/>
              <AccountDrawer/>
            </>
          )
        }
        {
          isMobile && (
            <>
              <Typography component="h1" variant="h6" style={{ width: '100%', textAlign: 'center' }}>
                { pageTitle }
              </Typography>
              <div className={classes.logo}>
                <AccountDrawer/>
              </div>
            </>
          )
        }
      </Toolbar>
    </AppBar>
  );
};

export default Header;
