const express = require('express');
var cors = require('cors');
const { checkError } = require('./multerLogic');
const vision = require('@google-cloud/vision');
const fs = require('fs');

const client = new vision.ImageAnnotatorClient({
  keyFilename: 'GoogleVisionKey.json',
});

const app = express();

app.use(cors());

app.post('/api/ocr', async (req, res) => {
  try {
    const imageDesc = await checkError(req, res);
    const ocrText = await visionOcr(imageDesc);

    fs.unlink(imageDesc.path, (err) => {
      if (err) throw err;
      console.log('File deleted!');
    });

    res.send(ocrText);
  } catch (err) {
    res.status(500).send(err);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server Startet'));

const visionOcr = async (image) => {
  const [result] = await client.textDetection(image.path);
  return result.fullTextAnnotation.text;
};
