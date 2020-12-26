import { makeStyles } from '@material-ui/core';

export const useMyTrainingStyles = () => {
  return makeStyles(theme => ({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    }
  }))();
}
