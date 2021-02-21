import React, { useState } from 'react';
import { Collapse, List, ListItem, ListItemIcon, ListItemText, Paper } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import { UsersGroupsListProps } from './types';
import { useUsersGroupsListStyles } from './styles';

const UsersGroupsList = (props: UsersGroupsListProps) => {

  const [isShowGroupsList, setShowGroupsList] = useState(false);

  const toggleGroupsList = () => {
    setShowGroupsList((isShowGroupsList) => !isShowGroupsList);
  };

  const classes = useUsersGroupsListStyles();
  return (
    <>
      <List component="nav">
        <ListItem button
                  selected={!props.selectedGroupId}
                  onClick={() => props.onGroupSelected(null)}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="All Users" />
        </ListItem>
        <ListItem button onClick={toggleGroupsList}>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="User Groups" />
          {isShowGroupsList ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      </List>
      <Collapse in={isShowGroupsList} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {
            props.usersGroups.map(group => (
              <ListItem button className={classes.userGroupListItem}
                        selected={props.selectedGroupId === group.id}
                        onClick={() => props.onGroupSelected(group.id)}>
                <ListItemText primary={group.name} />
              </ListItem>
            ))
          }
          <ListItem button
                    className={classes.userGroupListItem}
                    onClick={() => {}}>
            <ListItemIcon>
              <GroupAddIcon />
            </ListItemIcon>
            <ListItemText primary="Add Group" />
          </ListItem>
        </List>
      </Collapse>
    </>
  );
};

export default UsersGroupsList;
