// Мисии за 9 от новите уроци в A2, B1 и B2 (собствено финландско съдържание, без преводи).
// Преводите са в src/i18n/m3/*.js. ВАЖНО: финландските изречения трябва да бъдат проверени от човек, който владее езика добре.
// Тези уроци си остават със същите думи; само към тях се добавя разговорна мисия.

const blk = (...ws) => ws.map((text, i) => ({ text, tone: ['accent', 'success', 'warning', 'pro'][i % 4] }));
const arr = (partner, answer, words, wordFi) => ({ type: 'arrange', partner, words, answer, blocks: blk(...answer), wordFi });
const ch = (partner, options, correct, wordFi) => ({ type: 'choose', partner, options, correct, wordFi });
const sp = (partner, target, wordFi) => ({ type: 'speak', partner, target, wordFi });

// Кои уроци получават мисия и какъв е подзаглавието им
export const M3_SUBS = {
  a2c_doctor: 'Minulla on kurkkukipu',
  a2c_hotel: 'Haluaisin varata huoneen',
  a2c_directions: 'Missä on lähin apteekki?',
  b1c_service: 'Haluaisin varata ajan',
  b1c_work2: 'Haen työpaikkaa',
  b1c_shop3: 'Haluaisin reklamoida tuotteen',
  b2c_meeting: 'Kokous alkaa kello kymmenen',
  b2c_housing3: 'Vuokrankorotus',
  b2c_finance: 'Haen asuntolainaa',
};

