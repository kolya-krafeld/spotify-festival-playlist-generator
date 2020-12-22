import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import { useStoreValue } from 'react-context-hook';

const Artists = (props) => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const windowUrl = window.location.search;
    const params = new URLSearchParams(windowUrl);
    const paramArtists = params.get('artists');
    if (paramArtists) {
      const artistArray = paramArtists.split(',');
      console.log(artistArray);
      let token = JSON.parse(localStorage.getItem('token'));
      let artist;
      for (artist of artistArray) {
        searchArtist(artist, token.access_token);
      }
    }
  }, []);
  const searchArtist = (artist, token) => {
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
        setArtists((prev) => {
          return [...prev, artist];
        });
      });
  };

  return (
    <div>
      <h1>Artists</h1>
      <List dense>
        {artists.map((value) => {
          return (
            <ListItem key={value.id} button>
              <ListItemAvatar>
                <Avatar src={value.images[2]?.url} />
              </ListItemAvatar>
              <ListItemText primary={value.name} />
              <ListItemSecondaryAction>
                <Checkbox edge="end" checked />
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default Artists;
