import axios from 'axios';

export const generateVerifierString = () => {
  var array = new Uint32Array(56 / 2);
  window.crypto.getRandomValues(array);
  return Array.from(array, dec2hex).join('');
};

export const sha256Hashing = (plain) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);

  return window.crypto.subtle.digest('SHA-256', data);
};

export const base64urlencode = (a) => {
  var str = '';
  var bytes = new Uint8Array(a);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    str += String.fromCharCode(bytes[i]);
  }
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};

export const getAuthToken = (clientId) => {
  const params = new URLSearchParams(window.location.search);
  const tokenParams = {
    client_id: clientId,
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
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getTokenHeader = () => {
  const token = sessionStorage.getItem('token');
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};

//Helper

const dec2hex = (dec) => {
  return ('0' + dec.toString(16)).substr(-2);
};
