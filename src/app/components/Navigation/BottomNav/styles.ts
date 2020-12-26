import { makeStyles } from '@material-ui/core';

export const useBottomNavStylesStyles = () => {
  return makeStyles(theme => ({
    root: {
      '&$selected': {
        color: theme.palette.secondary.main,
      }
    },
    selected: {},
    bottomNav: {
      width: '100%'
    }
  }))();
}
