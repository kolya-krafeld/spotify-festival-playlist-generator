import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { RoundButton as Button } from '../components/RoundButton';
import { withRouter } from 'react-router-dom';

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

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tokenParams = {
      client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
      grant_type: 'authorization_code',
      code: params.get('code'),
      redirect_uri: 'http://localhost:3000/artistSearch',
      code_verifier: window.localStorage.getItem('verifier'),
    };

    axios
      .post('https://accounts.spotify.com/api/token', null, {
        params: tokenParams,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((res) => {
        sessionStorage.setItem('token', res.data?.access_token);
      });
  }, []);

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
      <Button
        variant="contained"
        color="primary"
        onClick={() => props.history.push('/artists')}
      >
        Add Artists
      </Button>
    </div>
  );
};

export default withRouter(ArtistSearch);
