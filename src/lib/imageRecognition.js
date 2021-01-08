import axios from 'axios';

export const scanImage = async (img, apiKey) => {
  const ocrResult = await callOcrApi(img, apiKey); //mockOcrResult.ParsedResults[0]?.ParsedText;
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

const mockOcrResult = {
  ParsedResults: [
    {
      FileParseExitCode: 1,
      TextOrientation: '0',
      ParsedText:
        'HURRICANE\r\n18.-20. JUNI\r\nFESTIVAL 2021\r\nEICHENRING,\r\nSCHEESSEL\r\nBISHER\r\nBESTÄTIGT!\r\nSEEED\r\nMARTIN GARRIX THE KILLERS\r\nSDP • DERMOT KENNEDY • GIANT ROOKS • LP • WHILE SHE SLEEPS • MILLENCOLIN\r\nFONTAINES D.C. FIL BO RIVA • THE DEAD SOUTH • NECK DEEP\r\nMAYDAY PARADE • KELVYN COLT, MIYA FOLICK\r\n4,\r\nDEICHKIND\r\nso\r\nTHE 1975 • VON WEGEN LISBETH • MANDO DIAO • KUMMER • JIMMY EAT WORLD • FOALS • JUJU\r\nTONES AND I • ANTILOPEN GANG • BAD RELIGION • NOTHING BUT THIEVES • TURBOSTAAT\r\nWOLF ALICE • HALF MOON RUN • AURORA • KOLLEKTIV TURMSTRASSE LIVE\r\nGEORGIA • JC STEWART • SCHROTTGRENZE • FLASH FORWARD • HELGEN\r\nKINGS OF LEON RISE AGAINST\r\nBRING ME THE HORIZON • THE HIVES • THES UHLMANN & BAND SUM 41\r\nSWISS & DIE ANDERN • FERDINAND IS LEFT BOY • BHZ • MODESELEKTOR LIVE\r\nCATFISH AND THE BOTTLEMEN FRITTENBUDE • BLUES PILLS • SKINDRED\r\nMINE • LARI LUKE • HOT MILK BLOND\r\n... UND VIELE, VIELE MEHR! INFOS: WWW.HURRICANE.DE\r\n',
      ErrorMessage: '',
      ErrorDetails: '',
    },
  ],
  OCRExitCode: 1,
  IsErroredOnProcessing: false,
  ProcessingTimeInMilliseconds: 19.962,
  SearchablePDFURL: 'Searchable PDF not generated as it was not requested.',
};
