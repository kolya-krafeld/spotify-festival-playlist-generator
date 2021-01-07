import axios from 'axios';

export const scanImage = async (img, apiKey) => {
  const ocrResult = await callOcrApi(img, apiKey);
  const formatedArtists = formatOcrResult(ocrResult);
  return formatedArtists;
};

//Helpers

const callOcrApi = (img, apiKey) => {
  var formData = new FormData();
  formData.append('base64Image', img);

  return axios({
    method: 'post',
    url: 'https://api.ocr.space/parse/image',
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data', apikey: apiKey },
  })
    .then((res) => {
      return res.data?.ParsedResults[0]?.ParsedText;
    })
    .catch((error) => {
      console.log(error);
    });
};

const formatOcrResult = (ocrRes) => {
  return ocrRes.replaceAll(new RegExp('\r\n', 'g'), ',\n').replaceAll('•', ',');
};
