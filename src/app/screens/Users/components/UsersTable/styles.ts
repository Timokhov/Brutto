import { makeStyles } from '@material-ui/core';

export const useUsersTableStyles = () => {
  return makeStyles(theme => ({
    table: {
      minWidth: '650px'
    },
    tableRow: {
      cursor: 'pointer'
    }
  }))();
}
