import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { UsersTableProps } from './types';
import { useUsersTableStyles } from './styles';

const UsersTable = (props: UsersTableProps) => {
  const classes = useUsersTableStyles();
  return (
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>User</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Age</TableCell>
          <TableCell>Group</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.usersToShow.map((user) => (
          <TableRow className={classes.tableRow} key={user.id} hover>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.age}</TableCell>
            <TableCell>{user.group?.name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UsersTable;
