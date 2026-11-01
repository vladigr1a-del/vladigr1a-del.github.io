// Финландско съдържание на нива B1 и B2 (собствено, без преводи). Преводите са в src/i18n/b/*.js.
// ВАЖНО: финландските думи и изречения трябва да бъдат проверени от човек, който владее езика добре.

const W = (words) => ({ words });
const blk = (...ws) => ws.map((text, i) => ({ text, tone: ['accent', 'success', 'warning', 'pro'][i % 4] }));
const arr = (partner, answer, words, wordFi) => ({ type: 'arrange', partner, words, answer, blocks: blk(...answer), wordFi });
const ch = (partner, options, correct, wordFi) => ({ type: 'choose', partner, options, correct, wordFi });
const sp = (partner, target, wordFi) => ({ type: 'speak', partner, target, wordFi });

export const WORD_GROUPS_B = {
  // ---- B1 ----
  b1_opinion: W(['mielestäni', 'samaa mieltä', 'eri mieltä', 'ehdottaa', 'suositella', 'mielenkiintoinen', 'tylsä', 'tärkeä', 'ongelma', 'ratkaisu', 'syy', 'vaihtoehto', 'päättää', 'etu']),
  b1_news: W(['uutiset', 'sanomalehti', 'hallitus', 'vaalit', 'laki', 'yhteiskunta', 'talous', 'ympäristö', 'ilmasto', 'kansalainen', 'oikeus', 'velvollisuus', 'järjestö', 'tapahtuma']),
  b1_health: W(['oire', 'kipu', 'sairaus', 'hoito', 'resepti', 'rokote', 'tutkimus', 'tulos', 'väsymys', 'unettomuus', 'stressi', 'liikunta', 'terveellinen', 'kuntoutus']),
  b1_abstract: W(['tilanne', 'mahdollisuus', 'tarve', 'kehitys', 'muutos', 'vaikutus', 'seuraus', 'tarkoitus', 'asia', 'tapa', 'taito', 'ajatus', 'tunne', 'suunnitelma']),
  b1_job: W(['hakemus', 'ansioluettelo', 'koulutus', 'pätevyys', 'vahvuus', 'heikkous', 'tavoite', 'tiimi', 'vastuu', 'aloittaa', 'koeaika', 'sopeutua', 'haaste', 'kehittyä']),
  b1_conn: W(['koska', 'vaikka', 'mutta', 'joten', 'jos', 'kun', 'ennen kuin', 'sen jälkeen', 'samalla', 'kuitenkin', 'myös', 'tai', 'sekä', 'että']),
  b1_travel: W(['lento', 'lentokenttä', 'matkalaukku', 'peruuttaa', 'myöhässä', 'vaihtaa', 'lähtö', 'saapuminen', 'tulli', 'majoitus', 'reitti', 'aikataulu', 'vuokra-auto', 'matkavakuutus']),
  b1_verbs: W(['suunnitella', 'vaikuttaa', 'kehittää', 'vertailla', 'valita', 'hoitaa', 'järjestää', 'osallistua', 'kertoa', 'selittää', 'kannattaa', 'tarvita', 'yrittää', 'onnistua']),
  b1_housing: W(['vika', 'korjata', 'vuotaa', 'melu', 'häiriö', 'isännöitsijä', 'vuokranantaja', 'sopimus', 'irtisanoa', 'vakuus', 'kunnossa', 'rikki', 'huolto', 'ilmoittaa']),
  b1_culture: W(['kulttuuri', 'näyttely', 'konsertti', 'juhla', 'perinne', 'joulu', 'juhannus', 'vappu', 'lahja', 'vieras', 'syntymäpäivä', 'häät', 'matkamuisto', 'esitys']),
  b1_edu: W(['yliopisto', 'ammattikoulu', 'tutkinto', 'opintotuki', 'todistus', 'arvosana', 'harjoittelu', 'ura', 'ammatti', 'työllistyä', 'kielitaito', 'oppisopimus', 'valmistua', 'ilmoittautua']),
  b1_money: W(['budjetti', 'säästää', 'laina', 'korko', 'vero', 'tulot', 'menot', 'tuki', 'eläke', 'vakuutus', 'sijoittaa', 'velka', 'alennus', 'ostos']),
  // ---- B2 ----
  b2_debate: W(['väite', 'perustella', 'argumentti', 'näkökulma', 'kiistää', 'painottaa', 'myöntää', 'vastustaa', 'yhtäältä', 'toisaalta', 'päinvastoin', 'esimerkiksi', 'johtopäätös', 'oletus']),
  b2_env: W(['ilmastonmuutos', 'päästöt', 'uusiutuva', 'kierrätys', 'kestävä kehitys', 'luonnonsuojelu', 'saastuminen', 'energiansäästö', 'jätteet', 'kulutus', 'fossiilinen', 'tulevaisuus', 'vastuullinen', 'ympäristöystävällinen']),
  b2_complain: W(['valitus', 'reklamaatio', 'korvaus', 'takuu', 'palauttaa', 'hyvitys', 'virheellinen', 'viivästyä', 'toimitus', 'asiakaspalvelu', 'pahoitella', 'selvittää', 'vaatia', 'tyytymätön']),
  b2_conn: W(['siitä huolimatta', 'sen sijaan', 'nimittäin', 'itse asiassa', 'tosin', 'sen vuoksi', 'ensinnäkin', 'lopuksi', 'lisäksi', 'toisin sanoen', 'yleensä', 'ainakin', 'korkeintaan', 'jopa']),
  b2_media: W(['toimittaja', 'artikkeli', 'lähde', 'luotettava', 'otsikko', 'mielipidekirjoitus', 'mainonta', 'tietosuoja', 'valeuutinen', 'julkaista', 'kommentoida', 'seurata', 'uutislähetys', 'tilaaja']),
  b2_verbs: W(['arvioida', 'perustaa', 'toteuttaa', 'edistää', 'estää', 'korostaa', 'tulkita', 'todeta', 'käsitellä', 'sisältää', 'muodostaa', 'vähentää', 'lisätä', 'kuvata']),
  b2_negot: W(['neuvottelu', 'sopimusehto', 'määräaika', 'kustannus', 'kilpailija', 'asiakas', 'kompromissi', 'hyväksyä', 'hylätä', 'neuvotella', 'sitoutua', 'edellyttää', 'ehto', 'osapuoli']),
  b2_adj: W(['merkittävä', 'olennainen', 'kiistanalainen', 'epäselvä', 'tehokas', 'joustava', 'riittävä', 'harhaanjohtava', 'käytännöllinen', 'oikeudenmukainen', 'ristiriitainen', 'kohtuullinen', 'vaativa', 'yksityiskohtainen']),
  b2_culture: W(['sopeutuminen', 'kulttuuriero', 'ennakkoluulo', 'kohteliaisuus', 'odotus', 'yhteisö', 'identiteetti', 'monikulttuurinen', 'kotoutuminen', 'vähemmistö', 'enemmistö', 'suvaitsevaisuus', 'erilainen', 'samankaltainen']),
  b2_law: W(['viranomainen', 'päätös', 'lupa', 'oleskelulupa', 'kansalaisuus', 'asiakirja', 'vahvistaa', 'määräys', 'sakko', 'tuomio', 'todistaja', 'oikeusapu', 'oikaisuvaatimus', 'muutoksenhaku']),
  b2_science: W(['tutkija', 'keksintö', 'teknologia', 'tekoäly', 'ohjelmisto', 'verkko', 'tieto', 'laite', 'sovellus', 'päivitys', 'salasana', 'turvallisuus', 'yhteys', 'kehittäjä']),
  b2_idiom: W(['ottaa huomioon', 'ottaa vastuu', 'pitää kiinni', 'tulla toimeen', 'päästä eteenpäin', 'jäädä kesken', 'olla mielessä', 'ottaa selvää', 'pitää huolta', 'olla kiinnostunut', 'tulla kysymykseen', 'ottaa yhteyttä', 'antaa palautetta', 'olla kiire']),
};

