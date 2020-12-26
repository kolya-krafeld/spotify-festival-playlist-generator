import React, { useEffect, useState } from 'react';
import { useStore } from 'react-context-hook';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import { checkForToken } from '../lib/helper';
import ImageUpload from '../components/ImageUpload';
import TracksPerArtist from '../components/TracksPerArtist';
import NavigationBar from '../components/NavigationBar';
import { FloatingButton } from '../components/RoundButton';
import { withRouter } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme) => ({
  nameInput: {
    width: '85%',
    borderRadius: '1.5rem',
    padding: '0.42rem 1.5rem 0.4rem 1.5rem',
    color: '#ffffff',
    backgroundColor: '#222222',
    fontSize: '10.5pt',
    marginBottom: '2rem',
    fontWeight: 500,
    '&::placeholder': {
      color: 'red',
    },
  },
  textLink: { marginTop: '1.5rem' },
  textField: {
    padding: '1rem 1.5rem 1rem 1.5rem',
    borderRadius: '0.9rem',
    color: '#ffffff',
    backgroundColor: '#222222',
    fontSize: '9pt',
    marginTop: '2rem',
    width: '85%',
  },
  input: {
    color: '#ffffff',
    borderColor: '#ffffff',
  },
  footerSpacer: {
    height: '7rem',
  },
}));

const PlaylistSettings = (props) => {
  const classes = useStyles();

  const [name, setName] = useStore('playlistName', '');
  const [tracksPerArtist, setTracksPerArtist] = useState(3);
  const [artistsInput, setArtistsInput] = useStore('artistsInput', '');

  useEffect(() => {
    checkForToken(props.history);
  }, [props.history]);

  const handleButtonClick = () => {
    localStorage.setItem('tracksPerArtist', tracksPerArtist);
    redirectToArtists();
  };

  const redirectToArtists = () => {
    let searchParams = new URLSearchParams();
    searchParams.append('artists', artistsInput);
    props.history.push({
      pathname: '/artists',
      search: searchParams.toString(),
    });
  };

  return (
    <div>
      <NavigationBar title={'Playlist Settings'} redirectUrl={'/'} />
      <InputBase
        type="text"
        placeholder="Playlist Name"
        className={classes.nameInput}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Typography>Public Playlist</Typography>
      <Switch color="primary" />
      <TracksPerArtist
        tracksPerArtist={tracksPerArtist}
        setTracksPerArtist={setTracksPerArtist}
      />
      <ImageUpload setOcrText={setArtistsInput} />

      <Typography variant="button" display="block" className={classes.textLink}>
        <Link color="secondary">No Image? Insert Artists From Text</Link>
      </Typography>
      <div>
        {artistsInput !== '' ? (
          <InputBase
            className={classes.textField}
            value={artistsInput}
            placeholder="Artists"
            multiline
            onChange={(e) => setArtistsInput(e.target.value)}
          />
        ) : null}
      </div>
      <div className={classes.footerSpacer}></div>
      <FloatingButton
        color="primary"
        variant="extended"
        onClick={handleButtonClick}
      >
        Add Artists
      </FloatingButton>
    </div>
  );
};

export default withRouter(PlaylistSettings);
