import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { checkForToken } from '../lib/helper';
import ImageUpload from '../components/ImageUpload';
import TracksPerArtist from '../components/TracksPerArtist';
import NavigationBar from '../components/NavigationBar';
import { FloatingButton as Button } from '../components/RoundButton';
import { withRouter } from 'react-router-dom';
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

const PlaylistSettings = (props) => {
  const classes = useStyles();

  const [artistsInput, setArtistsInput] = useState('');
  const [tracksPerArtist, setTracksPerArtist] = useState(3);

  useEffect(() => {
    checkForToken(props.history);
    console.log(formatOcrResult(ocrResult));
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
      <NavigationBar title={'Playlist Settings'} redirectUrl={'/'} />
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
      <TracksPerArtist
        tracksPerArtist={tracksPerArtist}
        setTracksPerArtist={setTracksPerArtist}
      />
      <Button variant="contained" color="primary" onClick={handleButtonClick}>
        Add Artists
      </Button>
    </div>
  );
};

export default withRouter(PlaylistSettings);