const P = (id, group, type, sub) => ({ id, type, group, sub });

export const PATH_B1 = [
  P('b1_opinion', 'b1_opinion', 'mission', 'Mielestäni se on hyvä'),
  P('b1_news', 'b1_news', 'words', 'uutiset, hallitus, laki…'),
  P('b1_health', 'b1_health', 'mission', 'Minulla on ollut päänsärkyä'),
  P('b1_abstract', 'b1_abstract', 'words', 'tilanne, mahdollisuus…'),
  P('b1_job', 'b1_job', 'mission', 'Työhaastattelu'),
  P('b1_conn', 'b1_conn', 'words', 'koska, vaikka, mutta…'),
  P('b1_travel', 'b1_travel', 'mission', 'Lentoni on myöhässä'),
  P('b1_verbs', 'b1_verbs', 'words', 'suunnitella, valita…'),
  P('b1_housing', 'b1_housing', 'mission', 'Hana vuotaa'),
  P('b1_culture', 'b1_culture', 'words', 'juhannus, vappu, joulu…'),
  P('b1_edu', 'b1_edu', 'words', 'yliopisto, tutkinto…'),
  P('b1_money', 'b1_money', 'words', 'budjetti, laina, vero…'),
];

export const PATH_B2 = [
  P('b2_debate', 'b2_debate', 'mission', 'Toisaalta… toisaalta…'),
  P('b2_env', 'b2_env', 'words', 'ilmastonmuutos, päästöt…'),
  P('b2_complain', 'b2_complain', 'mission', 'Haluaisin tehdä reklamaation'),
  P('b2_conn', 'b2_conn', 'words', 'itse asiassa, lisäksi…'),
  P('b2_media', 'b2_media', 'mission', 'Onko lähde luotettava?'),
  P('b2_verbs', 'b2_verbs', 'words', 'arvioida, edistää…'),
  P('b2_negot', 'b2_negot', 'mission', 'Neuvottelu'),
  P('b2_adj', 'b2_adj', 'words', 'merkittävä, olennainen…'),
  P('b2_culture', 'b2_culture', 'mission', 'Sopeutuminen Suomeen'),
  P('b2_law', 'b2_law', 'words', 'viranomainen, lupa…'),
  P('b2_science', 'b2_science', 'words', 'tekoäly, ohjelmisto…'),
  P('b2_idiom', 'b2_idiom', 'words', 'ottaa yhteyttä…'),
];

