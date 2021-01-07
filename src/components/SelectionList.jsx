import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import Skeleton from '@material-ui/lab/Skeleton';
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
  skeleton: {
    backgroundColor: '#252020',
  },
}));

const SelectionList = (props) => {
  const classes = useStyles();
  const { entries, tracks, toggleSelection, loading } = props;

  const getArtistsList = (artists) => {
    return artists.map((artist) => artist.name).join(', ');
  };
  return (
    <div>
      {loading ? (
        //Loading Skeleton
        <List dense className={classes.list}>
          {[0, 1, 2, 3, 4, 5].map((item) => (
            <ListItem key={item}>
              <ListItemAvatar>
                <Skeleton
                  className={classes.skeleton}
                  variant={tracks ? 'rect' : 'circle'}
                  width={40}
                  height={40}
                  animation="pulse"
                />
              </ListItemAvatar>
              <ListItemText
                classes={{
                  primary: `${classes.text} ${classes.primary}`,
                  secondary: `${classes.text} ${classes.secondary}`,
                }}
              >
                <Skeleton
                  variant="text"
                  animation="pulse"
                  className={classes.skeleton}
                />
                {tracks ? (
                  <Skeleton
                    variant="text"
                    animation="pulse"
                    className={classes.skeleton}
                  />
                ) : null}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      ) : (
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
                    <ListItemSecondaryAction
                      onClick={() => toggleSelection(entry)}
                    >
                      <Checkbox edge="end" checked={entry.selected} />
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })
            : ''}
        </List>
      )}
    </div>
  );
};

export default SelectionList;
