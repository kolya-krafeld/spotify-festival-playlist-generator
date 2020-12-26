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
  list: {
    marginBottom: '6rem',
  },

  text: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  primary: { marginTop: '-1px' },
  secondary: {
    color: '#B3B3B3',
    fontSize: '10pt',
    marginTop: '-3px',
    marginBottom: '-1px',
  },
}));

const SelectionList = (props) => {
  const classes = useStyles();
  const { entries, tracks, toggleSelection } = props;

  const getArtistsList = (artists) => {
    return artists.map((artist) => artist.name).join(', ');
  };
  return (
    <List dense className={classes.list}>
      {entries
        ? entries.map((entry) => {
            return (
              <ListItem
                key={entry.id}
                button
                onClick={() => toggleSelection(entry)}
              >
                <ListItemAvatar>
                  <Avatar
                    src={entry.images[2]?.url}
                    variant={tracks ? 'square' : null}
                  />
                </ListItemAvatar>
                <ListItemText
                  classes={{
                    primary: `${classes.text} ${classes.primary}`,
                    secondary: `${classes.text} ${classes.secondary}`,
                  }}
                  primary={entry.name}
                  secondary={tracks ? getArtistsList(entry.artists) : null}
                />
                <ListItemSecondaryAction onClick={() => toggleSelection(entry)}>
                  <Checkbox edge="end" checked={entry.selected} />
                </ListItemSecondaryAction>
              </ListItem>
            );
          })
        : ''}
    </List>
  );
};

export default SelectionList;
