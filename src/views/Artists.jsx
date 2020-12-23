import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from '../components/SearchBar';
import SelectionList from '../components/SelectionList';
import { paramsToArray } from '../lib/helper';

const Artists = (props) => {
  const [artists, setArtists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const paramArtists = paramsToArray('artists');
    console.log(paramArtists);
    let artist;
    for (artist of paramArtists) {
      searchArtist(artist);
    }
  }, []);

  const searchArtist = (artist) => {
    if (artist !== '') {
      const token = sessionStorage.getItem('token');
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      axios
        .get('https://api.spotify.com/v1/search', {
          params: {
            q: artist,
            type: 'artist',
            offset: 0,
            limit: 1,
          },
          ...config,
        })
        .then((res) => {
          const artist = res.data.artists.items[0];
          if (!artists.map((artist) => artist.id).includes(artist.id)) {
            setArtists((prev) => {
              return [...prev, artist];
            });
          }
        });
    }
  };

  return (
    <div>
      <h1>Artists</h1>
      <SearchBar
        placeholder={'Search for additional Artists'}
        value={searchTerm}
        handleInput={(e) => setSearchTerm(e.target.value)}
        handleSubmit={(e) => {
          if (e.key === 'Enter') {
            let token = JSON.parse(localStorage.getItem('token'));
            searchArtist(searchTerm, token.access_token);
            setSearchTerm('');
            e.preventDefault();
          }
        }}
      />
      <SelectionList entries={artists} />
    </div>
  );
};

export default Artists;
