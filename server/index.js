const express = require('express');

const app = express();

quickstart();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server Startet'));

async function quickstart() {
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ImageAnnotatorClient({
    keyFilename: 'GoogleVisionKey.json',
  });

  // Performs label detection on the image file
  const [result] = await client.textDetection('./rar.jpg');
  console.log(result.fullTextAnnotation.text);
  const detections = result.textAnnotations;
}
