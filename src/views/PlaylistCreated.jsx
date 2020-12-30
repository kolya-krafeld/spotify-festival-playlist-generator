import React from 'react';
import { RoundButton as Button, SmallButton } from '../components/RoundButton';
import { useStoreValue } from 'react-context-hook';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: { marginTop: '30%' },
  buttonContainer: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    width: '100%',
    transform: 'translateX(-50%)',
  },
  startButton: {
    marginTop: '2rem',
  },
}));

const PlaylistCreated = (props) => {
  const classes = useStyles();

  const playlistName = useStoreValue('playlistName');
  const playlistUrl = useStoreValue('playlistUrl');

  const redirectToStart = () => {
    props.history.push('/start');
  };

  return (
    <div>
      <h1 className={classes.title}>Playlist '{playlistName}' created</h1>
      <div className={classes.buttonContainer}>
        <Button variant="contained" color="primary">
          <a href={playlistUrl}>Go to playlist</a>
        </Button>
        <div>
          <SmallButton
            onClick={redirectToStart}
            variant="contained"
            color="secondary"
            component="span"
            className={classes.startButton}
          >
            Go back to Start Page
          </SmallButton>
        </div>
      </div>
    </div>
  );
};

export default withRouter(PlaylistCreated);
