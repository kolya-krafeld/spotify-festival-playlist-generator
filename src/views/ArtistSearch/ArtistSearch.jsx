import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ArtistSearch = () => {
  const [token, setToken] = useState();

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
      .then((res) => setToken(res.data));
  }, []);

  return (
    <div>
      <h1>Artist Search</h1>
    </div>
  );
};

export default ArtistSearch;
