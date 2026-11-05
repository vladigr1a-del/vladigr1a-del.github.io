// Тестове за напредък: по 4 във всяко ниво, всеки с 6 изречения за подреждане на думи.
// Финландските изречения са собствени. ВАЖНО: трябва да бъдат проверени от човек, който владее езика добре.
// Правила: думите в изречението не се повтарят; първата дума е с главна буква; без препинателни знаци.

const S = (text) => text.split(' ');

const RAW = {
  A1: [
    ['Minun nimeni on Ivan', 'Olen kotoisin Bulgariasta', 'Minä asun Suomessa', 'Puhun vähän suomea', 'Kiitos paljon ja näkemiin', 'Haluaisin yhden kahvin kiitos'],
    ['Minulla on kaksi lasta', 'Hän on minun sisareni', 'Kuinka vanha sinä olet', 'Minä pidän kahvista ja teestä', 'Missä on lähin kauppa', 'Meillä on iso koti'],
    ['Kissa nukkuu sängyn alla', 'Koira juoksee puistossa', 'Lapset menevät kouluun', 'Minulla on kipeä jalka', 'Järvi on metsän vieressä', 'Tänään aurinko paistaa'],
    ['Bussi lähtee kello kahdeksan', 'Kauppa on tänään kiinni', 'Minä luen kirjaa illalla', 'Tämä talo on hyvin vanha', 'Voitteko auttaa minua', 'Tarvitsen apua heti'],
  ],
  A2: [
    ['Haluaisin varata pöydän kahdelle', 'Asunto on toisessa kerroksessa', 'Voinko maksaa kortilla', 'Tapaamme huomenna kello kolme', 'Eilen kävin kaupassa ja töissä', 'Minä opiskelen suomea joka päivä'],
    ['Minulla on kova päänsärky', 'Juna lähtee laiturilta kolme', 'Huoneessa on kaksi sänkyä', 'Käänny oikealle ensimmäisessä risteyksessä', 'Huomenna sataa lunta ja tuulee', 'Kesällä me menemme mökille'],
    ['Katsoin eilen illalla uutiset', 'Meidän joukkue voitti pelin', 'Leivon sunnuntaina pullaa perheelle', 'Retkeilimme metsässä ja kalastimme', 'Hän on ystävällinen ja ahkera', 'Toivon että tulet viikonloppuna'],
    ['Voisitko puhua vähän hitaammin', 'Kävelen kotiin koska sataa', 'Hän asuu täällä ilman perhettä', 'Tämä punainen takki on kallis', 'Siivoan keittiön ennen vieraita', 'Palkka tulee tilille kuun lopussa'],
  ],
  B1: [
    ['Mielestäni tämä ratkaisu on hyvä vaihtoehto', 'Olen hakenut töitä koska haluan kehittyä', 'Lento myöhästyi mutta matkalaukku tuli perille', 'Vuokranantaja korjasi vuotavan hanan viikossa', 'Joulu on suomalaisten tärkein juhla', 'Lääkäri suositteli enemmän liikuntaa ja lepoa'],
    ['Aion hakea yliopistoon ensi keväänä', 'Säästän rahaa jotta voin ostaa asunnon', 'Hän oli pettynyt mutta rauhoittui nopeasti', 'Työmatkani kestää tunnin ruuhkassa', 'Varaan ajan terveyskeskukseen huomenna aamulla', 'Vaihdoin salasanan koska tietoturva on tärkeää'],
    ['Revontulia näkee parhaiten talvella pohjoisessa', 'Kahvitauolla söimme pullaa ja joimme kahvia', 'Konsertti alkaa seitsemältä ja kestää tunnin', 'Tuote on rikki joten haluan reklamoida', 'Olen edelleen kiinnostunut tästä työpaikasta', 'Luulen että se riippuu tilanteesta'],
    ['Hyvä vastaanottaja liitteenä on hakemukseni', 'Kunnallisvaalit järjestetään Suomessa neljän vuoden välein', 'Suomi itsenäistyi vuonna 1917', 'Vanhempainvapaa on tärkeä osa perhepolitiikkaa', 'Hän loukkaantui pelissä ja meni päivystykseen', 'Jos syttyy tulipalo soita heti hätänumeroon'],
  ],
  B2: [
    ['Tämän väitteen perustelut eivät ole riittävän vakuuttavia', 'Hallituspuolueet ja oppositio kiistelivät budjetista koko illan', 'Tutkimustulokset perustuvat laajaan aineistoon ja luotettavaan menetelmään', 'Työmarkkinajärjestöt neuvottelivat uudesta työehtosopimuksesta koko syksyn', 'Ilmastonmuutoksen hillitseminen edellyttää kaikilta maailman mailta päästöjen vähentämistä', 'Tekoäly muuttaa monia ammatteja mutta se luo myös uusia'],
    ['Rokotuskattavuuden parantaminen vähentää epidemioiden riskiä merkittävästi', 'Syyttäjä vaati vastaajalle ehdollista vankeusrangaistusta', 'Sananvapaus kuuluu demokraattisen yhteiskunnan perusperiaatteisiin', 'Monet maahanmuuttajat ovat kaksikielisiä ja käyttävät molempia kieliä', 'Ongelma johtuu siitä että tietoa ei jaeta riittävästi', 'Väite on perusteeton joten sitä ei voi hyväksyä'],
    ['Puheenjohtaja avasi kokouksen ja esitteli esityslistan', 'Asuntolainan korko nousi joten kuukausierä kasvoi', 'Vuokrasopimus voidaan irtisanoa kolmen kuukauden irtisanomisajalla', 'Kuten edellä mainittiin päätös tulee voimaan ensi vuonna', 'Sähköautojen latauspisteitä rakennetaan lisää kaupunkien keskustoihin', 'Pohjois-Suomessa ilmasto on huomattavasti kylmempi kuin etelässä'],
    ['Hyvinvointivaltio turvaa kansalaisille perustoimeentulon vaikeina aikoina', 'Oppivelvollisuus on pidennetty kahdeksantoista ikävuoteen asti', 'Jatkuva stressi voi johtaa uupumukseen ellei palaudu riittävästi', 'Teollistuminen muutti suomalaista yhteiskuntaa perusteellisesti viime vuosisadalla', 'Sinänsä ehdotus on hyvä mutta se vaatii lisärahoitusta', 'Jokaisella on oikeus osallistua yhteiskunnalliseen keskusteluun vapaasti'],
  ],
};

// Määrätty (ei satunnainen) sekoitus: sama järjestys aina, mutta ei koskaan oikea järjestys.
function scramble(answer) {
  const n = answer.length;
  let out = answer.map((_, i) => answer[(i * 3 + 2) % n]);
  if (new Set(out).size !== n) out = [...answer].reverse();
  if (out.join(' ') === answer.join(' ')) out = [...answer].reverse();
  if (out.join(' ') === answer.join(' ')) out = [...answer.slice(1), answer[0]];
  return out;
}

export const TESTS = Object.fromEntries(Object.entries(RAW).map(([lv, tests]) => [
  lv,
  tests.map((list, k) => ({
    id: `test_${lv}_${k + 1}`,
    level: lv,
    n: k + 1,
    sentences: list.map((text) => { const answer = S(text); return { answer, words: scramble(answer) }; }),
  })),
]));

export const ALL_TESTS = Object.values(TESTS).flat();
