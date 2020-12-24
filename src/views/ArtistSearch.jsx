import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import ImageUpload from '../components/ImageUpload';
import PlaylistSettings from '../components/PlaylistSettings';
import { FloatingButton as Button } from '../components/RoundButton';
import { withRouter } from 'react-router-dom';
import { getAuthToken } from '../lib/authorization';
import { ocrResult, formatOcrResult } from '../lib/imageRecognition';

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
    console.log(formatOcrResult(ocrResult));
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
      <ImageUpload />
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