export const MISSIONS_B = {
  b1_opinion: {
    steps: [
      ch('Mitä mieltä olet tästä ravintolasta?', ['Mielestäni se on aika kallis.', 'Hyvää yötä.', 'Minulla on kuume.'], 0, 'mielestäni'),
      ch('Minusta tämä on hyvä idea.', ['Näkemiin.', 'Olen samaa mieltä.', 'Missä on asema?'], 1, 'samaa mieltä'),
      arr('Miksi et halua tulla?', ['En', 'tule', 'koska', 'olen', 'väsynyt'], ['väsynyt', 'koska', 'En', 'olen', 'tule'], 'syy'),
      sp('Mitä ehdotat?', 'Ehdotan, että menemme elokuviin.', 'ehdottaa'),
    ],
  },
  b1_health: {
    steps: [
      ch('Mikä sinua vaivaa?', ['Minulla on ollut päänsärkyä kolme päivää.', 'Haluaisin kahvin.', 'Olen kotoisin Suomesta.'], 0, 'kipu'),
      ch('Onko sinulla allergioita?', ['Näkemiin.', 'Ei ole, mutta olen väsynyt.', 'Se maksaa viisi euroa.'], 1, 'väsymys'),
      arr('Kuinka kauan oireet ovat kestäneet?', ['Oireet', 'ovat', 'kestäneet', 'viikon'], ['viikon', 'kestäneet', 'Oireet', 'ovat'], 'oire'),
      sp('Tässä on resepti.', 'Pitääkö lääkettä ottaa ruoan kanssa?', 'resepti'),
    ],
  },
  b1_job: {
    steps: [
      ch('Mikä on suurin vahvuutesi?', ['Olen luotettava ja oppimishaluinen.', 'Minulla on kuume.', 'Tänään on kylmä.'], 0, 'vahvuus'),
      ch('Miksi haluat tämän työn?', ['Hyvää huomenta.', 'Haluan kehittyä ja oppia uutta.', 'Minulla on sisko.'], 1, 'kehittyä'),
      arr('Milloin voit aloittaa?', ['Voin', 'aloittaa', 'heti'], ['heti', 'Voin', 'aloittaa'], 'aloittaa'),
      sp('Onko sinulla kysyttävää?', 'Millainen tiimi minulla olisi?', 'tiimi'),
    ],
  },
  b1_travel: {
    steps: [
      ch('Lentosi on myöhässä.', ['Kuinka paljon se on myöhässä?', 'Haluaisin keiton.', 'Hyvää yötä.'], 0, 'myöhässä'),
      ch('Tarvitsetko apua matkalaukun kanssa?', ['Hauska tavata.', 'Kyllä, kiitos, matkalaukku on raskas.', 'Lähden huomenna.'], 1, 'matkalaukku'),
      arr('Mitä haluat tehdä lipulle?', ['Haluaisin', 'vaihtaa', 'lipun', 'huomiseen'], ['lipun', 'huomiseen', 'Haluaisin', 'vaihtaa'], 'vaihtaa'),
      sp('Missä aiot yöpyä?', 'Olen varannut huoneen hotellista.', 'majoitus'),
    ],
  },
  b1_housing: {
    steps: [
      ch('Mikä on ongelma?', ['Hana vuotaa.', 'Haluaisin kahvin.', 'Hyvää yötä.'], 0, 'vuotaa'),
      ch('Onko tämä ensimmäinen kerta?', ['Ei, ilmoitin siitä jo viime viikolla.', 'Kyllä, kiitos.', 'Se maksaa viisi euroa.'], 0, 'ilmoittaa'),
      arr('Mitä toivot?', ['Toivon', 'että', 'hana', 'korjataan'], ['korjataan', 'hana', 'Toivon', 'että'], 'korjata'),
      sp('Voin soittaa huoltomiehelle.', 'Kiitos, sopiiko huomenna aamulla?', 'huolto'),
    ],
  },
  b2_debate: {
    steps: [
      ch('Onko tämä väite mielestäsi perusteltu?', ['Ymmärrän näkökulmasi, mutta en ole ihan samaa mieltä.', 'Haluaisin kahvin.', 'Hyvää yötä.'], 0, 'näkökulma'),
      ch('Eikö se ole liioittelua?', ['Hyvää yötä.', 'Päinvastoin, se on realistinen arvio.', 'Kiitos paljon.'], 1, 'päinvastoin'),
      arr('Miten kuvailisit tuotetta?', ['Yhtäältä', 'se', 'on', 'kallis', 'toisaalta', 'kestävä'], ['kestävä', 'toisaalta', 'Yhtäältä', 'kallis', 'on', 'se'], 'toisaalta'),
      sp('Mikä on johtopäätöksesi?', 'Johtopäätökseni on, että molemmat ovat tärkeitä.', 'johtopäätös'),
    ],
  },
  b2_complain: {
    steps: [
      ch('Miten voimme auttaa?', ['Tilaamani tuote on virheellinen.', 'Haluaisin kahvin.', 'Hyvää yötä.'], 0, 'virheellinen'),
      ch('Pahoittelemme viivästystä.', ['Kiitos, mutta toivon korvausta.', 'Näkemiin.', 'Hauska tavata.'], 0, 'korvaus'),
      arr('Mitä haluat?', ['Vaadin', 'että', 'raha', 'palautetaan'], ['palautetaan', 'raha', 'Vaadin', 'että'], 'vaatia'),
      sp('Voimme selvittää asian.', 'Odotan vastausta kolmen päivän kuluessa.', 'selvittää'),
    ],
  },
  b2_media: {
    steps: [
      ch('Luitko artikkelin?', ['Luin, mutta lähde ei vaikuttanut luotettavalta.', 'Haluaisin kahvin.', 'Hyvää yötä.'], 0, 'lähde'),
      ch('Mitä otsikko kertoo?', ['Se on harhaanjohtava.', 'Näkemiin.', 'Kiitos paljon.'], 0, 'otsikko'),
      arr('Pitäisikö tämä julkaista?', ['Ei', 'pitäisi', 'ennen', 'kuin', 'lähde', 'tarkistetaan'], ['tarkistetaan', 'kuin', 'Ei', 'lähde', 'pitäisi', 'ennen'], 'julkaista'),
      sp('Mitä tekisit?', 'Tarkistaisin tiedon useasta lähteestä.', 'luotettava'),
    ],
  },
  b2_negot: {
    steps: [
      ch('Hyväksytkö ehdotuksen?', ['En vielä, kustannukset ovat liian korkeat.', 'Haluaisin kahvin.', 'Hyvää yötä.'], 0, 'kustannus'),
      ch('Voisimme tehdä kompromissin.', ['Hyvää huomenta.', 'Olen valmis neuvottelemaan, jos määräaika siirtyy.', 'Missä on asema?'], 1, 'määräaika'),
      arr('Mitä ehtoja edellytät?', ['Edellytän', 'että', 'sopimus', 'allekirjoitetaan', 'perjantaihin', 'mennessä'], ['mennessä', 'sopimus', 'Edellytän', 'perjantaihin', 'että', 'allekirjoitetaan'], 'edellyttää'),
      sp('Sitoudutteko tähän?', 'Sitoudumme tähän, kunhan ehdot pysyvät samoina.', 'sitoutua'),
    ],
  },
  b2_culture: {
    steps: [
      ch('Millaista sopeutuminen Suomeen on ollut?', ['Aluksi se oli vaikeaa, mutta nyt tuntuu paremmalta.', 'Haluaisin kahvin.', 'Hyvää yötä.'], 0, 'sopeutuminen'),
      ch('Mikä sinua on yllättänyt?', ['Hyvää yötä.', 'Suomalaiset arvostavat hiljaisuutta.', 'Se maksaa viisi euroa.'], 1, 'kulttuuriero'),
      arr('Miten suomalaiset eroavat?', ['Suomessa', 'kohteliaisuus', 'näkyy', 'teoissa', 'eikä', 'sanoissa'], ['sanoissa', 'teoissa', 'Suomessa', 'eikä', 'kohteliaisuus', 'näkyy'], 'kohteliaisuus'),
      sp('Mitä neuvoisit uudelle tulokkaalle?', 'Neuvoisin olemaan avoin ja kärsivällinen.', 'yhteisö'),
    ],
  },
};
