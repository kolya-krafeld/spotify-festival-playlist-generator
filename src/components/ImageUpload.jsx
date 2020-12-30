import React from 'react';
import { useStore } from 'react-context-hook';
import { SmallButton as Button } from '../components/RoundButton';
import { makeStyles } from '@material-ui/core/styles';
import { scanImage } from '../lib/imageRecognition';

const useStyles = makeStyles((theme) => ({
  imgInput: {
    display: 'none',
  },
  image: {
    marginTop: '2rem',
    marginBottom: '-1.4rem',
    width: '85%',
  },
}));

const ImageUpload = (props) => {
  const { setOcrText, setShowTextField } = props;
  const classes = useStyles();
  const [image, setImage] = useStore('image', '');
  const [imgBase64, setImgBas64] = useStore('imgBase64', '');

  const uploadImg = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgBas64(reader.result);
    };
  };

  const scanImg = async () => {
    const oceText = await scanImage(imgBase64, process.env.REACT_APP_OCR_KEY);
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
          >
            Scan Image
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default ImageUpload;
