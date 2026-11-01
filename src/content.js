// Финландско съдържание на пробния курс A1 (собствено, без преводи).
// Преводите са в src/i18n/*.js. Реда на думите и стъпките тук трябва да съвпада с преводите.
// ВАЖНО: финландските изречения и думи трябва да бъдат проверени от човек, който владее езика добре.

import { WORD_GROUPS_A2, PATH_A2 as PATH_A2_BASE, MISSIONS_A2 } from './level-a2.js';
import { WORD_GROUPS_A2B, PATH_A2B, MISSIONS_A2B } from './level-a2b.js';

import { WORD_GROUPS_B, PATH_B1, PATH_B2, MISSIONS_B } from './level-b.js';

const PATH_A2 = [...PATH_A2_BASE, ...PATH_A2B];

const WORD_GROUPS_A1 = {
  m1: {
    words: ['hei', 'moi', 'hyvää huomenta', 'hyvää päivää', 'hyvää iltaa', 'hyvää yötä', 'näkemiin', 'kiitos', 'anteeksi', 'ole hyvä', 'kyllä', 'ei'],
  },
  m2: {
    words: ['minä', 'sinä', 'nimi', 'olen', 'olet', 'mikä', 'mistä', 'asun', 'Suomessa', 'kotoisin', 'puhun', 'vähän', 'suomea', 'hauska tavata'],
  },
  num: {
    required: true,
    words: ['yksi', 'kaksi', 'kolme', 'neljä', 'viisi', 'kuusi', 'seitsemän', 'kahdeksan', 'yhdeksän', 'kymmenen',
      'yksitoista', 'kaksitoista', 'kolmetoista', 'neljätoista', 'viisitoista', 'kuusitoista', 'seitsemäntoista',
      'kahdeksantoista', 'yhdeksäntoista', 'kaksikymmentä'],
  },
  m3: {
    words: ['kahvi', 'tee', 'maito', 'sokeri', 'vesi', 'kakku', 'haluaisin', 'tässä', 'mukaan', 'euro', 'kortti', 'maksaa', 'kuinka paljon', 'kahvila'],
  },
  days: {
    required: true,
    words: ['maanantai', 'tiistai', 'keskiviikko', 'torstai', 'perjantai', 'lauantai', 'sunnuntai'],
  },
  months: {
    required: true,
    words: ['tammikuu', 'helmikuu', 'maaliskuu', 'huhtikuu', 'toukokuu', 'kesäkuu', 'heinäkuu', 'elokuu', 'syyskuu', 'lokakuu', 'marraskuu', 'joulukuu'],
  },
  m4: {
    words: ['äiti', 'isä', 'sisko', 'veli', 'lapsi', 'poika', 'tytär', 'isoäiti', 'isoisä', 'perhe', 'vanhemmat', 'mies', 'vaimo', 'ystävä'],
  },
};

// Път: ред на уроците. type: 'mission' (разговор + думи) или 'words' (само думи)
export const PATH = [
  { id: 'm1', type: 'mission', group: 'm1', sub: 'Hei, kiitos' },
  { id: 'm2', type: 'mission', group: 'm2', sub: 'Nimeni on…' },
  { id: 'num', type: 'words', group: 'num', sub: 'yksi, kaksi, kolme…', required: true },
  { id: 'm3', type: 'mission', group: 'm3', sub: 'Haluaisin kahvin' },
  { id: 'days', type: 'words', group: 'days', sub: 'maanantai, tiistai…', required: true },
  { id: 'months', type: 'words', group: 'months', sub: 'tammikuu, helmikuu…', required: true },
  { id: 'm4', type: 'mission', group: 'm4', sub: 'Minulla on sisko' },
];

