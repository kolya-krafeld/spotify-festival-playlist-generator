const express = require('express');
const { checkError } = require('./multerLogic');
const vision = require('@google-cloud/vision');

const client = new vision.ImageAnnotatorClient({
  keyFilename: 'GoogleVisionKey.json',
});

const app = express();

app.post('/api/ocr', async (req, res) => {
  try {
    const imageDesc = await checkError(req, res);

    //Use the mv() method to place the file in upload directory (i.e. "uploads")
    let ocrText = await visionOcr(imageDesc);

    //send response
    res.send(ocrText);
  } catch (err) {
    res.status(500).send(err);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server Startet'));

async function visionOcr(img) {
  const [result] = await client.textDetection(img.path);
  return result.fullTextAnnotation.text;
}
