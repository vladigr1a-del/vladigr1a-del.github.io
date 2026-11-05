export const m3 = {
  missions: {
    "a2c_doctor": {
      "steps": [
        {
          "partnerTr": "Kas jums kaiš?",
          "prompt": "Pasaki: «Man sāp kakls».",
          "optionsTr": [
            "Man sāp kakls.",
            "Es vēlētos kafiju.",
            "Ar labu nakti."
          ],
          "hint": "Tu apraksti, kā jūties.",
          "wordTr": "iekaisis kakls"
        },
        {
          "partnerTr": "Vai jums ir alerģija?",
          "prompt": "Pasaki: «Jā, man ir alerģija».",
          "optionsTr": [
            "Tas maksā piecus eiro.",
            "Jā, man ir alerģija.",
            "Uz redzēšanos."
          ],
          "hint": "Tev jautā par alerģiju.",
          "wordTr": "alerģija"
        },
        {
          "partnerTr": "Vai jums vajag slimības lapu?",
          "prompt": "Sakārto vārdus pareizā secībā. Pasaki: «Man vajag slimības lapu uz trim dienām».",
          "blocksTr": [
            "1. Man vajag",
            "2. slimības lapu",
            "3. uz trim",
            "4. dienām"
          ],
          "pattern": "Paraugs: man vajag + slimības lapu + uz trim dienām. Galotne -ksi nozīmē „uz” laiku: kolme päivää kļūst par kolmeksi päiväksi.",
          "wordTr": "slimības lapa"
        },
        {
          "partnerTr": "Tagad izmērīsim jums asinsspiedienu.",
          "prompt": "Pasaki skaļi: «Vai mans asinsspiediens ir normāls?»",
          "targetTr": "Vai mans asinsspiediens ir normāls?",
          "wordTr": "asinsspiediens"
        }
      ],
      "can": [
        "aprakstīt, kā jūties",
        "pateikt, ka tev ir alerģija",
        "lūgt slimības lapu uz dažām dienām",
        "pajautāt par savu asinsspiedienu"
      ]
    },
    "a2c_hotel": {
      "steps": [
        {
          "partnerTr": "Labvakar! Kā es varu palīdzēt?",
          "prompt": "Pasaki: «Man ir rezervācija».",
          "optionsTr": [
            "Man ir rezervācija.",
            "Uz redzēšanos.",
            "Tas maksā trīs eiro."
          ],
          "hint": "Tu jau esi rezervējis istabu.",
          "wordTr": "rezervācija"
        },
        {
          "partnerTr": "Cik naktis jūs paliksiet?",
          "prompt": "Pasaki: «Mēs paliksim divas naktis».",
          "optionsTr": [
            "Ar labu nakti.",
            "Mēs paliksim divas naktis.",
            "Es vēlētos kafiju."
          ],
          "hint": "Tu saki, cik ilgi paliksi.",
          "wordTr": "pārnakšņot"
        },
        {
          "partnerTr": "Kur ir peldbaseins?",
          "prompt": "Sakārto vārdus pareizā secībā. Pasaki: «Peldbaseins ir lejā».",
          "blocksTr": [
            "1. Peldbaseins",
            "2. ir",
            "3. lejā"
          ],
          "pattern": "Paraugs: vieta + ir + kur. Galotne -ssa nozīmē „iekšā / uz”: alakerta (apakšstāvs) kļūst par alakerrassa.",
          "wordTr": "peldbaseins"
        },
        {
          "partnerTr": "Vai jums vēl kaut kas vajadzīgs?",
          "prompt": "Pasaki skaļi: «Vai varu dabūt rezerves atslēgu?»",
          "targetTr": "Vai varu dabūt rezerves atslēgu?",
          "wordTr": "rezerves atslēga"
        }
      ],
      "can": [
        "pateikt, ka tev ir rezervācija",
        "pateikt, cik naktis paliksi",
        "pajautāt, kur ir peldbaseins",
        "lūgt rezerves atslēgu"
      ]
    },
    "a2c_directions": {
      "steps": [
        {
          "partnerTr": "Atvainojiet, kur ir tuvākā aptieka?",
          "prompt": "Pasaki: «Tā ir tur, krustojumā».",
          "optionsTr": [
            "Tā ir tur, krustojumā.",
            "Es vēlētos kafiju.",
            "Ar labu nakti."
          ],
          "hint": "Tu saki, kur atrodas vieta.",
          "wordTr": "krustojumā"
        },
        {
          "partnerTr": "Vai tas ir tālu?",
          "prompt": "Pasaki: «Nē, tas ir ejamā attālumā».",
          "optionsTr": [
            "Labrīt.",
            "Nē, tas ir ejamā attālumā.",
            "Tas maksā trīs eiro."
          ],
          "hint": "Tu saki, ka tas ir tuvu.",
          "wordTr": "kājām (attālums)"
        },
        {
          "partnerTr": "Uz kuru pusi man jāiet?",
          "prompt": "Sakārto vārdus pareizā secībā. Pasaki: «Pagriezies pa labi un turpini taisni».",
          "blocksTr": [
            "1. Pagriezies",
            "2. pa labi",
            "3. un",
            "4. turpini",
            "5. taisni"
          ],
          "pattern": "Paraugs: pagriezies + pa labi + un + turpini + taisni. Tās ir pavēles: käänny (pagriezies!), jatka (turpini!).",
          "wordTr": "pagriezties"
        },
        {
          "partnerTr": "Tā ir pretī bibliotēkai.",
          "prompt": "Pasaki skaļi: «Vai tas ir aiz stūra?»",
          "targetTr": "Vai tas ir aiz stūra?",
          "wordTr": "stūris"
        }
      ],
      "can": [
        "pajautāt, kur ir tuvākā vieta",
        "saprast „ejamā attālumā”",
        "pateikt, lai pagriežas pa labi un iet tālāk",
        "pajautāt, vai kaut kas ir aiz stūra"
      ]
    },
    "b1c_service": {
      "steps": [
        {
          "partnerTr": "Labdien. Kā es varu palīdzēt?",
          "prompt": "Pasaki: «Es vēlētos pierakstīties uz vizīti».",
          "optionsTr": [
            "Es vēlētos pierakstīties uz vizīti.",
            "Uz redzēšanos.",
            "Tas maksā trīs eiro."
          ],
          "hint": "Tu vēlies pierakstīties.",
          "wordTr": "pieraksts"
        },
        {
          "partnerTr": "Vai jums ir rindas numurs?",
          "prompt": "Pasaki: «Jā, mans numurs ir divdesmit trīs».",
          "optionsTr": [
            "Ar labu nakti.",
            "Jā, mans numurs ir divdesmit trīs.",
            "Šodien ir auksts."
          ],
          "hint": "Tu nosauc savu rindas numuru.",
          "wordTr": "rindas numurs"
        },
        {
          "partnerTr": "Ko jūs vēlaties darīt?",
          "prompt": "Sakārto vārdus pareizā secībā. Pasaki: «Es gribu saņemt sūtījumu no saņemšanas punkta».",
          "blocksTr": [
            "1. Es gribu",
            "2. saņemt",
            "3. sūtījumu",
            "4. no saņemšanas punkta"
          ],
          "pattern": "Paraugs: es gribu + saņemt + sūtījumu + no saņemšanas punkta. Galotne -sta nozīmē „no”: noutopiste kļūst par noutopisteestä.",
          "wordTr": "saņemšanas punkts"
        },
        {
          "partnerTr": "Mums vēl vajag pielikumu.",
          "prompt": "Pasaki skaļi: «Es nosūtīšu pielikumu pa e-pastu».",
          "targetTr": "Es nosūtīšu pielikumu pa e-pastu.",
          "wordTr": "pielikums"
        }
      ],
      "can": [
        "pierakstīties uz vizīti",
        "nosaukt savu rindas numuru",
        "pateikt, ka gribi saņemt sūtījumu",
        "apsolīt nosūtīt pielikumu"
      ]
    },
    "b1c_work2": {
      "steps": [
        {
          "partnerTr": "Kāpēc jūs pieteicaties šim darbam?",
          "prompt": "Pasaki: «Es pieteicos, jo meklēju pastāvīgu darbu».",
          "optionsTr": [
            "Es pieteicos, jo meklēju pastāvīgu darbu.",
            "Es vēlētos kafiju.",
            "Ar labu nakti."
          ],
          "hint": "Tu paskaidro, kāpēc piesakies.",
          "wordTr": "pastāvīgs"
        },
        {
          "partnerTr": "Vai jūs vēlaties strādāt pilnu vai nepilnu slodzi?",
          "prompt": "Pasaki: «Nepilna slodze man derētu labāk».",
          "optionsTr": [
            "Uz redzēšanos.",
            "Nepilna slodze man derētu labāk.",
            "Šodien ir auksts."
          ],
          "hint": "Tu izvēlies starp pilnu un nepilnu slodzi.",
          "wordTr": "uz nepilnu slodzi"
        },
        {
          "partnerTr": "Vai jums ir izziņa no darba?",
          "prompt": "Sakārto vārdus pareizā secībā. Pasaki: «Man ir izziņa no darba no iepriekšējā darba devēja».",
          "blocksTr": [
            "1. Man",
            "2. ir",
            "3. izziņa no darba",
            "4. no iepriekšējā",
            "5. darba devēja"
          ],
          "pattern": "Paraugs: man + ir + izziņa no darba + no iepriekšējā darba devēja. Galotne -lta nozīmē „no”: työnantaja kļūst par työnantajalta.",
          "wordTr": "izziņa no darba"
        },
        {
          "partnerTr": "Parunāsim vēl par darba laiku.",
          "prompt": "Pasaki skaļi: «Kāds ir iknedēļas darba laiks?»",
          "targetTr": "Kāds ir iknedēļas darba laiks?",
          "wordTr": "darba laiks"
        }
      ],
      "can": [
        "pateikt, kāpēc piesakies darbam",
        "runāt par nepilnu slodzi",
        "pateikt, ka tev ir izziņa no darba",
        "pajautāt par darba laiku"
      ]
    },
    "b1c_shop3": {
      "steps": [
        {
          "partnerTr": "Kā es varu palīdzēt?",
          "prompt": "Pasaki: «Es vēlētos iesniegt sūdzību par šo preci».",
          "optionsTr": [
            "Es vēlētos iesniegt sūdzību par šo preci.",
            "Ar labu nakti.",
            "Kur ir stacija?"
          ],
          "hint": "Tu vēlies sūdzēties par preci.",
          "wordTr": "iesniegt sūdzību (par preci)"
        },
        {
          "partnerTr": "Vai precei vēl ir garantija?",
          "prompt": "Pasaki: «Jā, garantija beidzas nākamajā mēnesī».",
          "optionsTr": [
            "Labrīt.",
            "Jā, garantija beidzas nākamajā mēnesī.",
            "Tas ir sarkans."
          ],
          "hint": "Tu saki, ka garantija vēl ir spēkā.",
          "wordTr": "garantijas laiks"
        },
        {
          "partnerTr": "Kāpēc jūs vēlaties preci atdot?",
          "prompt": "Sakārto vārdus pareizā secībā. Pasaki: «Tai nebija lietošanas instrukcijas».",
          "blocksTr": [
            "1. Tai",
            "2. nebija",
            "3. lietošanas",
            "4. instrukcijas"
          ],
          "pattern": "Paraugs: tai + nebija + lietošanas instrukcijas. Noliegumā lieta ir formā „kaut kas”: käyttöohjetta.",
          "wordTr": "lietošanas instrukcija"
        },
        {
          "partnerTr": "Jums ir tiesības atdot preci četrpadsmit dienu laikā.",
          "prompt": "Pasaki skaļi: «Vai piegādes izmaksas atmaksās?»",
          "targetTr": "Vai piegādes izmaksas atmaksās?",
          "wordTr": "piegādes izmaksas"
        }
      ],
      "can": [
        "pateikt, ka vēlies iesniegt sūdzību",
        "pajautāt par garantijas termiņu",
        "paskaidrot, ka trūka instrukcijas",
        "pajautāt, vai atmaksās piegādes izmaksas"
      ]
    },
    "b2c_meeting": {
      "steps": [
        {
          "partnerTr": "Vai jūs saņēmāt uzaicinājumu uz sapulci?",
          "prompt": "Pasaki: «Jā, esmu izlasījis darba kārtību».",
          "optionsTr": [
            "Jā, esmu izlasījis darba kārtību.",
            "Ar labu nakti.",
            "Tas maksā trīs eiro."
          ],
          "hint": "Tu saki, ka esi to izlasījis.",
          "wordTr": "darba kārtība"
        },
        {
          "partnerTr": "Kas ir sapulces vadītājs?",
          "prompt": "Pasaki: «Sapulci vada Virtanens».",
          "optionsTr": [
            "Uz redzēšanos.",
            "Sapulci vada Virtanens.",
            "Šodien ir auksts."
          ],
          "hint": "Tu nosauc vadītāju.",
          "wordTr": "sēdes vadītājs"
        },
        {
          "partnerTr": "Kas notiks tālāk?",
          "prompt": "Sakārto vārdus pareizā secībā. Pasaki: «Par priekšlikumu balso pirms sapulces beigām».",
          "blocksTr": [
            "1. Par priekšlikumu",
            "2. balso",
            "3. pirms",
            "4. sapulces",
            "5. beigām"
          ],
          "pattern": "Paraugs: par priekšlikumu + balso + pirms + sapulces + beigām. «äänestetään» = «balso» (nesaka, kas tieši balso).",
          "wordTr": "balsojums"
        },
        {
          "partnerTr": "Vai kādam vēl ir ko piebilst?",
          "prompt": "Pasaki skaļi: «Es vēlētos atbalstīt priekšlikumu».",
          "targetTr": "Es vēlētos atbalstīt priekšlikumu.",
          "wordTr": "atbalsts (priekšlikumam)"
        }
      ],
      "can": [
        "pateikt, ka esi izlasījis darba kārtību",
        "nosaukt sapulces vadītāju",
        "saprast, ka būs balsojums",
        "pateikt, ka atbalsti priekšlikumu"
      ]
    },
    "b2c_housing3": {
      "steps": [
        {
          "partnerTr": "Vai jūs izlasījāt īres līgumu?",
          "prompt": "Pasaki: «Jā, brīdinājuma termiņš ir trīs mēneši».",
          "optionsTr": [
            "Jā, brīdinājuma termiņš ir trīs mēneši.",
            "Ar labu nakti.",
            "Tas ir sarkans."
          ],
          "hint": "Tu runā par brīdinājuma termiņu.",
          "wordTr": "uzteikuma termiņš"
        },
        {
          "partnerTr": "Ko dzīvokļu īpašnieku biedrība gatavojas darīt?",
          "prompt": "Pasaki: «Biedrība maina cauruļvadus».",
          "optionsTr": [
            "Uz redzēšanos.",
            "Biedrība maina cauruļvadus.",
            "Es vēlētos kafiju."
          ],
          "hint": "Tu runā par cauruļvadu maiņu.",
          "wordTr": "cauruļu nomaiņa"
        },
        {
          "partnerTr": "Ko pārvaldnieks teica par maksājumu?",
          "prompt": "Sakārto vārdus pareizā secībā. Pasaki: «Viņš teica, ka maksājums pieaug».",
          "blocksTr": [
            "1. Viņš",
            "2. teica",
            "3. ka",
            "4. maksājums",
            "5. pieaug"
          ],
          "pattern": "Paraugs: viņš + teica + ka + maksājums + pieaug. Pēc «että» (ka) sākas jauns teikums: vastike nousee.",
          "wordTr": "apsaimniekošanas maksa"
        },
        {
          "partnerTr": "Vai jums vēl vajadzīgi dokumenti?",
          "prompt": "Pasaki skaļi: «Man vajag pārvaldnieka izziņu».",
          "targetTr": "Man vajag pārvaldnieka izziņu.",
          "wordTr": "pārvaldnieka izziņa"
        }
      ],
      "can": [
        "runāt par brīdinājuma termiņu",
        "pieminēt cauruļvadu maiņu",
        "runāt par uzturēšanas maksājumu",
        "lūgt pārvaldnieka izziņu"
      ]
    },
    "b2c_finance": {
      "steps": [
        {
          "partnerTr": "Kā es varu palīdzēt?",
          "prompt": "Pasaki: «Es vēlētos pieteikties mājokļa kredītam».",
          "optionsTr": [
            "Es vēlētos pieteikties mājokļa kredītam.",
            "Ar labu nakti.",
            "Kur ir stacija?"
          ],
          "hint": "Tu vēlies mājokļa kredītu.",
          "wordTr": "hipotekārais kredīts"
        },
        {
          "partnerTr": "Vai kredītam vajadzīgs galvotājs?",
          "prompt": "Pasaki: «Jā, banka prasa galvojumu».",
          "optionsTr": [
            "Šodien ir auksts.",
            "Jā, banka prasa galvojumu.",
            "Uz redzēšanos."
          ],
          "hint": "Tu saki, ka bankai vajag galvojumu.",
          "wordTr": "galvojums"
        },
        {
          "partnerTr": "Vai jums ir maksājumu kavējumi?",
          "prompt": "Sakārto vārdus pareizā secībā. Pasaki: «Man nav neviena kavējuma».",
          "blocksTr": [
            "1. Man",
            "2. nav",
            "3. neviena",
            "4. kavējuma"
          ],
          "pattern": "Paraugs: man + nav + neviena + kavējuma. Noliegumā lieta ir formā „kaut kas”: maksuhäiriötä.",
          "wordTr": "ieraksts par maksājumu kavējumu"
        },
        {
          "partnerTr": "Vai jums vēl ir jautājumi?",
          "prompt": "Pasaki skaļi: «Kad es saņemšu nodokļu atmaksu?»",
          "targetTr": "Kad es saņemšu nodokļu atmaksu?",
          "wordTr": "nodokļa atmaksa"
        }
      ],
      "can": [
        "pieteikties mājokļa kredītam",
        "pateikt, ka banka prasa galvojumu",
        "pateikt, ka tev nav kavējumu",
        "pajautāt par nodokļu atmaksu"
      ]
    }
  },
};