// Стъпки на мисиите (само финландски текст и структура).
// choose: избор на отговор; arrange: подреждане на думи; speak: кажи на глас (самоотбелязване)
// В текста „{from}“ се заменя с примерна държава според езика на приложението (напр. „Bulgariasta“).
const MISSIONS_A1 = {
  m1: {
    steps: [
      { type: 'choose', partner: 'Huomenta!', options: ['Huomenta!', 'Hyvää yötä.', 'Näkemiin.'], correct: 0, wordFi: 'hyvää huomenta' },
      { type: 'choose', partner: 'Kiitos paljon!', options: ['Ole hyvä.', 'Anteeksi.', 'Hyvää yötä.'], correct: 0, wordFi: 'ole hyvä' },
      {
        type: 'arrange', partner: 'Näkemiin!',
        words: ['näkemiin', 'Kiitos', 'ja'], answer: ['Kiitos', 'ja', 'näkemiin'],
        blocks: [{ text: 'Kiitos', tone: 'accent' }, { text: 'ja', tone: 'success' }, { text: 'näkemiin', tone: 'warning' }],
        wordFi: 'ja',
      },
      { type: 'speak', partner: 'Hyvää päivää!', target: 'Hyvää päivää!', wordFi: 'hyvää päivää' },
    ],
  },
  m2: {
    steps: [
      { type: 'choose', partner: 'Hei! Mikä sinun nimesi on?', options: ['Nimeni on Ivan.', 'Haluaisin kahvin.', 'Hyvää yötä.'], correct: 0, wordFi: 'nimi' },
      { type: 'choose', partner: 'Mistä olet kotoisin?', options: ['Olen {from}.', 'Kiitos paljon.', 'Näkemiin.'], correct: 0, wordFi: 'kotoisin' },
      {
        type: 'arrange', partner: 'Missä asut?',
        words: ['Suomessa', 'asun', 'Minä'], answer: ['Minä', 'asun', 'Suomessa'],
        blocks: [{ text: 'Minä', tone: 'accent' }, { text: 'asun', tone: 'success' }, { text: 'Suomessa', tone: 'warning' }],
        wordFi: 'asun',
      },
      { type: 'speak', partner: 'Puhutko suomea?', target: 'Puhun vähän suomea.', wordFi: 'puhun' },
    ],
  },
  m3: {
    steps: [
      { type: 'choose', partner: 'Hei! Mitä saisi olla?', options: ['Haluaisin yhden kahvin, kiitos.', 'Minä olen kahvi.', 'Missä on asema?'], correct: 0, wordFi: 'kahvi' },
      { type: 'choose', partner: 'Selvä. Haluatko maitoa?', options: ['Hyvää yötä.', 'Kyllä, kiitos.', 'Kuinka paljon?'], correct: 1, wordFi: 'maito' },
      {
        type: 'arrange', partner: 'Tässä vai mukaan?',
        words: ['kiitos', 'Haluaisin', 'mukaan', 'sen'], answer: ['Haluaisin', 'sen', 'mukaan', 'kiitos'],
        blocks: [{ text: 'Haluaisin', tone: 'accent' }, { text: 'sen', tone: 'success' }, { text: 'mukaan', tone: 'warning' }, { text: 'kiitos', tone: 'pro' }],
        wordFi: 'mukaan',
      },
      { type: 'speak', partner: 'Se tekee 4,50 euroa.', target: 'Voinko maksaa kortilla?', wordFi: 'kortti' },
    ],
  },
  m4: {
    steps: [
      { type: 'choose', partner: 'Hei! Onko sinulla sisaruksia?', options: ['Kyllä, minulla on sisko.', 'Haluaisin kahvin.', 'Missä on asema?'], correct: 0, wordFi: 'sisko' },
      { type: 'choose', partner: 'Mikä hänen nimensä on?', options: ['Kuinka paljon se maksaa?', 'Hänen nimensä on Elena.', 'Tänään on kylmä.'], correct: 1, wordFi: 'nimi' },
      {
        type: 'arrange', partner: 'Onko sinulla lapsia?',
        words: ['lasta', 'kaksi', 'Minulla', 'on'], answer: ['Minulla', 'on', 'kaksi', 'lasta'],
        blocks: [{ text: 'Minulla on', tone: 'accent' }, { text: 'kaksi', tone: 'success' }, { text: 'lasta', tone: 'warning' }],
        wordFi: 'lapsi',
      },
      { type: 'speak', partner: 'Kerro perheestäsi!', target: 'Minulla on sisko ja veli.', wordFi: 'veli' },
    ],
  },
};

// Всички нива заедно. PATH остава пътят на A1; LEVELS описва всяко ниво поотделно.
export const WORD_GROUPS = { ...WORD_GROUPS_A1, ...WORD_GROUPS_A2, ...WORD_GROUPS_A2B, ...WORD_GROUPS_B };
export const MISSIONS = { ...MISSIONS_A1, ...MISSIONS_A2, ...MISSIONS_A2B, ...MISSIONS_B };
export const LEVELS = [
  { id: 'A1', path: PATH },
  { id: 'A2', path: PATH_A2 },
  { id: 'B1', path: PATH_B1 },
  { id: 'B2', path: PATH_B2 },
];
export const ALL_PATH = LEVELS.flatMap((l) => l.path);
export function levelGroups(id) { return LEVELS.find((l) => l.id === id).path.map((p) => p.group); }
export function levelOfGroup(group) {
  const l = LEVELS.find((lv) => lv.path.some((p) => p.group === group));
  return l ? l.id : null;
}
