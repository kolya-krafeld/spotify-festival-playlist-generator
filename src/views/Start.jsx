import React from 'react';

import {
  generateVerifierString,
  sha256Hashing,
  base64urlencode,
} from '../lib/authorization';
import { RoundButton as Button } from '../components/RoundButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    marginTop: '20%',
  },
  logo: {
    width: '15%',
    minWidth: '75px',
    marginBottom: '25px',
  },
  title: {
    textAlign: 'center',
    fontSize: '14pt',
  },
  description: {
    textAlign: 'center',
    margin: '12rem 1rem 0rem 1rem',
  },
  descriptionText: {
    textAlign: 'center',
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

      <Stepper className={classes.stepper} orientation="vertical">
        <Step>
          <StepLabel>Upload Line-Up Imgage</StepLabel>
          <StepContent></StepContent>
        </Step>
        <Step>
          <StepLabel>Select Artists</StepLabel>
          <StepContent></StepContent>
        </Step>
        <Step>
          <StepLabel>Select Top Tracks</StepLabel>
          <StepContent></StepContent>
        </Step>
      </Stepper>

      {/* <div className={classes.description}>
        <Typography variant="subtitle1" className={classes.descriptionText}>
          Create a Spotify Playlist for your next music festival!
        </Typography>
        <Typography variant="body2" className={classes.descriptionText}>
          Simply upload a line-up image or type in the upcoming acts.
        </Typography>
      </div> */}

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
