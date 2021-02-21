import React from 'react';
import { Typography } from '@material-ui/core';
import { usePageTitle } from '../hooks';

const HeaderContent = () => {
  const pageTitle = usePageTitle();

  return (
    <Typography component="h1" variant="h6" style={{ width: '100%', textAlign: 'center' }}>
      { pageTitle }
    </Typography>
  );
};

export default HeaderContent;
