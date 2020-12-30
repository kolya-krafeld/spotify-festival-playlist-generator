import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { useStoreValue } from 'react-context-hook';

import SearchBar from '../components/SearchBar';
import SelectionList from '../components/SelectionList';
import NavigationBar from '../components/NavigationBar';
import { checkForToken, paramsToArray } from '../lib/helper';
import { FloatingButton } from '../components/RoundButton';
import { getTokenHeader } from '../lib/authorization';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

const Tracks = (props) => {
  const classes = useStyles();
  const playlistName = useStoreValue('playlistName');
  const tracksPerArtist = useStoreValue('tracksPerArtist');
  const [tracks, setTracks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkForToken(props.history);
    setLoading(true);
    const paramArtists = paramsToArray('artists');

    const trackCalls = [];
    for (let artist of paramArtists) {
      trackCalls.push(getTopTracks(artist));
    }
    Promise.all(trackCalls)
      .then(() => {
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
      });
  }, []);

  const getTopTracks = (artistId) => {
    if (artistId !== '') {
      return axios
        .get(`https://api.spotify.com/v1/artists/${artistId}/top-tracks`, {
          params: {
            market: 'DE',
          },
          ...getTokenHeader(),
        })
        .then(async (res) => {
          const resTracks = formatTracks(
            res.data.tracks.slice(0, tracksPerArtist ? tracksPerArtist : 3)
          );
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

  const addTracksToPlaylist = async () => {
    const playlist = await createPlaylist();
    console.log(playlist);
    axios
      .post(
        `https://api.spotify.com/v1/playlists/${playlist.id}/tracks`,
        {
          uris: tracks
            .filter((track) => track.selected)
            .map((track) => track.uri),
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
          name: playlistName,
          public: false,
        },
        {
          ...getTokenHeader(),
        }
      )
      .then((res) => {
        return res.data;
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
      selected: true,
    }));
  };

  const toggleTrackSelection = (entry) => {
    let selectedTrack = entry;
    selectedTrack.selected = !selectedTrack.selected;
    const index = tracks.findIndex((track) => track.id === selectedTrack.id);
    let updatedTracks = [...tracks];
    updatedTracks[index] = selectedTrack;
    setTracks(updatedTracks);
  };
  return (
    <div>
      <NavigationBar title={'Tracks'} />
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
      <SelectionList
        entries={tracks}
        tracks
        toggleSelection={toggleTrackSelection}
        loading={loading}
      />
      <FloatingButton
        color="primary"
        variant="extended"
        onClick={addTracksToPlaylist}
        disabled
      >
        Create Playlist
        <CircularProgress
          color="secondary"
          size={24}
          className={classes.buttonProgress}
        ></CircularProgress>
      </FloatingButton>
    </div>
  );
};

export default withRouter(Tracks);
