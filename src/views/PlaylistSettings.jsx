import React, { useEffect, useState } from 'react';
import { useStore, useStoreValue } from 'react-context-hook';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import { checkForToken } from '../lib/helper';
import ImageUpload from '../components/ImageUpload';
import BasicSettings from '../components/BasicSettings';
import NavigationBar from '../components/NavigationBar';
import { FloatingButton } from '../components/RoundButton';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  nameInput: {
    width: '85%',
    borderRadius: '1.5rem',
    padding: '0.42rem 1.5rem 0.4rem 1.5rem',
    color: '#ffffff',
    backgroundColor: '#252020',
    fontSize: '10.5pt',
    marginBottom: '2rem',
    fontWeight: 500,
  },
  textLink: {
    marginTop: '1.75rem',
  },
  textField: {
    padding: '1rem 1.5rem 1rem 1.5rem',
    borderRadius: '0.9rem',
    color: '#ffffff',
    backgroundColor: '#252020',
    fontSize: '9pt',
    marginTop: '2rem',
    width: '85%',
  },
  textFieldInfoText: {
    marginTop: 2,
    fontSize: '10pt',
    color: '#777474',
  },
  footerSpacer: {
    height: '7rem',
  },
}));

const PlaylistSettings = (props) => {
  const classes = useStyles();

  const [name, setName] = useStore('playlistName', '');
  const [artistsInput, setArtistsInput] = useStore('artistsInput', '');
  const [showTextField, setShowTextField] = useState(false);
  const image = useStoreValue('image');

  useEffect(() => {
    checkForToken(props.history);
  }, [props.history]);

  const handleButtonClick = () => {
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
      <BasicSettings />
      <ImageUpload
        setOcrText={setArtistsInput}
        setShowTextField={setShowTextField}
      />

      {!image && !showTextField ? (
        <Typography
          variant="button"
          display="block"
          className={classes.textLink}
        >
          <Link color="secondary" onClick={() => setShowTextField(true)}>
            No Image? Insert Artists From Text
          </Link>
        </Typography>
      ) : null}
      <div>
        {artistsInput !== '' || showTextField ? (
          <div>
            <InputBase
              className={classes.textField}
              value={artistsInput}
              placeholder="Artists"
              multiline
              onChange={(e) => setArtistsInput(e.target.value)}
            />
            <Typography className={classes.textFieldInfoText}>
              Artists should be Comma separated!
            </Typography>
          </div>
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
