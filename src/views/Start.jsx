import React from 'react';
import {
  generateVerifierString,
  sha256Hashing,
  base64urlencode,
} from '../lib/authorization';

import { RoundButton as Button } from '../components/RoundButton';

const Start = () => {
  const authorizeUser = async () => {
    const verifier = await generateVerifierString();
    localStorage.setItem('verifier', verifier);
    const hashedVerifier = await sha256Hashing(verifier);
    const challenge = base64urlencode(hashedVerifier);

    //Redirecting User
    const params = {
      client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
      response_type: 'code',
      redirect_uri: 'http://localhost:3000/artistSearch',
      code_challenge_method: 'S256',
      code_challenge: challenge,
    };

    let endpoint = new URL('https://accounts.spotify.com/authorize');
    endpoint.search = new URLSearchParams(params).toString();

    window.location.href = endpoint.toString();
  };

  return (
    <div>
      <h1>Start</h1>
      <Button onClick={authorizeUser} variant="contained" color="primary">
        Create Playlist
      </Button>
    </div>
  );
};

export default Start;