export const MISSIONS_M3 = {
  a2c_doctor: {
    steps: [
      ch('Mikä sinua vaivaa?', ['Minulla on kurkkukipu.', 'Haluaisin kahvin.', 'Hyvää yötä.'], 0, 'kurkkukipu'),
      ch('Onko sinulla allergiaa?', ['Se maksaa viisi euroa.', 'Kyllä, minulla on allergia.', 'Näkemiin.'], 1, 'allergia'),
      arr('Tarvitsetko sairauslomaa?', ['Tarvitsen', 'sairauslomaa', 'kolmeksi', 'päiväksi'], ['päiväksi', 'Tarvitsen', 'kolmeksi', 'sairauslomaa'], 'sairausloma'),
      sp('Mitataan nyt verenpaine.', 'Onko verenpaineeni normaali?', 'verenpaine'),
    ],
  },
  a2c_hotel: {
    steps: [
      ch('Hyvää iltaa! Miten voin auttaa?', ['Minulla on varaus.', 'Näkemiin.', 'Se maksaa kolme euroa.'], 0, 'varaus'),
      ch('Kuinka monta yötä aiotte yöpyä?', ['Hyvää yötä.', 'Aiomme yöpyä kaksi yötä.', 'Haluaisin kahvin.'], 1, 'yöpyä'),
      arr('Missä uima-allas on?', ['Uima-allas', 'on', 'alakerrassa'], ['alakerrassa', 'Uima-allas', 'on'], 'uima-allas'),
      sp('Tarvitsetteko vielä jotain?', 'Voisinko saada vara-avaimen?', 'vara-avain'),
    ],
  },
  a2c_directions: {
    steps: [
      ch('Anteeksi, missä on lähin apteekki?', ['Se on tuolla risteyksessä.', 'Haluaisin kahvin.', 'Hyvää yötä.'], 0, 'risteyksessä'),
      ch('Onko se kaukana?', ['Hyvää huomenta.', 'Ei ole, se on kävelymatkan päässä.', 'Se maksaa kolme euroa.'], 1, 'kävelymatka'),
      arr('Mihin suuntaan minun pitää mennä?', ['Käänny', 'oikealle', 'ja', 'jatka', 'eteenpäin'], ['jatka', 'Käänny', 'eteenpäin', 'ja', 'oikealle'], 'kääntyä'),
      sp('Se on vastapäätä kirjastoa.', 'Onko se kulman takana?', 'kulma'),
    ],
  },
  b1c_service: {
    steps: [
      ch('Hyvää päivää. Miten voin auttaa?', ['Haluaisin varata ajan.', 'Näkemiin.', 'Se maksaa kolme euroa.'], 0, 'ajanvaraus'),
      ch('Onko sinulla vuoronumero?', ['Hyvää yötä.', 'Kyllä, numeroni on kaksikymmentäkolme.', 'Tänään on kylmä.'], 1, 'vuoronumero'),
      arr('Mitä haluatte tehdä?', ['Haluan', 'noutaa', 'paketin', 'noutopisteestä'], ['noutopisteestä', 'Haluan', 'paketin', 'noutaa'], 'noutopiste'),
      sp('Tarvitsemme vielä liitteen.', 'Lähetän liitteen sähköpostitse.', 'liite'),
    ],
  },
  b1c_work2: {
    steps: [
      ch('Miksi haet tätä työpaikkaa?', ['Haen, koska etsin vakituista työtä.', 'Haluaisin kahvin.', 'Hyvää yötä.'], 0, 'vakituinen'),
      ch('Haluatko tehdä kokoaikaista vai osa-aikaista työtä?', ['Näkemiin.', 'Osa-aikainen työ sopisi minulle paremmin.', 'Tänään on kylmä.'], 1, 'osa-aikainen'),
      arr('Onko sinulla työtodistus?', ['Minulla', 'on', 'työtodistus', 'edelliseltä', 'työnantajalta'], ['edelliseltä', 'on', 'Minulla', 'työnantajalta', 'työtodistus'], 'työtodistus'),
      sp('Puhutaan vielä työajasta.', 'Mikä on viikoittainen työaika?', 'työaika'),
    ],
  },
  b1c_shop3: {
    steps: [
      ch('Miten voin auttaa?', ['Haluaisin reklamoida tämän tuotteen.', 'Hyvää yötä.', 'Missä on asema?'], 0, 'reklamoida'),
      ch('Onko tuotteella vielä takuuaikaa?', ['Hyvää huomenta.', 'Kyllä, takuuaika päättyy ensi kuussa.', 'Se on punainen.'], 1, 'takuuaika'),
      arr('Miksi haluatte palauttaa tuotteen?', ['Siinä', 'ei', 'ollut', 'käyttöohjetta'], ['ollut', 'käyttöohjetta', 'Siinä', 'ei'], 'käyttöohje'),
      sp('Teillä on neljäntoista päivän palautusoikeus.', 'Maksetaanko toimituskulut takaisin?', 'toimituskulut'),
    ],
  },
  b2c_meeting: {
    steps: [
      ch('Oletko saanut kokouskutsun?', ['Kyllä, olen lukenut esityslistan.', 'Hyvää yötä.', 'Se maksaa kolme euroa.'], 0, 'esityslista'),
      ch('Kuka on kokouksen puheenjohtaja?', ['Näkemiin.', 'Puheenjohtajana toimii Virtanen.', 'Tänään on kylmä.'], 1, 'puheenjohtaja'),
      arr('Mitä tapahtuu seuraavaksi?', ['Ehdotuksesta', 'äänestetään', 'ennen', 'kokouksen', 'päättymistä'], ['päättymistä', 'ennen', 'Ehdotuksesta', 'kokouksen', 'äänestetään'], 'äänestys'),
      sp('Onko jollakin muuta sanottavaa?', 'Haluaisin kannattaa ehdotusta.', 'kannatus'),
    ],
  },
  b2c_housing3: {
    steps: [
      ch('Oletko lukenut vuokrasopimuksen?', ['Kyllä, irtisanomisaika on kolme kuukautta.', 'Hyvää yötä.', 'Se on punainen.'], 0, 'irtisanomisaika'),
      ch('Mitä taloyhtiössä aiotaan tehdä?', ['Näkemiin.', 'Taloyhtiö tekee putkiremontin.', 'Haluaisin kahvin.'], 1, 'putkiremontti'),
      arr('Mitä isännöitsijä sanoi vastikkeesta?', ['Hän', 'sanoi', 'että', 'vastike', 'nousee'], ['nousee', 'Hän', 'että', 'vastike', 'sanoi'], 'vastike'),
      sp('Tarvitsetko vielä asiakirjoja?', 'Tarvitsen isännöitsijäntodistuksen.', 'isännöitsijäntodistus'),
    ],
  },
  b2c_finance: {
    steps: [
      ch('Miten voin auttaa?', ['Haluaisin hakea asuntolainaa.', 'Hyvää yötä.', 'Missä on asema?'], 0, 'asuntolaina'),
      ch('Tarvitaanko lainaan takaus?', ['Tänään on kylmä.', 'Kyllä, pankki vaatii takauksen.', 'Näkemiin.'], 1, 'takaus'),
      arr('Onko sinulla maksuhäiriöitä?', ['Minulla', 'ei', 'ole', 'maksuhäiriötä'], ['ole', 'maksuhäiriötä', 'Minulla', 'ei'], 'maksuhäiriö'),
      sp('Onko vielä kysyttävää?', 'Milloin saan veronpalautuksen?', 'veronpalautus'),
    ],
  },
};
