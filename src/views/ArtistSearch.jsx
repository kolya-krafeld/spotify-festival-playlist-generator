import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import PlaylistSettings from '../components/PlaylistSettings';
import { FloatingButton as Button } from '../components/RoundButton';
import { withRouter } from 'react-router-dom';
import { getAuthToken } from '../lib/authorization';

const useStyles = makeStyles((theme) => ({
  textField: {
    borderColor: '#ffffff',
  },
  input: {
    color: '#ffffff',
    borderColor: '#ffffff',
  },
}));

const ArtistSearch = (props) => {
  const classes = useStyles();

  const [artistsInput, setArtistsInput] = useState('');
  const [tracksPerArtist, setTracksPerArtist] = useState(3);

  useEffect(() => {
    getAuthToken(process.env.REACT_APP_SPOTIFY_CLIENT_ID);
  }, []);

  const handleButtonClick = () => {
    localStorage.setItem('tracksPerArtist', tracksPerArtist);
    redirectToArtists();
  };

  const redirectToArtists = () => {
    let searchParams = new URLSearchParams();
    searchParams.append('artists', artistsInput);
    props.history.push({
      pathname: '/artists',
      search: searchParams.toString(),
    });
  };

  return (
    <div>
      <h1>Artist Search</h1>
      <TextField
        className={classes.textField}
        InputProps={{
          className: classes.input,
        }}
        color="secondary"
        value={artistsInput}
        label="Artists"
        multiline
        rows={4}
        variant="outlined"
        onChange={(e) => setArtistsInput(e.target.value)}
      />
      <PlaylistSettings
        tracksPerArtist={tracksPerArtist}
        setTracksPerArtist={setTracksPerArtist}
      />
      <Button variant="contained" color="primary" onClick={handleButtonClick}>
        Add Artists
      </Button>
    </div>
  );
};

export default withRouter(ArtistSearch);
