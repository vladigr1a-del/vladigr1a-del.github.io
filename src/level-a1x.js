// Разширение на ниво A1 (собствено финландско съдържание, без преводи).
// Преводите са в src/i18n/a1x/*.js. ВАЖНО: финландските думи и изречения трябва да бъдат проверени от човек, който владее езика добре.

const W = (words) => ({ words });
const blk = (...ws) => ws.map((text, i) => ({ text, tone: ['accent', 'success', 'warning', 'pro'][i % 4] }));
const arr = (partner, answer, words, wordFi) => ({ type: 'arrange', partner, words, answer, blocks: blk(...answer), wordFi });
const ch = (partner, options, correct, wordFi) => ({ type: 'choose', partner, options, correct, wordFi });
const sp = (partner, target, wordFi) => ({ type: 'speak', partner, target, wordFi });

export const WORD_GROUPS_A1X = {
  a1x_pron: W(['hän', 'me', 'te', 'he', 'tämä', 'tuo', 'se', 'nämä', 'nuo', 'ne', 'minun', 'sinun', 'hänen', 'meidän']),
  a1x_num2: W(['nolla', 'kaksikymmentäyksi', 'kolmekymmentä', 'neljäkymmentä', 'viisikymmentä', 'kuusikymmentä', 'seitsemänkymmentä', 'kahdeksankymmentä', 'yhdeksänkymmentä', 'sata', 'tuhat', 'ensimmäinen', 'toinen', 'kolmas']),
  a1x_where: W(['täällä', 'siellä', 'tuolla', 'sisällä', 'ulkona', 'päällä', 'alla', 'vieressä', 'edessä', 'takana', 'välissä', 'ylhäällä', 'alhaalla', 'keskellä']),
  a1x_countries: W(['Suomi', 'Ruotsi', 'Venäjä', 'Viro', 'Saksa', 'Englanti', 'Espanja', 'Ranska', 'Italia', 'Puola', 'Bulgaria', 'Turkki', 'Kiina', 'Intia']),
  a1x_langs: W(['ruotsia', 'englantia', 'venäjää', 'saksaa', 'espanjaa', 'ranskaa', 'bulgariaa', 'puolaa', 'arabiaa', 'kiinaa', 'portugalia', 'turkkia', 'viroa', 'hindiä']),
  a1x_age: W(['ikä', 'vuotta', 'vuotias', 'syntynyt', 'etunimi', 'sukunimi', 'puhelinnumero', 'postinumero', 'katuosoite', 'syntymäaika', 'kansallisuus', 'äidinkieli', 'kuinka vanha', 'sukupuoli']),
  a1x_family: W(['täti', 'setä', 'serkku', 'isovanhemmat', 'lapsenlapsi', 'puoliso', 'naimisissa', 'vauva', 'tyttö', 'pikkuveli', 'isosisko', 'kaksoset', 'sukulainen', 'pariskunta']),
  a1x_food2: W(['ruisleipä', 'puuro', 'makkara', 'lohi', 'silakka', 'karjalanpiirakka', 'pulla', 'voileipä', 'pizza', 'hampurilainen', 'jäätelö', 'suklaa', 'karkki', 'keksi']),
  a1x_fruit: W(['banaani', 'appelsiini', 'sitruuna', 'päärynä', 'mansikka', 'mustikka', 'vadelma', 'porkkana', 'sipuli', 'tomaatti', 'kurkku', 'kaali', 'sieni', 'marja']),
  a1x_clothes2: W(['pipo', 'huivi', 'kaulaliina', 'farkut', 'hame', 'puku', 'sukkahousut', 'vyö', 'lenkkarit', 'saappaat', 'sateenvarjo', 'silmälasit', 'rannekello', 'käsineet']),
  a1x_house2: W(['sohva', 'matto', 'verho', 'hylly', 'portaat', 'vessa', 'suihku', 'pesukone', 'jääkaappi', 'uuni', 'hella', 'astianpesukone', 'pyyhe', 'saippua']),
  a1x_objects: W(['kynä', 'paperi', 'laukku', 'tietokone', 'lamppu', 'seinä', 'lattia', 'katto', 'peili', 'lasi', 'kuppi', 'lautanen', 'veitsi', 'haarukka']),
  a1x_body: W(['silmä', 'korva', 'nenä', 'suu', 'hammas', 'kaula', 'selkä', 'olkapää', 'sormi', 'polvi', 'varvas', 'hiukset', 'kasvot', 'sydän']),
  a1x_animals: W(['koira', 'kissa', 'lintu', 'hevonen', 'lehmä', 'lammas', 'sika', 'hiiri', 'kani', 'karhu', 'susi', 'hirvi', 'poro', 'orava']),
  a1x_nature: W(['puu', 'kukka', 'järvi', 'meri', 'joki', 'metsä', 'vuori', 'kivi', 'taivas', 'kuu', 'tähti', 'pilvi', 'ruoho', 'saari']),
  a1x_school: W(['luokka', 'oppilas', 'reppu', 'vihko', 'kumi', 'viivoitin', 'taulu', 'liitu', 'välitunti', 'lukukausi', 'oppikirja', 'aakkoset', 'kirjain', 'tavu']),
  a1x_clock: W(['tunti', 'sekunti', 'viikko', 'kuukausi', 'vuosi', 'aamuyö', 'aamupäivä', 'keskipäivä', 'iltapäivä', 'keskiyö', 'tämä viikko', 'viime kuussa', 'ensi vuonna', 'joka viikko']),
  a1x_shops: W(['kioski', 'kirjakauppa', 'vaatekauppa', 'ruokakauppa', 'kenkäkauppa', 'kampaamo', 'parturi', 'pesula', 'kukkakauppa', 'huoltoasema', 'elokuvateatteri', 'teatteri', 'uimaranta', 'leikkipuisto']),
  a1x_transport: W(['auto', 'polkupyörä', 'metro', 'raitiovaunu', 'taksi', 'lentokone', 'laiva', 'tie', 'silta', 'satama', 'liikennevalo', 'moottoritie', 'pysäköinti', 'bensiini']),
  a1x_verbs3: W(['istua', 'seisoa', 'maata', 'juosta', 'hypätä', 'nauraa', 'itkeä', 'hymyillä', 'pestä', 'laittaa', 'pukeutua', 'nousta', 'ajaa', 'keittää']),
  a1x_adj2: W(['pitkä', 'lyhyt', 'leveä', 'kapea', 'paksu', 'ohut', 'painava', 'kevyt', 'kova', 'pehmeä', 'märkä', 'kuiva', 'kirkas', 'pimeä']),
  a1x_quantity: W(['paljon', 'monta', 'kaikki', 'jotkut', 'ei yhtään', 'pari', 'muutama', 'enemmän', 'vähemmän', 'tarpeeksi', 'liikaa', 'ainoa', 'joka', 'puolet']),
  a1x_phrases: W(['ei se mitään', 'ei haittaa', 'en ymmärrä', 'voitko toistaa', 'puhutko englantia', 'hitaasti', 'selvä', 'tietenkin', 'ehkä', 'valitettavasti', 'onnittelut', 'hyvää matkaa', 'tervetuloa', 'kiitos samoin']),
  a1x_help: W(['auta', 'hätä', 'hätänumero', 'ambulanssi', 'palo', 'vaara', 'varo', 'onnettomuus', 'kadonnut', 'varastettu', 'vahinko', 'pelastaa', 'rauhoitu', 'odota']),
};

