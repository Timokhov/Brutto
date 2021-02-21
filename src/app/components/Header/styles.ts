import { makeStyles } from '@material-ui/core';

export const useHeaderStyles = () => {
  return makeStyles(theme => ({
    logo: {
      width: '4em'
    },
    toolbar: {
      minHeight: '48px'
    },
    navigation: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end'
    },
  }))();
}
