// Разширение на ниво A2: още уроци (собствено финландско съдържание, без преводи).
// Преводите са в src/i18n/a2b/*.js. ВАЖНО: финландските думи и изречения трябва да бъдат проверени от човек, който владее езика добре.

const W = (words) => ({ words });

export const WORD_GROUPS_A2B = {
  a2_rest: W(['ruokalista', 'tilata', 'lasku', 'varata', 'jälkiruoka', 'pääruoka', 'alkuruoka', 'maistuu', 'herkullinen', 'kasvisruoka', 'allerginen', 'lisää', 'mukava', 'ilman']),
  a2_food: W(['ruoka', 'juoma', 'liha', 'kala', 'kana', 'peruna', 'riisi', 'kasvis', 'keitto', 'salaatti', 'mehu', 'olut', 'kananmuna', 'voi']),
  a2_home: W(['asunto', 'vuokrata', 'kerros', 'hissi', 'parveke', 'sähkö', 'lämpö', 'avain', 'osoite', 'muuttaa', 'remontti', 'huoneisto', 'kaksio', 'yksiö']),
  a2_rooms: W(['koti', 'huone', 'keittiö', 'makuuhuone', 'kylpyhuone', 'olohuone', 'ovi', 'ikkuna', 'pöytä', 'tuoli', 'sänky', 'kaappi', 'vuokra', 'naapuri']),
  a2_city: W(['kaupunki', 'pankki', 'posti', 'kirjasto', 'koulu', 'sairaala', 'ravintola', 'tori', 'puisto', 'museo', 'kirkko', 'hotelli', 'uimahalli', 'risteys']),
  a2_bank: W(['tili', 'raha', 'tilinumero', 'nostaa', 'maksu', 'lähettää', 'paketti', 'kirje', 'postimerkki', 'vastaanottaja', 'lomake', 'allekirjoitus', 'passi', 'kuitti']),
  a2_phone: W(['puhelin', 'viesti', 'numero', 'sähköposti', 'sopia', 'tavata', 'kutsu', 'ehtiä', 'vapaa', 'ensi viikolla', 'aikaisin', 'myöhään', 'kiva', 'harmi']),
  a2_adverbs: W(['aina', 'usein', 'joskus', 'harvoin', 'ei koskaan', 'nyt', 'myöhemmin', 'pian', 'jo', 'vielä', 'sitten', 'ensin', 'viimeksi', 'joka päivä']),
  a2_work: W(['työpaikka', 'työpäivä', 'tauko', 'kokous', 'esimies', 'kollega', 'työsopimus', 'loma', 'vuoro', 'ylityö', 'haastattelu', 'hakea', 'kokemus', 'kieli']),
  a2_jobs: W(['opettaja', 'sairaanhoitaja', 'kokki', 'kuljettaja', 'siivooja', 'myyjä', 'insinööri', 'rakentaja', 'tarjoilija', 'poliisi', 'palomies', 'opiskelija', 'työnantaja', 'palkka']),
  a2_school: W(['kurssi', 'oppitunti', 'läksyt', 'koe', 'sana', 'lause', 'kielioppi', 'ääntäminen', 'harjoitus', 'sanakirja', 'kysymys', 'vastaus', 'virhe', 'oppia']),
  a2_verbs1: W(['tehdä', 'mennä', 'tulla', 'ostaa', 'myydä', 'antaa', 'ottaa', 'nähdä', 'kuulla', 'ymmärtää', 'tietää', 'osata', 'odottaa', 'auttaa']),
  a2_verbs2: W(['opiskella', 'työskennellä', 'soittaa', 'kirjoittaa', 'lukea', 'katsoa', 'kuunnella', 'kysyä', 'vastata', 'avata', 'sulkea', 'löytää', 'kokeilla', 'muistaa']),
  a2_past: W(['olin', 'kävin', 'menin', 'söin', 'join', 'näin', 'tein', 'ostin', 'tapasin', 'luin', 'nukuin', 'viikonloppuna', 'viime viikolla', 'hauskaa']),
  a2_hobby: W(['harrastus', 'urheilu', 'jalkapallo', 'uinti', 'hiihto', 'pyöräily', 'musiikki', 'elokuva', 'kirja', 'tanssia', 'laulaa', 'piirtää', 'sauna', 'retki']),
  a2_adj: W(['hyvä', 'huono', 'uusi', 'vanha', 'nopea', 'hidas', 'helppo', 'vaikea', 'kaunis', 'ruma', 'puhdas', 'likainen', 'täysi', 'tyhjä']),
  a2_feel: W(['iloinen', 'surullinen', 'väsynyt', 'nälkäinen', 'janoinen', 'vihainen', 'rauhallinen', 'kiireinen', 'pidän', 'rakastan', 'pelkään', 'ikävä', 'huolissaan', 'ylpeä']),
  a2_questions: W(['kuka', 'mitä', 'milloin', 'miksi', 'miten', 'kuinka monta', 'kenen', 'kumpi', 'mihin', 'kuinka kauan', 'kuinka usein', 'voinko', 'saanko', 'tarkoittaa']),
};

