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
    marginTop: '40%',
  },
  logo: {
    width: '15%',
    minWidth: '75px',
    marginBottom: '25px',
  },
  title: {
    textAlign: 'center',
    fontSize: '14pt',
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    margin: '0 auto',
    display: 'flex',
    marginTop: '1.25rem',
    color: '#bfbfbf',
    width: '21rem',
  },
  button: {
    marginTop: '6rem',
  },
  attribution: {
    fontSize: '8pt',
    position: 'absolute',
    textAlign: 'center',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  contentBy: {
    float: 'left',
    paddingTop: -3,
  },
  spotifyLogo: {
    width: '50px',
    marginTop: '10px',
    marginLeft: '5px',
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
      redirect_uri:
        !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000/auth'
          : 'https://sp-festival-playlist-generator.web.app/auth',
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
        <img
          className={classes.logo}
          src={process.env.PUBLIC_URL + '/logo.png'}
          alt="Festival Playlist Generator"
        />
        <div>
          <Typography variant="button" gutterBottom className={classes.title}>
            Festival Playlist Generator
          </Typography>
        </div>
      </div>

      <div className={classes.description}>
        <Typography variant="body2" className={classes.descriptionText}>
          Create a Spotify Playlist for your next music festival! Simply upload
          a line-up image or type in the upcoming acts.
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
      <div className={classes.attribution}>
        <p className={classes.contentBy}>Content provided by</p>
        <img
          className={classes.spotifyLogo}
          src={process.env.PUBLIC_URL + '/spotify.png'}
          alt="spotify"
        />
      </div>
    </div>
  );
};

export default withTheme(Start);
