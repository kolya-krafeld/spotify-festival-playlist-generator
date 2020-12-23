import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import SearchBar from '../components/SearchBar';
import SelectionList from '../components/SelectionList';
import { paramsToArray } from '../lib/helper';
import { FloatingButton } from '../components/RoundButton';

const Artists = (props) => {
  const [artists, setArtists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const paramArtists = paramsToArray('artists');
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
          const resArtist = res.data.artists.items[0];
          const artist = {
            id: resArtist.id,
            name: resArtist.name,
            images: resArtist.images,
          };
          if (!artists.map((artist) => artist.id).includes(artist.id)) {
            setArtists((prev) => {
              return [...prev, artist];
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <h1>Artists</h1>
      <SearchBar
        placeholder={'Add more Artists'}
        value={searchTerm}
        handleInput={(e) => setSearchTerm(e.target.value)}
        handleSubmit={(e) => {
          if (e.key === 'Enter') {
            searchArtist(searchTerm);
            setSearchTerm('');
            e.preventDefault();
          }
        }}
      />
      <SelectionList entries={artists} />
      <FloatingButton
        color="primary"
        variant="extended"
        onClick={() => props.history.push('/tracks')}
      >
        Add Tracks
      </FloatingButton>
    </div>
  );
};

export default withRouter(Artists);