export const PATH_A2B = [
  { id: 'a2_rest', type: 'mission', group: 'a2_rest', sub: 'Haluaisin keiton' },
  { id: 'a2_food', type: 'words', group: 'a2_food', sub: 'liha, kala, peruna…' },
  { id: 'a2_home', type: 'mission', group: 'a2_home', sub: 'Etsin yksiötä' },
  { id: 'a2_rooms', type: 'words', group: 'a2_rooms', sub: 'keittiö, makuuhuone…' },
  { id: 'a2_city', type: 'words', group: 'a2_city', sub: 'pankki, posti, kirjasto…' },
  { id: 'a2_bank', type: 'mission', group: 'a2_bank', sub: 'Haluaisin lähettää paketin' },
  { id: 'a2_phone', type: 'mission', group: 'a2_phone', sub: 'Tulisitko kahville?' },
  { id: 'a2_adverbs', type: 'words', group: 'a2_adverbs', sub: 'aina, usein, joskus…' },
  { id: 'a2_work', type: 'mission', group: 'a2_work', sub: 'Työskentelen ravintolassa' },
  { id: 'a2_jobs', type: 'words', group: 'a2_jobs', sub: 'opettaja, kokki…' },
  { id: 'a2_school', type: 'mission', group: 'a2_school', sub: 'Opiskelen suomea' },
  { id: 'a2_verbs1', type: 'words', group: 'a2_verbs1', sub: 'tehdä, mennä, tulla…' },
  { id: 'a2_verbs2', type: 'words', group: 'a2_verbs2', sub: 'opiskella, lukea…' },
  { id: 'a2_past', type: 'mission', group: 'a2_past', sub: 'Eilen olin töissä' },
  { id: 'a2_hobby', type: 'words', group: 'a2_hobby', sub: 'musiikki, sauna, retki…' },
  { id: 'a2_adj', type: 'words', group: 'a2_adj', sub: 'hyvä, huono, uusi…' },
  { id: 'a2_feel', type: 'words', group: 'a2_feel', sub: 'iloinen, väsynyt…' },
  { id: 'a2_questions', type: 'words', group: 'a2_questions', sub: 'kuka, mitä, milloin…' },
];

const blk = (...ws) => ws.map((text, i) => ({ text, tone: ['accent', 'success', 'warning', 'pro'][i % 4] }));
const arr = (partner, answer, words, wordFi) => ({ type: 'arrange', partner, words, answer, blocks: blk(...answer), wordFi });

