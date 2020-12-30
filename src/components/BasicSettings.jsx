import React from 'react';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { useStore } from 'react-context-hook';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  grid: {
    width: '85%',
    marginLeft: '7.5%',
    marginBottom: '1.5rem',
  },
  switchLabel: {
    float: 'left',
  },
  switch: {
    float: 'right',
  },
}));

const BasicSettings = () => {
  const classes = useStyles();

  const [publicPlaylist, setPublicPlaylist] = useStore('publicPlaylist', false);
  const [tracksPerArtist, setTracksPerArtist] = useStore('tracksPerArtist', 3);

  const handleSliderChange = (e, newSliderValue) => {
    setTracksPerArtist(newSliderValue);
  };

  return (
    <Grid container spacing={1} className={classes.grid} alignItems="center">
      <Grid item xs={6}>
        <Typography className={classes.switchLabel}>Public Playlist</Typography>
      </Grid>
      <Grid item xs={6}>
        <Switch
          color="primary"
          className={classes.switch}
          checked={publicPlaylist}
          onChange={(e) => setPublicPlaylist(e.target.checked)}
        />
      </Grid>
      <Grid item xs={5}>
        <Typography className={classes.switchLabel}>
          Tracks per Artist
        </Typography>
      </Grid>
      <Grid item xs={7}>
        <Slider
          className={classes.sliderContainer}
          value={tracksPerArtist}
          onChange={handleSliderChange}
          min={0}
          max={10}
          valueLabelDisplay="auto"
        />
      </Grid>
    </Grid>
  );
};

export default BasicSettings;
