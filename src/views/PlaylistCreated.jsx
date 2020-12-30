import React from 'react';
import { RoundButton as Button, SmallButton } from '../components/RoundButton';
import { useStoreValue } from 'react-context-hook';

import { Typography } from '@material-ui/core';

const PlaylistCreated = () => {
  const playlistName = useStoreValue('playlistName');
  return (
    <div>
      <h1>Playlist '{playlistName}' created</h1>
      <Button variant="contained" color="primary">
        Go to playlist
      </Button>
      <div>
        <SmallButton
          onClick={redirectToStart}
          variant="contained"
          color="secondary"
          component="span"
        >
          Go to Start Page
        </SmallButton>
      </div>
    </div>
  );
};

export default PlaylistCreated;
