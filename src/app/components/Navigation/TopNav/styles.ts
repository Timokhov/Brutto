import { makeStyles } from '@material-ui/core';

export const useNavigationStyles = () => {
  return makeStyles(theme => ({
    navigation: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end'
    },
  }))();
}
