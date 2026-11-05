export const m3 = {
  missions: {
    "a2c_doctor": {
      "steps": [
        {
          "partnerTr": "Kas jums skauda?",
          "prompt": "Pasakyk: „Man skauda gerklę“.",
          "optionsTr": [
            "Man skauda gerklę.",
            "Norėčiau kavos.",
            "Labanakt."
          ],
          "hint": "Aprašai, kaip jautiesi.",
          "wordTr": "gerklės skausmas"
        },
        {
          "partnerTr": "Ar turite alergiją?",
          "prompt": "Pasakyk: „Taip, turiu alergiją“.",
          "optionsTr": [
            "Kainuoja penki eurai.",
            "Taip, turiu alergiją.",
            "Viso gero."
          ],
          "hint": "Klausia apie alergiją.",
          "wordTr": "alergija"
        },
        {
          "partnerTr": "Ar jums reikia nedarbingumo pažymos?",
          "prompt": "Sudėliok žodžius eilės tvarka. Pasakyk: „Man reikia nedarbingumo pažymos trims dienoms“.",
          "blocksTr": [
            "1. Man reikia",
            "2. nedarbingumo pažymos",
            "3. trims",
            "4. dienoms"
          ],
          "pattern": "Pavyzdys: man reikia + nedarbingumo pažymos + trims dienoms. Galūnė -ksi reiškia „kuriam laikui“: kolme päivää tampa kolmeksi päiväksi.",
          "wordTr": "nedarbingumo pažymėjimas"
        },
        {
          "partnerTr": "Dabar pamatuosime jums kraujospūdį.",
          "prompt": "Pasakyk garsiai: „Ar mano kraujospūdis normalus?“",
          "targetTr": "Ar mano kraujospūdis normalus?",
          "wordTr": "kraujospūdis"
        }
      ],
      "can": [
        "aprašyti, kaip jautiesi",
        "pasakyti, kad turi alergiją",
        "paprašyti nedarbingumo pažymos kelioms dienoms",
        "paklausti apie savo kraujospūdį"
      ]
    },
    "a2c_hotel": {
      "steps": [
        {
          "partnerTr": "Labas vakaras! Kuo galiu padėti?",
          "prompt": "Pasakyk: „Turiu rezervaciją“.",
          "optionsTr": [
            "Turiu rezervaciją.",
            "Viso gero.",
            "Kainuoja trys eurai."
          ],
          "hint": "Jau užsisakei kambarį.",
          "wordTr": "rezervacija"
        },
        {
          "partnerTr": "Kiek naktų pasiliksite?",
          "prompt": "Pasakyk: „Pasiliksime dvi naktis“.",
          "optionsTr": [
            "Labanakt.",
            "Pasiliksime dvi naktis.",
            "Norėčiau kavos."
          ],
          "hint": "Sakai, kiek laiko pasiliksi.",
          "wordTr": "nakvoti"
        },
        {
          "partnerTr": "Kur yra baseinas?",
          "prompt": "Sudėliok žodžius eilės tvarka. Pasakyk: „Baseinas yra apačioje“.",
          "blocksTr": [
            "1. Baseinas",
            "2. yra",
            "3. apačioje"
          ],
          "pattern": "Pavyzdys: vieta + yra + kur. Galūnė -ssa reiškia „kur: viduje / ant“: alakerta (apatinis aukštas) tampa alakerrassa.",
          "wordTr": "baseinas"
        },
        {
          "partnerTr": "Ar dar ko nors reikia?",
          "prompt": "Pasakyk garsiai: „Ar galėčiau gauti atsarginį raktą?“",
          "targetTr": "Ar galėčiau gauti atsarginį raktą?",
          "wordTr": "atsarginis raktas"
        }
      ],
      "can": [
        "pasakyti, kad turi rezervaciją",
        "pasakyti, kiek naktų pasiliksi",
        "paklausti, kur baseinas",
        "paprašyti atsarginio rakto"
      ]
    },
    "a2c_directions": {
      "steps": [
        {
          "partnerTr": "Atsiprašau, kur yra artimiausia vaistinė?",
          "prompt": "Pasakyk: „Ji yra ten, sankryžoje“.",
          "optionsTr": [
            "Ji yra ten, sankryžoje.",
            "Norėčiau kavos.",
            "Labanakt."
          ],
          "hint": "Sakai, kur yra vieta.",
          "wordTr": "sankryžoje"
        },
        {
          "partnerTr": "Ar tai toli?",
          "prompt": "Pasakyk: „Ne, ten galima nueiti pėsčiomis“.",
          "optionsTr": [
            "Labas rytas.",
            "Ne, ten galima nueiti pėsčiomis.",
            "Kainuoja trys eurai."
          ],
          "hint": "Sakai, kad tai arti.",
          "wordTr": "pėsčiomis (atstumas)"
        },
        {
          "partnerTr": "Kur man reikia eiti?",
          "prompt": "Sudėliok žodžius eilės tvarka. Pasakyk: „Pasuk į dešinę ir eik tiesiai“.",
          "blocksTr": [
            "1. Pasuk",
            "2. į dešinę",
            "3. ir",
            "4. eik",
            "5. tiesiai"
          ],
          "pattern": "Pavyzdys: pasuk + į dešinę + ir + eik + tiesiai. Tai liepiamoji nuosaka: käänny (pasuk!), jatka (tęsk!).",
          "wordTr": "pasukti"
        },
        {
          "partnerTr": "Tai priešais biblioteką.",
          "prompt": "Pasakyk garsiai: „Ar tai už kampo?“",
          "targetTr": "Ar tai už kampo?",
          "wordTr": "kampas"
        }
      ],
      "can": [
        "paklausti, kur artimiausia vieta",
        "suprasti „pėsčiomis“",
        "pasakyti kam nors pasukti į dešinę ir eiti toliau",
        "paklausti, ar kažkas yra už kampo"
      ]
    },
    "b1c_service": {
      "steps": [
        {
          "partnerTr": "Laba diena. Kuo galiu padėti?",
          "prompt": "Pasakyk: „Norėčiau užsiregistruoti vizitui“.",
          "optionsTr": [
            "Norėčiau užsiregistruoti vizitui.",
            "Viso gero.",
            "Kainuoja trys eurai."
          ],
          "hint": "Nori užsiregistruoti vizitui.",
          "wordTr": "išankstinė registracija"
        },
        {
          "partnerTr": "Ar turite eilės numerį?",
          "prompt": "Pasakyk: „Taip, mano numeris dvidešimt trys“.",
          "optionsTr": [
            "Labanakt.",
            "Taip, mano numeris dvidešimt trys.",
            "Šiandien šalta."
          ],
          "hint": "Pasakai savo eilės numerį.",
          "wordTr": "eilės numeris"
        },
        {
          "partnerTr": "Ką norite padaryti?",
          "prompt": "Sudėliok žodžius eilės tvarka. Pasakyk: „Noriu atsiimti siuntą atsiėmimo punkte“.",
          "blocksTr": [
            "1. Noriu",
            "2. atsiimti",
            "3. siuntą",
            "4. atsiėmimo punkte"
          ],
          "pattern": "Pavyzdys: noriu + atsiimti + siuntą + iš atsiėmimo punkto. Galūnė -sta reiškia „iš“: noutopiste tampa noutopisteestä.",
          "wordTr": "atsiėmimo punktas"
        },
        {
          "partnerTr": "Dar reikia priedo.",
          "prompt": "Pasakyk garsiai: „Priedą atsiųsiu el. paštu“.",
          "targetTr": "Priedą atsiųsiu el. paštu.",
          "wordTr": "priedas"
        }
      ],
      "can": [
        "prašyti vizito",
        "pasakyti savo eilės numerį",
        "pasakyti, kad nori atsiimti siuntą",
        "pažadėti atsiųsti priedą"
      ]
    },
    "b1c_work2": {
      "steps": [
        {
          "partnerTr": "Kodėl kandidatuojate į šią darbo vietą?",
          "prompt": "Pasakyk: „Kandidatuoju, nes ieškau pastovaus darbo“.",
          "optionsTr": [
            "Kandidatuoju, nes ieškau pastovaus darbo.",
            "Norėčiau kavos.",
            "Labanakt."
          ],
          "hint": "Paaiškini, kodėl kandidatuoji.",
          "wordTr": "neterminuotas"
        },
        {
          "partnerTr": "Ar norite dirbti visą ar dalį darbo laiko?",
          "prompt": "Pasakyk: „Man labiau tiktų dalinis darbo laikas“.",
          "optionsTr": [
            "Viso gero.",
            "Man labiau tiktų dalinis darbo laikas.",
            "Šiandien šalta."
          ],
          "hint": "Renkiesi tarp viso ir dalinio darbo laiko.",
          "wordTr": "ne visą darbo dieną"
        },
        {
          "partnerTr": "Ar turite pažymą iš darbo?",
          "prompt": "Sudėliok žodžius eilės tvarka. Pasakyk: „Turiu pažymą iš darbo iš ankstesnio darbdavio“.",
          "blocksTr": [
            "1. Aš",
            "2. turiu",
            "3. pažymą iš darbo",
            "4. iš ankstesnio",
            "5. darbdavio"
          ],
          "pattern": "Pavyzdys: aš + turiu + pažymą iš darbo + iš ankstesnio darbdavio. Galūnė -lta reiškia „iš“: työnantaja tampa työnantajalta.",
          "wordTr": "pažyma iš darbo"
        },
        {
          "partnerTr": "Pakalbėkime dar apie darbo laiką.",
          "prompt": "Pasakyk garsiai: „Kokia savaitės darbo trukmė?“",
          "targetTr": "Kokia savaitės darbo trukmė?",
          "wordTr": "darbo laikas"
        }
      ],
      "can": [
        "pasakyti, kodėl kandidatuoji",
        "kalbėti apie dalinį darbo laiką",
        "pasakyti, kad turi pažymą iš darbo",
        "paklausti apie darbo laiką"
      ]
    },
    "b1c_shop3": {
      "steps": [
        {
          "partnerTr": "Kuo galiu padėti?",
          "prompt": "Pasakyk: „Norėčiau pateikti skundą dėl šios prekės“.",
          "optionsTr": [
            "Norėčiau pateikti skundą dėl šios prekės.",
            "Labanakt.",
            "Kur yra stotis?"
          ],
          "hint": "Nori skųstis dėl prekės.",
          "wordTr": "pateikti pretenziją (dėl prekės)"
        },
        {
          "partnerTr": "Ar prekei dar galioja garantija?",
          "prompt": "Pasakyk: „Taip, garantija baigiasi kitą mėnesį“.",
          "optionsTr": [
            "Labas rytas.",
            "Taip, garantija baigiasi kitą mėnesį.",
            "Tai raudona."
          ],
          "hint": "Sakai, kad garantija dar galioja.",
          "wordTr": "garantinis laikotarpis"
        },
        {
          "partnerTr": "Kodėl norite grąžinti prekę?",
          "prompt": "Sudėliok žodžius eilės tvarka. Pasakyk: „Joje nebuvo naudojimo instrukcijos“.",
          "blocksTr": [
            "1. Joje",
            "2. nebuvo",
            "3. naudojimo",
            "4. instrukcijos"
          ],
          "pattern": "Pavyzdys: joje + nebuvo + naudojimo instrukcijos. Neiginyje daiktas stovi formoje „kažkiek“: käyttöohjetta.",
          "wordTr": "naudojimo instrukcija"
        },
        {
          "partnerTr": "Turite teisę grąžinti per keturiolika dienų.",
          "prompt": "Pasakyk garsiai: „Ar pristatymo išlaidos bus grąžintos?“",
          "targetTr": "Ar pristatymo išlaidos bus grąžintos?",
          "wordTr": "pristatymo išlaidos"
        }
      ],
      "can": [
        "pasakyti, kad nori pateikti skundą",
        "paklausti apie garantijos laiką",
        "paaiškinti, kad trūko instrukcijos",
        "paklausti, ar grąžins pristatymo išlaidas"
      ]
    },
    "b2c_meeting": {
      "steps": [
        {
          "partnerTr": "Ar gavote kvietimą į posėdį?",
          "prompt": "Pasakyk: „Taip, perskaičiau darbotvarkę“.",
          "optionsTr": [
            "Taip, perskaičiau darbotvarkę.",
            "Labanakt.",
            "Kainuoja trys eurai."
          ],
          "hint": "Sakai, kad perskaitei.",
          "wordTr": "darbotvarkė"
        },
        {
          "partnerTr": "Kas yra posėdžio pirmininkas?",
          "prompt": "Pasakyk: „Pirmininkas yra Virtanenas“.",
          "optionsTr": [
            "Viso gero.",
            "Pirmininkas yra Virtanenas.",
            "Šiandien šalta."
          ],
          "hint": "Įvardiji pirmininką.",
          "wordTr": "pirmininkas"
        },
        {
          "partnerTr": "Kas bus toliau?",
          "prompt": "Sudėliok žodžius eilės tvarka. Pasakyk: „Dėl pasiūlymo balsuojama prieš posėdžio pabaigą“.",
          "blocksTr": [
            "1. Dėl pasiūlymo",
            "2. balsuojama",
            "3. prieš",
            "4. posėdžio",
            "5. pabaigą"
          ],
          "pattern": "Pavyzdys: dėl pasiūlymo + balsuojama + prieš + posėdžio + pabaigą. «äänestetään» = «balsuojama» (nesakoma, kas balsuoja).",
          "wordTr": "balsavimas"
        },
        {
          "partnerTr": "Ar kas nors dar nori ką nors pasakyti?",
          "prompt": "Pasakyk garsiai: „Norėčiau paremti pasiūlymą“.",
          "targetTr": "Norėčiau paremti pasiūlymą.",
          "wordTr": "parama (pasiūlymui)"
        }
      ],
      "can": [
        "pasakyti, kad perskaitei darbotvarkę",
        "įvardyti posėdžio pirmininką",
        "suprasti, kad bus balsavimas",
        "pasakyti, kad remi pasiūlymą"
      ]
    },
    "b2c_housing3": {
      "steps": [
        {
          "partnerTr": "Ar perskaitėte nuomos sutartį?",
          "prompt": "Pasakyk: „Taip, įspėjimo terminas yra trys mėnesiai“.",
          "optionsTr": [
            "Taip, įspėjimo terminas yra trys mėnesiai.",
            "Labanakt.",
            "Tai raudona."
          ],
          "hint": "Kalbi apie įspėjimo terminą.",
          "wordTr": "įspėjimo terminas"
        },
        {
          "partnerTr": "Ką ketina daryti namo bendrija?",
          "prompt": "Pasakyk: „Bendrija keičia vamzdžius“.",
          "optionsTr": [
            "Viso gero.",
            "Bendrija keičia vamzdžius.",
            "Norėčiau kavos."
          ],
          "hint": "Kalbi apie vamzdžių keitimą.",
          "wordTr": "vamzdžių keitimas"
        },
        {
          "partnerTr": "Ką administratorius pasakė apie įnašą?",
          "prompt": "Sudėliok žodžius eilės tvarka. Pasakyk: „Jis pasakė, kad įnašas didėja“.",
          "blocksTr": [
            "1. Jis",
            "2. pasakė",
            "3. kad",
            "4. įnašas",
            "5. didėja"
          ],
          "pattern": "Pavyzdys: jis + pasakė + kad + įnašas + didėja. Po «että» (kad) prasideda naujas sakinys: vastike nousee.",
          "wordTr": "eksploatacijos mokestis (bendrijos)"
        },
        {
          "partnerTr": "Ar dar reikia dokumentų?",
          "prompt": "Pasakyk garsiai: „Man reikia administratoriaus pažymos“.",
          "targetTr": "Man reikia administratoriaus pažymos.",
          "wordTr": "administratoriaus pažyma"
        }
      ],
      "can": [
        "kalbėti apie įspėjimo terminą",
        "paminėti vamzdžių keitimą",
        "kalbėti apie priežiūros įnašą",
        "paprašyti administratoriaus pažymos"
      ]
    },
    "b2c_finance": {
      "steps": [
        {
          "partnerTr": "Kuo galiu padėti?",
          "prompt": "Pasakyk: „Norėčiau kreiptis dėl būsto paskolos“.",
          "optionsTr": [
            "Norėčiau kreiptis dėl būsto paskolos.",
            "Labanakt.",
            "Kur yra stotis?"
          ],
          "hint": "Nori būsto paskolos.",
          "wordTr": "būsto paskola"
        },
        {
          "partnerTr": "Ar paskolai reikia laidavimo?",
          "prompt": "Pasakyk: „Taip, bankas reikalauja laidavimo“.",
          "optionsTr": [
            "Šiandien šalta.",
            "Taip, bankas reikalauja laidavimo.",
            "Viso gero."
          ],
          "hint": "Sakai, kad bankas reikalauja laidavimo.",
          "wordTr": "laidavimas"
        },
        {
          "partnerTr": "Ar turite įsiskolinimų?",
          "prompt": "Sudėliok žodžius eilės tvarka. Pasakyk: „Neturiu jokių mokėjimo įsiskolinimų“.",
          "blocksTr": [
            "1. Neturiu",
            "2. jokių",
            "3. mokėjimo",
            "4. įsiskolinimų"
          ],
          "pattern": "Pavyzdys: neturiu + jokių + mokėjimo + įsiskolinimų. Neiginyje daiktas stovi formoje „kažkiek“: maksuhäiriötä.",
          "wordTr": "įrašas apie nesumokėtas skolas"
        },
        {
          "partnerTr": "Ar turite dar klausimų?",
          "prompt": "Pasakyk garsiai: „Kada gausiu mokesčių grąžinimą?“",
          "targetTr": "Kada gausiu mokesčių grąžinimą?",
          "wordTr": "mokesčių grąžinimas"
        }
      ],
      "can": [
        "kreiptis dėl būsto paskolos",
        "pasakyti, kad bankas reikalauja laidavimo",
        "pasakyti, kad neturi įsiskolinimų",
        "paklausti apie mokesčių grąžinimą"
      ]
    }
  },
};
