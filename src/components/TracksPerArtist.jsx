import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const TracksPerArtist = (props) => {
  const { tracksPerArtist, setTracksPerArtist } = props;

  const handleSliderChange = (event, newSliderValue) => {
    setTracksPerArtist(newSliderValue);
  };
  return (
    <div>
      <Typography id="disabled-slider" gutterBottom>
        Tracks per Artist
      </Typography>
      <Slider
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
