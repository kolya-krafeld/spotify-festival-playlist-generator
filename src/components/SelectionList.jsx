import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  text: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
}));

const SelectionList = (props) => {
  const classes = useStyles();
  const { entries, tracks } = props;
  return (
    <List dense>
      {entries
        ? entries.map((entry) => {
            return (
              <ListItem key={entry.id} button>
                <ListItemAvatar>
                  <Avatar src={entry.images[2]?.url} />
                </ListItemAvatar>
                <ListItemText
                  classes={{ primary: classes.text }}
                  primary={entry.name}
                  secondary={tracks ? 'Artist' : null}
                />
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
