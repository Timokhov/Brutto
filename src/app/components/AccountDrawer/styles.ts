import { makeStyles } from '@material-ui/core';

export const useAccountDrawerStyles = () => {
  return makeStyles(theme => ({
    accountButton: {
      marginLeft: theme.spacing(2),
    },
    drawerList: {
      width: 200
    }
  }))();
}
