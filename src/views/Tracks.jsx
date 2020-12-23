import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from '../components/SearchBar';
import SelectionList from '../components/SelectionList';
import { paramsToArray } from '../lib/helper';
import { FloatingButton } from '../components/RoundButton';

const Tracks = () => {
  const [tracks, setTracks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const paramArtists = paramsToArray('artists');
    let artist;
    for (artist of paramArtists) {
      getTopTracks(artist);
    }
  }, []);

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
          const resTracks = formatTracks(res.data.tracks);
          console.log(resTracks);
          resTracks.forEach((newTrack) => {
            if (!tracks.map((track) => track.id).includes(newTrack.id)) {
              setTracks((prev) => {
                return [...prev, newTrack];
              });
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const addTrack = (trackName) => {
    if (trackName !== '') {
      const token = sessionStorage.getItem('token');
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      axios
        .get('https://api.spotify.com/v1/search', {
          params: {
            q: trackName,
            type: 'track',
            offset: 0,
            limit: 1,
          },
          ...config,
        })
        .then((res) => {
          const searchedTrack = formatTracks(res.data?.tracks?.items);
          if (
            searchedTrack.length > 0 &&
            !tracks.map((track) => track.id).includes(searchedTrack[0].id)
          ) {
            setTracks((prev) => {
              return [searchedTrack[0], ...prev];
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const formatTracks = (unformatedTracks) => {
    return unformatedTracks.map((track) => ({
      artists: track.artists.map((artist) => ({
        id: artist.id,
        name: artist.name,
      })),
      id: track.id,
      name: track.name,
      uri: track.uri,
      images: track?.album?.images,
    }));
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
            addTrack(searchTerm);
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
