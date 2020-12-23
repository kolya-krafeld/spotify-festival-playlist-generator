import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const PlaylistSettings = () => {
  return (
    <div>
      <Typography id="disabled-slider" gutterBottom>
        Tracks per Artist
      </Typography>
      <Slider defaultValue={4} min={0} max={10} valueLabelDisplay="auto" />
    </div>
  );
};

export default PlaylistSettings;
