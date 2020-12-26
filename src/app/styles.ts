import { makeStyles } from '@material-ui/core';

export const useAppStyles = () => {
  return makeStyles(theme => ({
    appContainer: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    content: {
      flex: '1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }))();
}
