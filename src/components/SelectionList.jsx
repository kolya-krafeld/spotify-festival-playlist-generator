import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';

const SelectionList = (props) => {
  const { entries } = props;
  return (
    <List>
      {entries
        ? entries.map((entry) => {
            return (
              <ListItem key={entry.id} button>
                <ListItemAvatar>
                  <Avatar src={entry.images[2]?.url} />
                </ListItemAvatar>
                <ListItemText primary={entry.name} />
                <ListItemSecondaryAction>
                  <Checkbox edge="end" checked />
                </ListItemSecondaryAction>
              </ListItem>
            );
          })
        : ''}
    </List>
  );
};

export default SelectionList;
