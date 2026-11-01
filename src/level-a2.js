// Финландско съдържание на ниво A2 (собствено, без преводи). Преводите са в src/i18n/a2/*.js.
// ВАЖНО: финландските думи и изречения трябва да бъдат проверени от човек, който владее езика добре.

export const WORD_GROUPS_A2 = {
  a2_shop: { words: ['kauppa', 'leipä', 'juusto', 'omena', 'hinta', 'halpa', 'kallis', 'tarvitsen', 'etsin', 'kassa', 'pussi', 'tarjous', 'iso', 'pieni'] },
  a2_weather: { words: ['sää', 'aurinko', 'sade', 'lumi', 'tuuli', 'kylmä', 'lämmin', 'kuuma', 'pilvinen', 'kevät', 'kesä', 'syksy', 'talvi', 'aste'] },
  a2_move: { words: ['bussi', 'juna', 'pysäkki', 'asema', 'lippu', 'oikealle', 'vasemmalle', 'suoraan', 'katu', 'kartta', 'missä', 'lähellä', 'kaukana', 'kävellä'] },
  a2_time: { words: ['kello', 'aamu', 'päivä', 'ilta', 'yö', 'tänään', 'huomenna', 'eilen', 'herään', 'syön', 'nukun', 'töissä', 'puoli', 'minuutti'] },
  a2_clothes: { words: ['punainen', 'sininen', 'vihreä', 'keltainen', 'musta', 'valkoinen', 'takki', 'housut', 'paita', 'kengät', 'hattu', 'lapaset', 'sukat', 'mekko'] },
  a2_health: { words: ['lääkäri', 'apteekki', 'lääke', 'kuume', 'flunssa', 'päänsärky', 'vatsa', 'käsi', 'jalka', 'pää', 'kipeä', 'terve', 'aika', 'apua'] },
};

export const PATH_A2 = [
  { id: 'a2_shop', type: 'mission', group: 'a2_shop', sub: 'Tarvitsen leipää' },
  { id: 'a2_weather', type: 'words', group: 'a2_weather', sub: 'aurinko, sade, lumi…' },
  { id: 'a2_move', type: 'mission', group: 'a2_move', sub: 'Missä on asema?' },
  { id: 'a2_time', type: 'mission', group: 'a2_time', sub: 'Paljonko kello on?' },
  { id: 'a2_clothes', type: 'words', group: 'a2_clothes', sub: 'punainen, sininen…' },
  { id: 'a2_health', type: 'mission', group: 'a2_health', sub: 'Minulla on kuume' },
];

export const MISSIONS_A2 = {
  a2_shop: {
    steps: [
      { type: 'choose', partner: 'Hei! Voinko auttaa?', options: ['Etsin maitoa.', 'Minä olen kahvi.', 'Hyvää yötä.'], correct: 0, wordFi: 'etsin' },
      { type: 'choose', partner: 'Tarvitsetko pussin?', options: ['Anteeksi.', 'Kyllä, kiitos.', 'Hyvää yötä.'], correct: 1, wordFi: 'pussi' },
      {
        type: 'arrange', partner: 'Mitä tarvitset?',
        words: ['juustoa', 'Tarvitsen', 'ja', 'leipää'], answer: ['Tarvitsen', 'leipää', 'ja', 'juustoa'],
        blocks: [{ text: 'Tarvitsen', tone: 'accent' }, { text: 'leipää', tone: 'success' }, { text: 'ja', tone: 'warning' }, { text: 'juustoa', tone: 'pro' }],
        wordFi: 'tarvitsen',
      },
      { type: 'speak', partner: 'Tässä on omena.', target: 'Paljonko tämä maksaa?', wordFi: 'hinta' },
    ],
  },
  a2_move: {
    steps: [
      { type: 'choose', partner: 'Anteeksi, missä on asema?', options: ['Suoraan ja sitten oikealle.', 'Haluaisin kahvin.', 'Hyvää yötä.'], correct: 0, wordFi: 'suoraan' },
      { type: 'choose', partner: 'Onko asema kaukana?', options: ['Hyvää huomenta.', 'Ei, se on lähellä.', 'Se maksaa viisi euroa.'], correct: 1, wordFi: 'lähellä' },
      {
        type: 'arrange', partner: 'Miten pääsen pysäkille?',
        words: ['oikealle', 'sitten', 'Suoraan', 'ja'], answer: ['Suoraan', 'ja', 'sitten', 'oikealle'],
        blocks: [{ text: 'Suoraan', tone: 'accent' }, { text: 'ja', tone: 'success' }, { text: 'sitten', tone: 'warning' }, { text: 'oikealle', tone: 'pro' }],
        wordFi: 'oikealle',
      },
      { type: 'speak', partner: 'Haluatko lipun?', target: 'Yksi lippu, kiitos.', wordFi: 'lippu' },
    ],
  },
  a2_time: {
    steps: [
      { type: 'choose', partner: 'Paljonko kello on?', options: ['Kello on kahdeksan.', 'Minä asun Suomessa.', 'Kiitos paljon.'], correct: 0, wordFi: 'kello' },
      { type: 'choose', partner: 'Milloin heräät?', options: ['Tänään on kylmä.', 'Herään aamulla kuudelta.', 'Näkemiin.'], correct: 1, wordFi: 'herään' },
      {
        type: 'arrange', partner: 'Mitä teet huomenna?',
        words: ['töissä', 'Huomenna', 'olen'], answer: ['Huomenna', 'olen', 'töissä'],
        blocks: [{ text: 'Huomenna', tone: 'accent' }, { text: 'olen', tone: 'success' }, { text: 'töissä', tone: 'warning' }],
        wordFi: 'töissä',
      },
      { type: 'speak', partner: 'Milloin menet nukkumaan?', target: 'Menen nukkumaan illalla.', wordFi: 'ilta' },
    ],
  },
  a2_health: {
    steps: [
      { type: 'choose', partner: 'Hei! Mikä sinua vaivaa?', options: ['Minulla on kuume.', 'Haluaisin kahvin.', 'Hauska tavata.'], correct: 0, wordFi: 'kuume' },
      { type: 'choose', partner: 'Onko sinulla päänsärkyä?', options: ['Kiitos paljon.', 'Kyllä, minulla on päänsärky.', 'Hyvää yötä.'], correct: 1, wordFi: 'päänsärky' },
      {
        type: 'arrange', partner: 'Mikä on kipeä?',
        words: ['kipeä', 'Vatsani', 'on'], answer: ['Vatsani', 'on', 'kipeä'],
        blocks: [{ text: 'Vatsani', tone: 'accent' }, { text: 'on', tone: 'success' }, { text: 'kipeä', tone: 'warning' }],
        wordFi: 'vatsa',
      },
      { type: 'speak', partner: 'Tarvitsetko ajan lääkärille?', target: 'Haluaisin ajan lääkärille.', wordFi: 'aika' },
    ],
  },
};
