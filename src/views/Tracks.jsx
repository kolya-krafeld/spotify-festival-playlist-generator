import React, { useState } from 'react';
import axios from 'axios';

import SearchBar from '../components/SearchBar';
import SelectionList from '../components/SelectionList';
import { paramsToArray } from '../lib/helper';
import { FloatingButton } from '../components/RoundButton';

const Tracks = () => {
  const [tracks, setTracks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getTopTracks = (artistId) => {
    if (artistId !== '') {
      const token = sessionStorage.getItem('token');
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      axios
        .get(`	https://api.spotify.com/v1/artists/${artistId}/top-tracks`, {
          params: {
            market: 'DE',
          },
          ...config,
        })
        .then((res) => {
          const resTracks = res.data.tracks.map((track) => ({
            artists: track.artists.map((artist) => ({
              id: artist.id,
              name: artist.name,
            })),
            id: track.id,
            name: track.name,
            uri: track.uri,
            images: track?.album?.images,
          }));
          console.log(resTracks);

          setTracks((prev) => {
            return [...prev, ...resTracks];
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div>
      <h1>Tracks</h1>
      <SearchBar
        placeholder={'Add more Tracks'}
        value={searchTerm}
        handleInput={(e) => setSearchTerm(e.target.value)}
        handleSubmit={(e) => {
          if (e.key === 'Enter') {
            getTopTracks(searchTerm);
            setSearchTerm('');
            e.preventDefault();
          }
        }}
      />
      <SelectionList entries={tracks} tracks />
      <FloatingButton color="primary" variant="extended">
        Create Playlist
      </FloatingButton>
    </div>
  );
};

export default Tracks;
