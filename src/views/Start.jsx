import React from 'react';
import {
  generateVerifierString,
  sha256Hashing,
  base64urlencode,
} from '../lib/authorization';

import { RoundButton as Button } from '../components/RoundButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    position: 'absolute',
    top: '10%',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  title: {
    marginTop: -20,
    marginBottom: -20,
    fontSize: '48pt',
    textAlign: 'left',
  },
  description: {
    textAlign: 'center',
    margin: '22rem 1rem 0rem 1rem',
  },
  descriptionText: {
    textAlign: 'left',
    display: 'inline-block',
  },
  button: {
    marginTop: '5rem',
  },
}));

const Start = (props) => {
  const classes = useStyles();

  const authorizeUser = async () => {
    const verifier = await generateVerifierString();
    localStorage.setItem('verifier', verifier);
    const hashedVerifier = await sha256Hashing(verifier);
    const challenge = base64urlencode(hashedVerifier);

    //Redirecting User
    const params = {
      client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
      scope: 'playlist-modify-public, playlist-modify-private',
      response_type: 'code',
      redirect_uri: !(
        !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
      )
        ? 'https://sp-festival-playlist-generator.web.app/auth'
        : 'http://localhost:3000/auth',
      code_challenge_method: 'S256',
      code_challenge: challenge,
    };

    let endpoint = new URL('https://accounts.spotify.com/authorize');
    endpoint.search = new URLSearchParams(params).toString();

    window.location.href = endpoint.toString();
  };

  return (
    <div>
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>Festival</h1>
        <h1 className={classes.title}>Playlist</h1>
        <h1 className={classes.title}>Generator</h1>
      </div>

      <div className={classes.description}>
        <Typography variant="subtitle1" className={classes.descriptionText}>
          Create a Spotify Playlist for your next music festival!
        </Typography>
        <Typography variant="body2" className={classes.descriptionText}>
          Simply upload a line-up image or type in the upcoming acts.
        </Typography>
      </div>

      <Button
        onClick={authorizeUser}
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Create Playlist
      </Button>
    </div>
  );
};

export default withTheme(Start);
