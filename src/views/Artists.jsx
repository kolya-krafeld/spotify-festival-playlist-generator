import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import SearchBar from '../components/SearchBar';
import SelectionList from '../components/SelectionList';
import NavigationBar from '../components/NavigationBar';
import { checkForToken, paramsToArray } from '../lib/helper';
import { FloatingButton } from '../components/RoundButton';
import { getTokenHeader } from '../lib/authorization';

const Artists = (props) => {
  const [artists, setArtists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkForToken(props.history);
    setLoading(true);
    const paramArtists = paramsToArray('artists');

    const artistCalls = [];
    for (let artist of paramArtists) {
      artistCalls.push(searchArtist(artist, true));
    }
    Promise.all(artistCalls)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const searchArtist = (artist, append) => {
    if (artist !== '') {
      return axios
        .get('https://api.spotify.com/v1/search', {
          params: {
            q: artist,
            type: 'artist',
            offset: 0,
            limit: 1,
          },
          ...getTokenHeader(),
        })
        .then((res) => {
          const resArtist = formatArtist(res.data.artists.items[0]);
          if (!artists.map((artist) => artist.id).includes(resArtist.id)) {
            setArtists((prev) => {
              return append ? [...prev, resArtist] : [resArtist, ...prev];
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const formatArtist = (artist) => {
    return {
      id: artist.id,
      name: artist.name,
      images: artist.images,
      selected: true,
    };
  };

  const toggleArtistSelection = (entry) => {
    let selectedArtist = entry;
    selectedArtist.selected = !selectedArtist.selected;
    const index = artists.findIndex(
      (artist) => artist.id === selectedArtist.id
    );
    let updatedArtists = [...artists];
    updatedArtists[index] = selectedArtist;
    setArtists(updatedArtists);
  };

  const redirectToTracks = () => {
    let searchParams = new URLSearchParams();
    searchParams.append(
      'artists',
      artists
        .filter((artist) => artist.selected)
        .map((artist) => artist.id)
        .join()
    );
    props.history.push({
      pathname: '/tracks',
      search: searchParams.toString(),
    });
  };

  return (
    <div>
      <NavigationBar title={'Artists'} />
      <SearchBar
        placeholder={'Add more Artists'}
        value={searchTerm}
        handleInput={(e) => setSearchTerm(e.target.value)}
        handleSubmit={(e) => {
          if (e.key === 'Enter') {
            searchArtist(searchTerm, false);
            setSearchTerm('');
            e.preventDefault();
          }
        }}
      />
      <SelectionList
        entries={artists}
        toggleSelection={toggleArtistSelection}
        loading={loading}
      />
      <FloatingButton
        color="primary"
        variant="extended"
        onClick={redirectToTracks}
      >
        Select Artists
      </FloatingButton>
    </div>
  );
};

export default withRouter(Artists);
