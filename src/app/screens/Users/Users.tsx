import React, { useEffect, useState } from 'react';
import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import * as UsersFlows from '../../store/users/flows';
import UsersTable from './components/UsersTable/UsersTable';
import UsersGroupsList from './components/UsersGroupsList/UsersGroupsList';
import { Nullable } from '../../types/Nullable';
import { useUsersStyles } from './styles';

const Users = () => {

  const users = useSelector(
    (state: RootState) => state.usersState.users
  );
  const usersIsLoading = useSelector(
    (state: RootState) => state.usersState.usersIsLoading
  );

  const usersGroups = useSelector(
    (state: RootState) => state.usersState.usersGroups
  );
  const usersGroupsIsLoading = useSelector(
    (state: RootState) => state.usersState.userGroupsIsLoading
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UsersFlows.loadUsers());
    dispatch(UsersFlows.loadUsersGroups())
  }, []);

  const [usersToShow, setUsersToShow] = useState(users);

  const [selectedGroupId, setSelectedGroupId] = useState<Nullable<string>>();

  useEffect(() => {
    if (!selectedGroupId) {
      setUsersToShow(users);
    } else {
      setUsersToShow(users.filter(user => user.group?.id === selectedGroupId));
    }
  }, [selectedGroupId, users]);

  const onGroupSelected = (groupId: Nullable<string>) => {
    setSelectedGroupId(groupId);
  };

  const classes = useUsersStyles();
  return (
    <div className={classes.container}>
      <Paper className={classes.usersGroupsContainer}>
        <UsersGroupsList
          usersGroups={usersGroups}
          selectedGroupId={selectedGroupId}
          onGroupSelected={onGroupSelected}
        />
      </Paper>
      <TableContainer component={Paper}>
        <UsersTable usersToShow={usersToShow}/>
      </TableContainer>
    </div>
  );
};

export default Users;
