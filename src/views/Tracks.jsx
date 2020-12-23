import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from '../components/SearchBar';
import SelectionList from '../components/SelectionList';
import { paramsToArray } from '../lib/helper';
import { FloatingButton } from '../components/RoundButton';
import { getTokenHeader } from '../lib/authorization';

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
      axios
        .get(`	https://api.spotify.com/v1/artists/${artistId}/top-tracks`, {
          params: {
            market: 'DE',
          },
          ...getTokenHeader(),
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
      axios
        .get('https://api.spotify.com/v1/search', {
          params: {
            q: trackName,
            type: 'track',
            offset: 0,
            limit: 1,
          },
          ...getTokenHeader(),
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

  const getTrackUris = () => {
    return tracks.map((track) => track.uri).join();
  };

  const addTracksToPlaylist = async () => {
    const playlistId = await createPlaylist();
    axios
      .post(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        {
          uris: tracks.map((track) => track.uri),
        },
        {
          ...getTokenHeader(),
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const createPlaylist = async () => {
    const user = await getSpotifyUser();
    return axios
      .post(
        `	https://api.spotify.com/v1/users/${user.id}/playlists`,
        {
          name: 'Test',
          public: false,
        },
        {
          ...getTokenHeader(),
        }
      )
      .then((res) => {
        return res.data.id;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getSpotifyUser = () => {
    return axios
      .get('https://api.spotify.com/v1/me', {
        ...getTokenHeader(),
      })
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
      });
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
      <FloatingButton
        color="primary"
        variant="extended"
        onClick={addTracksToPlaylist}
      >
        Create Playlist
      </FloatingButton>
    </div>
  );
};

export default Tracks;
