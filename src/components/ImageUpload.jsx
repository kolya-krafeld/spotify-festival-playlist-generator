import React, { useState } from 'react';
import { useStore } from 'react-context-hook';

import { SmallButton as Button } from '../components/RoundButton';
import { scanImage } from '../lib/imageRecognition';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  imgInput: {
    display: 'none',
  },
  image: {
    marginTop: '2rem',
    marginBottom: '-1.4rem',
    width: '85%',
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

const ImageUpload = (props) => {
  const { setOcrText, setShowTextField } = props;
  const classes = useStyles();

  const [image, setImage] = useStore('image', '');
  const [imgBase64, setImgBas64] = useStore('imgBase64', '');
  const [scanningImg, setScanningImg] = useState(false);

  const uploadImg = (file) => {
    setImgBas64(file);
  };

  const scanImg = async () => {
    setScanningImg(true);
    const oceText = await scanImage(imgBase64);
    setScanningImg(false);
    setShowTextField(true);
    setOcrText(oceText);
  };

  return (
    <div>
      <input
        className={classes.imgInput}
        accept="image/*"
        id="contained-button-file"
        type="file"
        onChange={(e) => {
          setImage(URL.createObjectURL(e.target.files[0]));
          uploadImg(e.target.files[0]);
        }}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="secondary" component="span">
          Upload Line Up Image
        </Button>
      </label>
      {image ? (
        <div>
          <img src={image} className={classes.image} alt="" />
          <Button
            onClick={scanImg}
            variant="contained"
            color="primary"
            component="span"
            disabled={scanningImg}
          >
            Scan Image
            {scanningImg ? (
              <CircularProgress
                color="secondary"
                size={24}
                className={classes.buttonProgress}
              />
            ) : null}
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default ImageUpload;
