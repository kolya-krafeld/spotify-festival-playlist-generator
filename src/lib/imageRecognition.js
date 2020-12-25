export const formatOcrResult = (ocrRes) => {
  return ocrRes.ParsedResults[0].ParsedText.replaceAll(
    new RegExp('\r\n', 'g'),
    ',\n'
  ).replaceAll('•', ',');
};

export const ocrResult = {
  ParsedResults: [
    {
      Overlay: {
        Lines: [
          {
            LineText: 'HURRICANE',
            Words: [
              {
                WordText: 'HURRICANE',
                Left: 644,
                Top: 36,
                Height: 100,
                Width: 628,
              },
            ],
            MaxHeight: 100,
            MinTop: 36,
          },
          {
            LineText: '18.-20. JUNI',
            Words: [
              {
                WordText: '18.-20.',
                Left: 397,
                Top: 101,
                Height: 26,
                Width: 107,
              },
              {
                WordText: 'JUNI',
                Left: 514,
                Top: 101,
                Height: 26,
                Width: 66,
              },
            ],
            MaxHeight: 26,
            MinTop: 101,
          },
          {
            LineText: 'FESTIVAL 2021',
            Words: [
              {
                WordText: 'FESTIVAL',
                Left: 821,
                Top: 153,
                Height: 34,
                Width: 167,
              },
              {
                WordText: '2021',
                Left: 1010,
                Top: 153,
                Height: 34,
                Width: 86,
              },
            ],
            MaxHeight: 34,
            MinTop: 153,
          },
          {
            LineText: 'EICHENRING,',
            Words: [
              {
                WordText: 'EICHENRING,',
                Left: 1334,
                Top: 89,
                Height: 31,
                Width: 181,
              },
            ],
            MaxHeight: 31,
            MinTop: 89,
          },
          {
            LineText: 'SCHEESSEL',
            Words: [
              {
                WordText: 'SCHEESSEL',
                Left: 1333,
                Top: 121,
                Height: 26,
                Width: 164,
              },
            ],
            MaxHeight: 26,
            MinTop: 121,
          },
          {
            LineText: 'BISHER',
            Words: [
              {
                WordText: 'BISHER',
                Left: 1616,
                Top: 173,
                Height: 38,
                Width: 104,
              },
            ],
            MaxHeight: 38,
            MinTop: 173,
          },
          {
            LineText: 'BESTÄTIGT!',
            Words: [
              {
                WordText: 'BESTÄTIGT!',
                Left: 1593,
                Top: 207,
                Height: 45,
                Width: 159,
              },
            ],
            MaxHeight: 45,
            MinTop: 207,
          },
          {
            LineText: 'SEEED',
            Words: [
              {
                WordText: 'SEEED',
                Left: 176,
                Top: 238,
                Height: 60,
                Width: 206,
              },
            ],
            MaxHeight: 60,
            MinTop: 238,
          },
          {
            LineText: 'MARTIN GARRIX THE KILLERS',
            Words: [
              {
                WordText: 'MARTIN',
                Left: 450,
                Top: 239,
                Height: 58,
                Width: 254,
              },
              {
                WordText: 'GARRIX',
                Left: 730,
                Top: 238,
                Height: 60,
                Width: 248,
              },
              {
                WordText: 'THE',
                Left: 1041,
                Top: 239,
                Height: 58,
                Width: 128,
              },
              {
                WordText: 'KILLERS',
                Left: 1194,
                Top: 238,
                Height: 60,
                Width: 270,
              },
            ],
            MaxHeight: 60,
            MinTop: 238,
          },
          {
            LineText:
              'SDP • DERMOT KENNEDY • GIANT ROOKS • LP • WHILE SHE SLEEPS • MILLENCOLIN',
            Words: [
              {
                WordText: 'SDP',
                Left: 178,
                Top: 317,
                Height: 31,
                Width: 67,
              },
              {
                WordText: '•',
                Left: 256,
                Top: 327,
                Height: 7,
                Width: 6,
              },
              {
                WordText: 'DERMOT',
                Left: 275,
                Top: 317,
                Height: 31,
                Width: 137,
              },
              {
                WordText: 'KENNEDY',
                Left: 423,
                Top: 318,
                Height: 29,
                Width: 157,
              },
              {
                WordText: '•',
                Left: 590,
                Top: 327,
                Height: 7,
                Width: 6,
              },
              {
                WordText: 'GIANT',
                Left: 608,
                Top: 317,
                Height: 31,
                Width: 100,
              },
              {
                WordText: 'ROOKS',
                Left: 720,
                Top: 317,
                Height: 31,
                Width: 113,
              },
              {
                WordText: '•',
                Left: 844,
                Top: 327,
                Height: 7,
                Width: 7,
              },
              {
                WordText: 'LP',
                Left: 863,
                Top: 318,
                Height: 29,
                Width: 39,
              },
              {
                WordText: '•',
                Left: 914,
                Top: 327,
                Height: 7,
                Width: 7,
              },
              {
                WordText: 'WHILE',
                Left: 931,
                Top: 318,
                Height: 29,
                Width: 106,
              },
              {
                WordText: 'SHE',
                Left: 1048,
                Top: 317,
                Height: 31,
                Width: 65,
              },
              {
                WordText: 'SLEEPS',
                Left: 1124,
                Top: 317,
                Height: 31,
                Width: 124,
              },
              {
                WordText: '•',
                Left: 1259,
                Top: 327,
                Height: 7,
                Width: 7,
              },
              {
                WordText: 'MILLENCOLIN',
                Left: 1278,
                Top: 317,
                Height: 31,
                Width: 224,
              },
            ],
            MaxHeight: 31,
            MinTop: 317,
          },
          {
            LineText: 'FONTAINES D.C. FIL BO RIVA • THE DEAD SOUTH • NECK DEEP',
            Words: [
              {
                WordText: 'FONTAINES',
                Left: 179,
                Top: 359,
                Height: 31,
                Width: 185,
              },
              {
                WordText: 'D.C.',
                Left: 376,
                Top: 359,
                Height: 31,
                Width: 61,
              },
              {
                WordText: 'FIL',
                Left: 469,
                Top: 360,
                Height: 29,
                Width: 47,
              },
              {
                WordText: 'BO',
                Left: 528,
                Top: 359,
                Height: 31,
                Width: 44,
              },
              {
                WordText: 'RIVA',
                Left: 585,
                Top: 360,
                Height: 29,
                Width: 75,
              },
              {
                WordText: '•',
                Left: 670,
                Top: 369,
                Height: 7,
                Width: 7,
              },
              {
                WordText: 'THE',
                Left: 687,
                Top: 360,
                Height: 29,
                Width: 64,
              },
              {
                WordText: 'DEAD',
                Left: 763,
                Top: 360,
                Height: 29,
                Width: 86,
              },
              {
                WordText: 'SOUTH',
                Left: 861,
                Top: 359,
                Height: 31,
                Width: 113,
              },
              {
                WordText: '•',
                Left: 986,
                Top: 369,
                Height: 7,
                Width: 7,
              },
              {
                WordText: 'NECK',
                Left: 1005,
                Top: 359,
                Height: 31,
                Width: 89,
              },
              {
                WordText: 'DEEP',
                Left: 1105,
                Top: 360,
                Height: 29,
                Width: 82,
              },
            ],
            MaxHeight: 31,
            MinTop: 359,
          },
          {
            LineText: 'MAYDAY PARADE • KELVYN COLT, MIYA FOLICK',
            Words: [
              {
                WordText: 'MAYDAY',
                Left: 179,
                Top: 402,
                Height: 29,
                Width: 139,
              },
              {
                WordText: 'PARADE',
                Left: 329,
                Top: 402,
                Height: 29,
                Width: 128,
              },
              {
                WordText: '•',
                Left: 468,
                Top: 412,
                Height: 7,
                Width: 7,
              },
              {
                WordText: 'KELVYN',
                Left: 487,
                Top: 402,
                Height: 29,
                Width: 126,
              },
              {
                WordText: 'COLT,',
                Left: 626,
                Top: 401,
                Height: 31,
                Width: 96,
              },
              {
                WordText: 'MIYA',
                Left: 735,
                Top: 402,
                Height: 29,
                Width: 82,
              },
              {
                WordText: 'FOLICK',
                Left: 828,
                Top: 401,
                Height: 31,
                Width: 118,
              },
            ],
            MaxHeight: 31,
            MinTop: 401,
          },
          {
            LineText: '4,',
            Words: [
              {
                WordText: '4,',
                Left: 893,
                Top: 478,
                Height: 28,
                Width: 15,
              },
            ],
            MaxHeight: 28,
            MinTop: 478,
          },
          {
            LineText: 'DEICHKIND',
            Words: [
              {
                WordText: 'DEICHKIND',
                Left: 1379,
                Top: 426,
                Height: 60,
                Width: 363,
              },
            ],
            MaxHeight: 60,
            MinTop: 426,
          },
          {
            LineText: 'so',
            Words: [
              {
                WordText: 'so',
                Left: 92,
                Top: 752,
                Height: 20,
                Width: 32,
              },
            ],
            MaxHeight: 20,
            MinTop: 752,
          },
          {
            LineText:
              'THE 1975 • VON WEGEN LISBETH • MANDO DIAO • KUMMER • JIMMY EAT WORLD • FOALS • JUJU',
            Words: [
              {
                WordText: 'THE',
                Left: 190,
                Top: 511,
                Height: 30,
                Width: 64,
              },
              {
                WordText: '1975',
                Left: 267,
                Top: 511,
                Height: 31,
                Width: 82,
              },
              {
                WordText: '•',
                Left: 360,
                Top: 521,
                Height: 7,
                Width: 7,
              },
              {
                WordText: 'VON',
                Left: 377,
                Top: 511,
                Height: 31,
                Width: 71,
              },
              {
                WordText: 'WEGEN',
                Left: 459,
                Top: 511,
                Height: 31,
                Width: 117,
              },
              {
                WordText: 'LISBETH',
                Left: 589,
                Top: 511,
                Height: 31,
                Width: 137,
              },
              {
                WordText: '•',
                Left: 738,
                Top: 521,
                Height: 7,
                Width: 7,
              },
              {
                WordText: 'MANDO',
                Left: 757,
                Top: 511,
                Height: 31,
                Width: 123,
              },
              {
                WordText: 'DIAO',
                Left: 893,
                Top: 511,
                Height: 31,
                Width: 78,
              },
              {
                WordText: '•',
                Left: 983,
                Top: 521,
                Height: 7,
                Width: 6,
              },
              {
                WordText: 'KUMMER',
                Left: 1002,
                Top: 511,
                Height: 31,
                Width: 147,
              },
              {
                WordText: '•',
                Left: 1160,
                Top: 521,
                Height: 7,
                Width: 6,
              },
              {
                WordText: 'JIMMY',
                Left: 1177,
                Top: 511,
                Height: 31,
                Width: 113,
              },
              {
                WordText: 'EAT',
                Left: 1300,
                Top: 511,
                Height: 30,
                Width: 59,
              },
              {
                WordText: 'WORLD',
                Left: 1368,
                Top: 511,
                Height: 31,
                Width: 120,
              },
              {
                WordText: '•',
                Left: 1500,
                Top: 521,
                Height: 7,
                Width: 6,
              },
              {
                WordText: 'FOALS',
                Left: 1519,
                Top: 511,
                Height: 31,
                Width: 106,
              },
              {
                WordText: '•',
                Left: 1636,
                Top: 521,
                Height: 7,
                Width: 6,
              },
              {
                WordText: 'JUJU',
                Left: 1653,
                Top: 511,
                Height: 31,
                Width: 87,
              },
            ],
            MaxHeight: 31,
            MinTop: 511,
          },
          {
            LineText:
              'TONES AND I • ANTILOPEN GANG • BAD RELIGION • NOTHING BUT THIEVES • TURBOSTAAT',
            Words: [
              {
                WordText: 'TONES',
                Left: 293,
                Top: 553,
                Height: 31,
                Width: 111,
              },
              {
                WordText: 'AND',
                Left: 414,
                Top: 553,
                Height: 30,
                Width: 70,
              },
              {
                WordText: 'I',
                Left: 496,
                Top: 553,
                Height: 30,
                Width: 7,
              },
              {
                WordText: '•',
                Left: 515,
                Top: 563,
                Height: 7,
                Width: 7,
              },
              {
                WordText: 'ANTILOPEN',
                Left: 532,
                Top: 553,
                Height: 31,
                Width: 187,
              },
              {
                WordText: 'GANG',
                Left: 733,
                Top: 553,
                Height: 31,
                Width: 91,
              },
              {
                WordText: '•',
                Left: 836,
                Top: 563,
                Height: 7,
                Width: 6,
              },
              {
                WordText: 'BAD',
                Left: 855,
                Top: 553,
                Height: 30,
                Width: 65,
              },
              {
                WordText: 'RELIGION',
                Left: 933,
                Top: 553,
                Height: 31,
                Width: 153,
              },
              {
                WordText: '•',
                Left: 1098,
                Top: 563,
                Height: 7,
                Width: 7,
              },
              {
                WordText: 'NOTHING',
                Left: 1117,
                Top: 553,
                Height: 31,
                Width: 151,
              },
              {
                WordText: 'BUT',
                Left: 1280,
                Top: 553,
                Height: 31,
                Width: 66,
              },
              {
                WordText: 'THIEVES',
                Left: 1355,
                Top: 553,
                Height: 31,
                Width: 140,
              },
              {
                WordText: '•',
                Left: 1506,
                Top: 563,
                Height: 7,
                Width: 6,
              },
              {
                WordText: 'TURBOSTAAT',
                Left: 1523,
                Top: 553,
                Height: 31,
                Width: 219,
              },
            ],
            MaxHeight: 31,
            MinTop: 553,
          },
          {
            LineText:
              'WOLF ALICE • HALF MOON RUN • AURORA • KOLLEKTIV TURMSTRASSE LIVE',
            Words: [
              {
                WordText: 'WOLF',
                Left: 514,
                Top: 596,
                Height: 31,
                Width: 94,
              },
              {
                WordText: 'ALICE',
                Left: 618,
                Top: 596,
                Height: 31,
                Width: 95,
              },
              {
                WordText: '•',
                Left: 725,
                Top: 606,
                Height: 7,
                Width: 6,
              },
              {
                WordText: 'HALF',
                Left: 744,
                Top: 596,
                Height: 30,
                Width: 85,
              },
              {
                WordText: 'MOON',
                Left: 841,
                Top: 596,
                Height: 31,
                Width: 100,
              },
              {
                WordText: 'RUN',
                Left: 954,
                Top: 596,
                Height: 31,
                Width: 68,
              },
              {
                WordText: '•',
                Left: 1034,
                Top: 606,
                Height: 7,
                Width: 7,
              },
              {
                WordText: 'AURORA',
                Left: 1051,
                Top: 596,
                Height: 31,
                Width: 140,
              },
              {
                WordText: '•',
                Left: 1201,
                Top: 606,
                Height: 7,
                Width: 7,
              },
              {
                WordText: 'KOLLEKTIV',
                Left: 1220,
                Top: 596,
                Height: 31,
                Width: 181,
              },
              {
                WordText: 'TURMSTRASSE',
                Left: 1410,
                Top: 596,
                Height: 31,
                Width: 249,
              },
              {
                WordText: 'LIVE',
                Left: 1670,
                Top: 596,
                Height: 30,
                Width: 71,
              },
            ],
            MaxHeight: 31,
            MinTop: 596,
          },
          {
            LineText:
              'GEORGIA • JC STEWART • SCHROTTGRENZE • FLASH FORWARD • HELGEN',
            Words: [
              {
                WordText: 'GEORGIA',
                Left: 573,
                Top: 638,
                Height: 31,
                Width: 147,
              },
              {
                WordText: '•',
                Left: 730,
                Top: 648,
                Height: 7,
                Width: 7,
              },
              {
                WordText: 'JC',
                Left: 747,
                Top: 638,
                Height: 31,
                Width: 42,
              },
              {
                WordText: 'STEWART',
                Left: 800,
                Top: 638,
                Height: 31,
                Width: 155,
              },
              {
                WordText: '•',
                Left: 966,
                Top: 648,
                Height: 7,
                Width: 6,
              },
              {
                WordText: 'SCHROTTGRENZE',
                Left: 984,
                Top: 638,
                Height: 31,
                Width: 285,
              },
              {
                WordText: '•',
                Left: 1280,
                Top: 648,
                Height: 7,
                Width: 7,
              },
              {
                WordText: 'FLASH',
                Left: 1299,
                Top: 638,
                Height: 31,
                Width: 106,
              },
              {
                WordText: 'FORWARD',
                Left: 1418,
                Top: 638,
                Height: 31,
                Width: 163,
              },
              {
                WordText: '•',
                Left: 1593,
                Top: 648,
                Height: 7,
                Width: 6,
              },
              {
                WordText: 'HELGEN',
                Left: 1612,
                Top: 638,
                Height: 31,
                Width: 128,
              },
            ],
            MaxHeight: 31,
            MinTop: 638,
          },
          {
            LineText: 'KINGS OF LEON RISE AGAINST',
            Words: [
              {
                WordText: 'KINGS',
                Left: 177,
                Top: 732,
                Height: 60,
                Width: 203,
              },
              {
                WordText: 'OF',
                Left: 404,
                Top: 732,
                Height: 60,
                Width: 85,
              },
              {
                WordText: 'LEON',
                Left: 513,
                Top: 732,
                Height: 60,
                Width: 171,
              },
              {
                WordText: 'RISE',
                Left: 754,
                Top: 732,
                Height: 60,
                Width: 144,
              },
              {
                WordText: 'AGAINST',
                Left: 920,
                Top: 732,
                Height: 60,
                Width: 295,
              },
            ],
            MaxHeight: 60,
            MinTop: 732,
          },
          {
            LineText:
              'BRING ME THE HORIZON • THE HIVES • THES UHLMANN & BAND SUM 41',
            Words: [
              {
                WordText: 'BRING',
                Left: 179,
                Top: 815,
                Height: 31,
                Width: 100,
              },
              {
                WordText: 'ME',
                Left: 291,
                Top: 816,
                Height: 29,
                Width: 47,
              },
              {
                WordText: 'THE',
                Left: 348,
                Top: 816,
                Height: 29,
                Width: 64,
              },
              {
                WordText: 'HORIZON',
                Left: 423,
                Top: 815,
                Height: 31,
                Width: 147,
              },
              {
                WordText: '•',
                Left: 582,
                Top: 826,
                Height: 7,
                Width: 6,
              },
              {
                WordText: 'THE',
                Left: 599,
                Top: 816,
                Height: 29,
                Width: 64,
              },
              {
                WordText: 'HIVES',
                Left: 674,
                Top: 815,
                Height: 31,
                Width: 97,
              },
              {
                WordText: '•',
                Left: 782,
                Top: 826,
                Height: 7,
                Width: 7,
              },
              {
                WordText: 'THES',
                Left: 799,
                Top: 815,
                Height: 31,
                Width: 105,
              },
              {
                WordText: 'UHLMANN',
                Left: 916,
                Top: 816,
                Height: 30,
                Width: 168,
              },
              {
                WordText: '&',
                Left: 1095,
                Top: 816,
                Height: 30,
                Width: 23,
              },
              {
                WordText: 'BAND',
                Left: 1130,
                Top: 816,
                Height: 29,
                Width: 90,
              },
              {
                WordText: 'SUM',
                Left: 1249,
                Top: 816,
                Height: 30,
                Width: 73,
              },
              {
                WordText: '41',
                Left: 1334,
                Top: 816,
                Height: 29,
                Width: 35,
              },
            ],
            MaxHeight: 31,
            MinTop: 815,
          },
          {
            LineText:
              'SWISS & DIE ANDERN • FERDINAND IS LEFT BOY • BHZ • MODESELEKTOR LIVE',
            Words: [
              {
                WordText: 'SWISS',
                Left: 178,
                Top: 858,
                Height: 31,
                Width: 105,
              },
              {
                WordText: '&',
                Left: 294,
                Top: 859,
                Height: 30,
                Width: 23,
              },
              {
                WordText: 'DIE',
                Left: 329,
                Top: 859,
                Height: 29,
                Width: 50,
              },
              {
                WordText: 'ANDERN',
                Left: 389,
                Top: 859,
                Height: 29,
                Width: 136,
              },
              {
                WordText: '•',
                Left: 537,
                Top: 868,
                Height: 7,
                Width: 6,
              },
              {
                WordText: 'FERDINAND',
                Left: 556,
                Top: 859,
                Height: 29,
                Width: 188,
              },
              {
                WordText: 'IS',
                Left: 756,
                Top: 859,
                Height: 30,
                Width: 30,
              },
              {
                WordText: 'LEFT',
                Left: 798,
                Top: 859,
                Height: 29,
                Width: 77,
              },
              {
                WordText: 'BOY',
                Left: 886,
                Top: 859,
                Height: 30,
                Width: 66,
              },
              {
                WordText: '•',
                Left: 963,
                Top: 868,
                Height: 7,
                Width: 6,
              },
              {
                WordText: 'BHZ',
                Left: 981,
                Top: 859,
                Height: 29,
                Width: 64,
              },
              {
                WordText: '•',
                Left: 1056,
                Top: 868,
                Height: 7,
                Width: 7,
              },
              {
                WordText: 'MODESELEKTOR',
                Left: 1075,
                Top: 859,
                Height: 30,
                Width: 265,
              },
              {
                WordText: 'LIVE',
                Left: 1351,
                Top: 859,
                Height: 29,
                Width: 70,
              },
            ],
            MaxHeight: 31,
            MinTop: 858,
          },
          {
            LineText:
              'CATFISH AND THE BOTTLEMEN FRITTENBUDE • BLUES PILLS • SKINDRED',
            Words: [
              {
                WordText: 'CATFISH',
                Left: 178,
                Top: 900,
                Height: 31,
                Width: 136,
              },
              {
                WordText: 'AND',
                Left: 325,
                Top: 901,
                Height: 29,
                Width: 70,
              },
              {
                WordText: 'THE',
                Left: 405,
                Top: 901,
                Height: 29,
                Width: 64,
              },
              {
                WordText: 'BOTTLEMEN',
                Left: 481,
                Top: 900,
                Height: 31,
                Width: 196,
              },
              {
                WordText: 'FRITTENBUDE',
                Left: 708,
                Top: 901,
                Height: 30,
                Width: 224,
              },
              {
                WordText: '•',
                Left: 943,
                Top: 910,
                Height: 7,
                Width: 7,
              },
              {
                WordText: 'BLUES',
                Left: 962,
                Top: 900,
                Height: 31,
                Width: 104,
              },
              {
                WordText: 'PILLS',
                Left: 1078,
                Top: 900,
                Height: 31,
                Width: 92,
              },
              {
                WordText: '•',
                Left: 1181,
                Top: 910,
                Height: 7,
                Width: 7,
              },
              {
                WordText: 'SKINDRED',
                Left: 1199,
                Top: 900,
                Height: 31,
                Width: 166,
              },
            ],
            MaxHeight: 31,
            MinTop: 900,
          },
          {
            LineText: 'MINE • LARI LUKE • HOT MILK BLOND',
            Words: [
              {
                WordText: 'MINE',
                Left: 179,
                Top: 943,
                Height: 29,
                Width: 82,
              },
              {
                WordText: '•',
                Left: 272,
                Top: 952,
                Height: 7,
                Width: 6,
              },
              {
                WordText: 'LARI',
                Left: 291,
                Top: 943,
                Height: 29,
                Width: 71,
              },
              {
                WordText: 'LUKE',
                Left: 375,
                Top: 943,
                Height: 30,
                Width: 83,
              },
              {
                WordText: '•',
                Left: 469,
                Top: 952,
                Height: 7,
                Width: 6,
              },
              {
                WordText: 'HOT',
                Left: 487,
                Top: 942,
                Height: 31,
                Width: 67,
              },
              {
                WordText: 'MILK',
                Left: 565,
                Top: 943,
                Height: 29,
                Width: 81,
              },
              {
                WordText: 'BLOND',
                Left: 675,
                Top: 942,
                Height: 31,
                Width: 110,
              },
            ],
            MaxHeight: 31,
            MinTop: 942,
          },
          {
            LineText: '... UND VIELE, VIELE MEHR! INFOS: WWW.HURRICANE.DE',
            Words: [
              {
                WordText: '...',
                Left: 560,
                Top: 1034,
                Height: 5,
                Width: 24,
              },
              {
                WordText: 'UND',
                Left: 595,
                Top: 1014,
                Height: 26,
                Width: 61,
              },
              {
                WordText: 'VIELE,',
                Left: 664,
                Top: 1014,
                Height: 31,
                Width: 87,
              },
              {
                WordText: 'VIELE',
                Left: 760,
                Top: 1014,
                Height: 25,
                Width: 79,
              },
              {
                WordText: 'MEHR!',
                Left: 849,
                Top: 1014,
                Height: 25,
                Width: 89,
              },
              {
                WordText: 'INFOS:',
                Left: 956,
                Top: 1014,
                Height: 26,
                Width: 93,
              },
              {
                WordText: 'WWW.HURRICANE.DE',
                Left: 1059,
                Top: 1014,
                Height: 26,
                Width: 301,
              },
            ],
            MaxHeight: 31,
            MinTop: 1014,
          },
        ],
        HasOverlay: true,
        Message: 'Total lines: 25',
      },
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