import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  sliderContainer: {
    width: '85%',
  },
  label: {
    fontSize: '11pt',
    marginBottom: '-6px',
  },
}));

const TracksPerArtist = (props) => {
  const classes = useStyles();
  const { tracksPerArtist, setTracksPerArtist } = props;

  const handleSliderChange = (event, newSliderValue) => {
    setTracksPerArtist(newSliderValue);
  };
  return (
    <div>
      <Typography className={classes.label} gutterBottom>
        Tracks per Artist:
      </Typography>
      <Slider
        className={classes.sliderContainer}
        value={tracksPerArtist}
        onChange={handleSliderChange}
        min={0}
        max={10}
        valueLabelDisplay="auto"
      />
    </div>
  );
};

export default TracksPerArtist;
