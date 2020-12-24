import React, { useState } from 'react';
import { SmallButton as Button } from '../components/RoundButton';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  imgInput: {
    display: 'none',
  },
  image: {
    marginTop: '1rem',
    width: '80%',
  },
}));

const ImageUpload = () => {
  const classes = useStyles();
  const [image, setImage] = useState();
  return (
    <div>
      <input
        className={classes.imgInput}
        accept="image/*"
        id="contained-button-file"
        type="file"
        onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="secondary" component="span">
          Upload Line Up Image
        </Button>
      </label>
      <img src={image} className={classes.image} />
    </div>
  );
};

export default ImageUpload;
