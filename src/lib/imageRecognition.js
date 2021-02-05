import axios from 'axios';

export const scanImage = async (img) => {
  const ocrResult = mockOcrResult; //await callOcrApi(img);
  const formatedArtists = formatOcrResult(ocrResult);
  return formatedArtists;
};

//Helpers

const callOcrApi = (img) => {
  var formData = new FormData();
  formData.append('image', img);

  return axios({
    method: 'post',
    url: 'http://localhost:5000/api/ocr',
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data' },
  })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const formatOcrResult = (ocrRes) => {
  return ocrRes
    .replace(/(?:\r\n|\r|\n)/g, ',\n')
    .replaceAll('•', ',')
    .replaceAll('·', ',')
    .replaceAll('«', ',');
};

const mockOcrResult = `HURRICANE
EICHENRING,
SCHEESSEL
18.-20. JUNI
FESTIVAL 2021
BISHER
BESTÄTIGT!
SEEED • MARTIN GARRIX • THE KILLERS
FR
SDP · DERMOT KENNEDY GIANT ROOKS LP WHILE SHE SLEEPS MILLENCOLIN
FONTAINES D.C. · FIL BO RIVA · THE DEAD SOUTH NECK DEEP
MAYDAY PARADE KELVYN COLT MIYA FOLICK
DEICHKIND «
SA
THE 1975 VON WEGEN LISBETH · MANDO DIAO · KUMMER · JIMMY EAT WORLD FOALS JUJU
TONES AND I · ANTILOPEN GANG · BAD RELIGION NOTHING BUT THIEVES TURBOSTAAT
WOLF ALICE · HALF MOON RUN · AURORA · KOLLEKTIV TURMSTRASSE LIVE
GEORGIA · JC STEWART · SCHROTTGRENZE · FLASH FORWARD · HELGEN
o KINGS OF LEON • RISE AGAINST
BRING ME THE HORIZON · THE HIVES · THEES UHLMANN & BAND · SUM 41
ISS & DIE ANDERN · FERDINAND IS LEFT BOY · BHZ · MODESELEKTOR LIVE
CATFISH AND THE BOTTLEMEN • FRITTENBUDE · BLUES PILLS · SKINDRED
MINE · LARI LUKE · HOT MILK · BLOND
.. UND VIELE, VIELE MEHR! INFOS: WWW.HURRICANE.DE`;