const P = (id, type, sub) => ({ id, type, group: id, sub });

// Нови уроци на A1 (след 7-те оригинални); преместените от A2 уроци се добавят в content.js по тези id.
export const A1_ORDER = [
  'a1x_pron', 'a1x_num2', 'a2_time', 'a1x_where', 'a2_move', 'a1x_countries', 'a1x_langs', 'a1x_age',
  'a1x_family', 'a2_food', 'a1x_food2', 'a2_shop', 'a1x_fruit', 'a2_clothes', 'a1x_clothes2', 'a2_rooms',
  'a1x_house2', 'a1x_objects', 'a1x_body', 'a2_health', 'a2_weather', 'a1x_animals', 'a1x_nature', 'a1x_school',
  'a1x_clock', 'a2_city', 'a1x_shops', 'a1x_transport', 'a2_questions', 'a2_verbs1', 'a1x_verbs3', 'a2_adj',
  'a1x_adj2', 'a1x_quantity', 'a1x_phrases', 'a1x_help',
];
export const A1_MOVED_FROM_A2 = A1_ORDER.filter((id) => id.startsWith('a2_'));

export const PATH_A1X = [
  P('a1x_pron', 'words', 'hän, me, te, he…'),
  P('a1x_num2', 'words', 'nolla, kolmekymmentä, sata…'),
  P('a1x_where', 'mission', 'Missä kissa on?'),
  P('a1x_countries', 'words', 'Ruotsi, Viro, Saksa…'),
  P('a1x_langs', 'words', 'ruotsia, englantia…'),
  P('a1x_age', 'mission', 'Kuinka vanha olet?'),
  P('a1x_family', 'words', 'täti, setä, serkku…'),
  P('a1x_food2', 'words', 'ruisleipä, puuro, pulla…'),
  P('a1x_fruit', 'words', 'banaani, mansikka, sipuli…'),
  P('a1x_clothes2', 'words', 'pipo, huivi, farkut…'),
  P('a1x_house2', 'words', 'sohva, suihku, jääkaappi…'),
  P('a1x_objects', 'words', 'kynä, lasi, kuppi…'),
  P('a1x_body', 'words', 'silmä, korva, nenä…'),
  P('a1x_animals', 'words', 'koira, kissa, karhu…'),
  P('a1x_nature', 'words', 'puu, järvi, meri…'),
  P('a1x_school', 'words', 'luokka, vihko, kumi…'),
  P('a1x_clock', 'words', 'tunti, viikko, vuosi…'),
  P('a1x_shops', 'words', 'kioski, kampaamo, teatteri…'),
  P('a1x_transport', 'words', 'auto, metro, laiva…'),
  P('a1x_verbs3', 'words', 'istua, juosta, nauraa…'),
  P('a1x_adj2', 'words', 'pitkä, lyhyt, märkä…'),
  P('a1x_quantity', 'words', 'paljon, kaikki, pari…'),
  P('a1x_phrases', 'words', 'en ymmärrä, tietenkin…'),
  P('a1x_help', 'mission', 'Apua!'),
];

