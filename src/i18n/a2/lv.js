export const a2 = {
  path: { a2_shop: 'Veikalā', a2_weather: 'Laiks un gadalaiki', a2_move: 'Kā nokļūt', a2_time: 'Laiks un diena', a2_clothes: 'Krāsas un apģērbs', a2_health: 'Pie ārsta' },
  words: {
    a2_shop: ['veikals', 'maize', 'siers', 'ābols', 'cena', 'lēts', 'dārgs', 'man vajag', 'es meklēju', 'kase', 'maisiņš', 'akcija', 'liels', 'mazs'],
    a2_weather: ['laiks (laikapstākļi)', 'saule', 'lietus', 'sniegs', 'vējš', 'auksts', 'silts', 'karsts', 'mākoņains', 'pavasaris', 'vasara', 'rudens', 'ziema', 'grāds'],
    a2_move: ['autobuss', 'vilciens', 'pietura', 'stacija', 'biļete', 'pa labi', 'pa kreisi', 'taisni', 'iela', 'karte', 'kur', 'tuvu', 'tālu', 'iet kājām'],
    a2_time: ['pulkstenis / laiks', 'rīts', 'diena', 'vakars', 'nakts', 'šodien', 'rīt', 'vakar', 'es mostos', 'es ēdu', 'es guļu', 'darbā', 'pus', 'minūte'],
    a2_clothes: ['sarkans', 'zils', 'zaļš', 'dzeltens', 'melns', 'balts', 'mētelis', 'bikses', 'krekls', 'apavi', 'cepure', 'dūraiņi', 'zeķes', 'kleita'],
    a2_health: ['ārsts', 'aptieka', 'zāles', 'drudzis', 'gripa', 'galvassāpes', 'vēders', 'roka', 'kāja', 'galva', 'sāp', 'vesels', 'pieraksts pie ārsta', 'palīdzība'],
  },
  missions: {
    a2_shop: {
      steps: [
        { partnerTr: 'Labdien! Vai varu palīdzēt?', prompt: 'Pasakiet, ka meklējat pienu.', optionsTr: ['Es meklēju pienu.', 'Es esmu kafija.', 'Arlabunakti.'], hint: 'Pasakiet pārdevējam, ko meklējat.', wordTr: 'es meklēju' },
        { partnerTr: 'Vai jums vajag maisiņu?', prompt: 'Pasakiet „jā, lūdzu“.', optionsTr: ['Atvainojiet.', 'Jā, lūdzu.', 'Arlabunakti.'], hint: 'Meklējam atbildi „jā, lūdzu“.', wordTr: 'maisiņš' },
        { partnerTr: 'Ko jums vajag?', prompt: 'Salieciet vārdus pareizā secībā. Pasakiet „Man vajag maizi un sieru“.', blocksTr: ['1. Man vajag', '2. maizi', '3. un', '4. sieru'], pattern: 'Paraugs: man vajag + ko. Pēc „tarvitsen“ vārds iegūst galotni: leipä (maize) kļūst par leipää, juusto par juustoa. To sauc par partitīvu: „nedaudz kā“.', wordTr: 'man vajag' },
        { partnerTr: 'Lūdzu, ābols.', prompt: 'Pajautājiet, cik tas maksā.', targetTr: 'Cik tas maksā?', wordTr: 'cena' },
      ],
      can: ['pateikt, ko meklējat veikalā', 'pateikt, ko jums vajag', 'pajautāt, cik kas maksā'],
    },
    a2_move: {
      steps: [
        { partnerTr: 'Atvainojiet, kur ir stacija?', prompt: 'Paskaidrojiet: taisni, tad pa labi.', optionsTr: ['Taisni un tad pa labi.', 'Es vēlētos kafiju.', 'Arlabunakti.'], hint: 'Jūs rādāt ceļu.', wordTr: 'taisni' },
        { partnerTr: 'Vai stacija ir tālu?', prompt: 'Pasakiet, ka tā ir tuvu.', optionsTr: ['Labrīt.', 'Nē, tā ir tuvu.', 'Tas maksā piecus eiro.'], hint: 'Gribam pateikt, ka stacija nav tālu.', wordTr: 'tuvu' },
        { partnerTr: 'Kā nokļūt līdz pieturai?', prompt: 'Salieciet vārdus pareizā secībā. Pasakiet „Taisni un tad pa labi“.', blocksTr: ['1. Taisni', '2. un', '3. tad', '4. pa labi'], pattern: 'Paraugs: virziens + un tad + virziens. Galotne „-lle“ nozīmē „uz“: oikea (labais) kļūst par oikealle.', wordTr: 'pa labi' },
        { partnerTr: 'Vai vēlaties biļeti?', prompt: 'Pasakiet skaļi: „Vienu biļeti, lūdzu“.', targetTr: 'Vienu biļeti, lūdzu.', wordTr: 'biļete' },
      ],
      can: ['paskaidrot vienkāršu ceļu', 'pateikt, ka kaut kas ir tuvu vai tālu', 'palūgt biļeti'],
    },
    a2_time: {
      steps: [
        { partnerTr: 'Cik pulkstenis?', prompt: 'Pasakiet, ka ir astoņi.', optionsTr: ['Ir astoņi.', 'Es dzīvoju Somijā.', 'Liels paldies.'], hint: 'Jums jautā laiku.', wordTr: 'pulkstenis / laiks' },
        { partnerTr: 'Kad jūs mostaties?', prompt: 'Pasakiet, ka mostaties sešos no rīta.', optionsTr: ['Šodien ir auksts.', 'Es mostos sešos no rīta.', 'Uz redzēšanos.'], hint: 'Jums jautā par jūsu rītu.', wordTr: 'es mostos' },
        { partnerTr: 'Ko jūs darāt rīt?', prompt: 'Salieciet vārdus pareizā secībā. Pasakiet „Rīt es esmu darbā“.', blocksTr: ['1. Rīt', '2. esmu', '3. darbā'], pattern: 'Paraugs: kad + esmu + kur. Somu valodā darbības vārds paliek otrajā vietā, pat ja laika vārds ir pirmais.', wordTr: 'darbā' },
        { partnerTr: 'Kad jūs ejat gulēt?', prompt: 'Pasakiet skaļi: „Es eju gulēt vakarā“.', targetTr: 'Es eju gulēt vakarā.', wordTr: 'vakars' },
      ],
      can: ['pateikt, cik ir pulkstenis', 'pateikt, kad mostaties', 'pateikt, ko darīsiet rīt'],
    },
    a2_health: {
      steps: [
        { partnerTr: 'Labdien! Kas jums kaiš?', prompt: 'Pasakiet, ka jums ir drudzis.', optionsTr: ['Man ir drudzis.', 'Es vēlētos kafiju.', 'Prieks iepazīties.'], hint: 'Ārsts jautā, kāda ir problēma.', wordTr: 'drudzis' },
        { partnerTr: 'Vai jums sāp galva?', prompt: 'Pasakiet „jā, man ir galvassāpes“.', optionsTr: ['Liels paldies.', 'Jā, man ir galvassāpes.', 'Arlabunakti.'], hint: 'Meklējam atbildi „jā“.', wordTr: 'galvassāpes' },
        { partnerTr: 'Kas jums sāp?', prompt: 'Salieciet vārdus pareizā secībā. Pasakiet „Man sāp vēders“.', blocksTr: ['1. Mans vēders', '2. ir', '3. sāpīgs'], pattern: 'Paraugs: mans + ķermeņa daļa + sāp. Galotne „-ni“ nozīmē „mans“: vatsa (vēders) kļūst par vatsani.', wordTr: 'vēders' },
        { partnerTr: 'Vai jums vajag pierakstu pie ārsta?', prompt: 'Pasakiet skaļi: „Es vēlētos pierakstu pie ārsta“.', targetTr: 'Es vēlētos pierakstu pie ārsta.', wordTr: 'pieraksts pie ārsta' },
      ],
      can: ['pateikt, ka jums ir drudzis vai galvassāpes', 'pateikt, kas sāp', 'pierakstīties pie ārsta'],
    },
  },
};
