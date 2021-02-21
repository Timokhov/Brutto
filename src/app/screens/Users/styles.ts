import { makeStyles } from '@material-ui/core';

export const useUsersStyles = () => {
  return makeStyles(theme => ({
    container: {
      width: '95%',
      height: '95%',
      display: 'flex',
      flexDirection: 'row'
    },
    usersGroupsContainer: {
      minWidth: '300px',
      marginRight: '20px'
    }
  }))();
}