export const MISSIONS_A1X = {
  a1x_where: {
    steps: [
      ch('Missä avaimeni ovat?', ['Ne ovat pöydällä.', 'Haluaisin kahvin.', 'Hyvää yötä.'], 0, 'päällä'),
      ch('Missä kissa on?', ['Hyvää huomenta.', 'Kissa on sängyn alla.', 'Se maksaa viisi euroa.'], 1, 'alla'),
      arr('Missä koulu on?', ['Koulu', 'on', 'kaupan', 'vieressä'], ['vieressä', 'kaupan', 'on', 'Koulu'], 'vieressä'),
      sp('Vessa on tuolla.', 'Onko se sisällä vai ulkona?', 'ulkona'),
    ],
  },
  a1x_age: {
    steps: [
      ch('Kuinka vanha olet?', ['Olen kolmekymmentäviisi vuotta vanha.', 'Haluaisin kahvin.', 'Hyvää yötä.'], 0, 'kuinka vanha'),
      ch('Mikä on sukunimesi?', ['Se maksaa kolme euroa.', 'Sukunimeni on Virtanen.', 'Näkemiin.'], 1, 'sukunimi'),
      arr('Missä olet syntynyt?', ['Olen', 'syntynyt', 'Suomessa'], ['Suomessa', 'Olen', 'syntynyt'], 'syntynyt'),
      sp('Mikä on äidinkielesi?', 'Äidinkieleni ei ole suomi.', 'äidinkieli'),
    ],
  },
  a1x_help: {
    steps: [
      ch('Mitä on tapahtunut?', ['Tapahtui onnettomuus.', 'Haluaisin kahvin.', 'Hyvää yötä.'], 0, 'onnettomuus'),
      ch('Tarvitsetko ambulanssin?', ['Hyvää huomenta.', 'Kyllä, soittakaa ambulanssi.', 'Missä on asema?'], 1, 'ambulanssi'),
      arr('Mitä varastettiin?', ['Laukkuni', 'on', 'varastettu'], ['varastettu', 'Laukkuni', 'on'], 'varastettu'),
      sp('Mikä on hätänumero?', 'Hätänumero on yksi yksi kaksi.', 'hätänumero'),
    ],
  },
};