export const MISSIONS_A2B = {
  a2_rest: {
    steps: [
      { type: 'choose', partner: 'Tervetuloa! Onko teillä pöytävaraus?', options: ['Kyllä, varasin pöydän kahdelle.', 'Hyvää huomenta.', 'Missä on asema?'], correct: 0, wordFi: 'varata' },
      { type: 'choose', partner: 'Mitä haluatte tilata?', options: ['Paljonko kello on?', 'Haluaisin keiton ja vettä.', 'Minulla on kuume.'], correct: 1, wordFi: 'tilata' },
      arr('Miten ruoka maistuu?', ['Keitto', 'on', 'herkullinen'], ['herkullinen', 'Keitto', 'on'], 'herkullinen'),
      { type: 'speak', partner: 'Haluatteko jälkiruokaa?', target: 'Voisinko saada laskun?', wordFi: 'lasku' },
    ],
  },
  a2_home: {
    steps: [
      { type: 'choose', partner: 'Hei! Etsitkö asuntoa?', options: ['Kyllä, etsin yksiötä.', 'Kiitos, minulla on kuume.', 'Tänään on maanantai.'], correct: 0, wordFi: 'yksiö' },
      { type: 'choose', partner: 'Missä kerroksessa asut?', options: ['Hyvää yötä.', 'Asun kolmannessa kerroksessa.', 'Minulla on sisko.'], correct: 1, wordFi: 'kerros' },
      arr('Mitä asunnossa on?', ['Asunnossa', 'on', 'parveke'], ['parveke', 'on', 'Asunnossa'], 'parveke'),
      { type: 'speak', partner: 'Tässä on avain.', target: 'Mikä on osoite?', wordFi: 'osoite' },
    ],
  },
  a2_bank: {
    steps: [
      { type: 'choose', partner: 'Hei! Miten voin auttaa?', options: ['Haluaisin lähettää paketin.', 'Olen väsynyt.', 'Tänään on maanantai.'], correct: 0, wordFi: 'paketti' },
      { type: 'choose', partner: 'Mihin paketti lähtee?', options: ['Hyvää yötä.', 'Se lähtee ulkomaille.', 'Se on herkullinen.'], correct: 1, wordFi: 'lähettää' },
      arr('Tarvitsen henkilöllisyystodistuksen.', ['Tässä', 'on', 'passini'], ['passini', 'Tässä', 'on'], 'passi'),
      { type: 'speak', partner: 'Tarvitsetko kuitin?', target: 'Kyllä, haluan kuitin.', wordFi: 'kuitti' },
    ],
  },
  a2_phone: {
    steps: [
      { type: 'choose', partner: 'Hei! Tulisitko kahville lauantaina?', options: ['Kiitos kutsusta, mielelläni!', 'Minulla on kuume.', 'Missä on asema?'], correct: 0, wordFi: 'kutsu' },
      { type: 'choose', partner: 'Milloin sinulle sopii?', options: ['Hauska tavata.', 'Lauantaina kello kaksi.', 'Anteeksi.'], correct: 1, wordFi: 'sopia' },
      arr('Ehditkö tulla?', ['Harmi', 'en', 'ehdi', 'tulla'], ['tulla', 'en', 'Harmi', 'ehdi'], 'ehtiä'),
      { type: 'speak', partner: 'Mikä sinun numerosi on?', target: 'Lähetän sinulle viestin.', wordFi: 'viesti' },
    ],
  },
  a2_work: {
    steps: [
      { type: 'choose', partner: 'Missä työskentelet?', options: ['Työskentelen ravintolassa.', 'Tänään on kylmä.', 'Minulla on sisko.'], correct: 0, wordFi: 'työpaikka' },
      { type: 'choose', partner: 'Milloin sinulla on tauko?', options: ['Hyvää yötä.', 'Minulla on tauko kello kaksitoista.', 'Missä on asema?'], correct: 1, wordFi: 'tauko' },
      arr('Onko sinulla kokemusta?', ['Minulla', 'on', 'työkokemusta'], ['on', 'työkokemusta', 'Minulla'], 'kokemus'),
      { type: 'speak', partner: 'Kerro itsestäsi.', target: 'Haluaisin hakea työtä.', wordFi: 'hakea' },
    ],
  },
  a2_school: {
    steps: [
      { type: 'choose', partner: 'Millä kurssilla olet?', options: ['Olen suomen kurssilla.', 'Minulla on kuume.', 'Hyvää yötä.'], correct: 0, wordFi: 'kurssi' },
      { type: 'choose', partner: 'Onko sinulla kysymys?', options: ['Hyvää huomenta.', 'Kyllä, mitä tämä sana tarkoittaa?', 'Näkemiin.'], correct: 1, wordFi: 'sana' },
      arr('Oletko tehnyt läksyt?', ['Olen', 'tehnyt', 'läksyt'], ['läksyt', 'Olen', 'tehnyt'], 'läksyt'),
      { type: 'speak', partner: 'Haluatko kysyä jotain?', target: 'Minulla on kysymys.', wordFi: 'kysymys' },
    ],
  },
  a2_past: {
    steps: [
      { type: 'choose', partner: 'Missä olit eilen?', options: ['Olin töissä.', 'Hyvää yötä.', 'Se maksaa viisi euroa.'], correct: 0, wordFi: 'olin' },
      { type: 'choose', partner: 'Mitä teit viikonloppuna?', options: ['Haluaisin kahvin.', 'Näin ystävän.', 'Tänään on kylmä.'], correct: 1, wordFi: 'näin' },
      arr('Mitä söit?', ['Söin', 'keittoa', 'ja', 'leipää'], ['leipää', 'ja', 'Söin', 'keittoa'], 'söin'),
      { type: 'speak', partner: 'Oliko hauskaa?', target: 'Kyllä, minulla oli hauskaa.', wordFi: 'hauskaa' },
    ],
  },
};
