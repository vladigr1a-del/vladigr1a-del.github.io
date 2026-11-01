export const a2 = {
  path: { a2_shop: 'W sklepie', a2_weather: 'Pogoda i pory roku', a2_move: 'Jak dojść', a2_time: 'Czas i dzień', a2_clothes: 'Kolory i ubrania', a2_health: 'U lekarza' },
  words: {
    a2_shop: ['sklep', 'chleb', 'ser', 'jabłko', 'cena', 'tani', 'drogi', 'potrzebuję', 'szukam', 'kasa', 'torba', 'promocja', 'duży', 'mały'],
    a2_weather: ['pogoda', 'słońce', 'deszcz', 'śnieg', 'wiatr', 'zimno', 'ciepło', 'gorąco', 'pochmurno', 'wiosna', 'lato', 'jesień', 'zima', 'stopień'],
    a2_move: ['autobus', 'pociąg', 'przystanek', 'dworzec', 'bilet', 'w prawo', 'w lewo', 'prosto', 'ulica', 'mapa', 'gdzie', 'blisko', 'daleko', 'iść pieszo'],
    a2_time: ['zegar / godzina', 'rano', 'dzień', 'wieczór', 'noc', 'dziś', 'jutro', 'wczoraj', 'budzę się', 'jem', 'śpię', 'w pracy', 'pół', 'minuta'],
    a2_clothes: ['czerwony', 'niebieski', 'zielony', 'żółty', 'czarny', 'biały', 'płaszcz', 'spodnie', 'koszula', 'buty', 'czapka', 'rękawiczki', 'skarpetki', 'sukienka'],
    a2_health: ['lekarz', 'apteka', 'lek', 'gorączka', 'grypa', 'ból głowy', 'brzuch', 'ręka', 'noga', 'głowa', 'boli', 'zdrowy', 'wizyta u lekarza', 'pomoc'],
  },
  missions: {
    a2_shop: {
      steps: [
        { partnerTr: 'Dzień dobry! Mogę w czymś pomóc?', prompt: 'Powiedz, że szukasz mleka.', optionsTr: ['Szukam mleka.', 'Jestem kawą.', 'Dobranoc.'], hint: 'Powiedz sprzedawcy, czego szukasz.', wordTr: 'szukam' },
        { partnerTr: 'Czy potrzebuje pan torbę?', prompt: 'Powiedz „tak, poproszę”.', optionsTr: ['Przepraszam.', 'Tak, poproszę.', 'Dobranoc.'], hint: 'Szukamy odpowiedzi „tak, poproszę”.', wordTr: 'torba' },
        { partnerTr: 'Czego pan potrzebuje?', prompt: 'Ułóż słowa w kolejności. Powiedz „Potrzebuję chleba i sera”.', blocksTr: ['1. Potrzebuję', '2. chleba', '3. i', '4. sera'], pattern: 'Wzór: potrzebuję + czego. Po „tarvitsen” słowo dostaje końcówkę: leipä (chleb) zmienia się w leipää, juusto w juustoa. To partytiw: „trochę czegoś”.', wordTr: 'potrzebuję' },
        { partnerTr: 'Proszę, oto jabłko.', prompt: 'Zapytaj, ile to kosztuje.', targetTr: 'Ile to kosztuje?', wordTr: 'cena' },
      ],
      can: ['powiedzieć, czego szukasz w sklepie', 'powiedzieć, czego potrzebujesz', 'zapytać, ile coś kosztuje'],
    },
    a2_move: {
      steps: [
        { partnerTr: 'Przepraszam, gdzie jest dworzec?', prompt: 'Wytłumacz: prosto, potem w prawo.', optionsTr: ['Prosto, a potem w prawo.', 'Poproszę kawę.', 'Dobranoc.'], hint: 'Tłumaczysz drogę.', wordTr: 'prosto' },
        { partnerTr: 'Czy dworzec jest daleko?', prompt: 'Powiedz, że jest blisko.', optionsTr: ['Dzień dobry.', 'Nie, jest blisko.', 'To kosztuje pięć euro.'], hint: 'Chcemy powiedzieć, że dworzec nie jest daleko.', wordTr: 'blisko' },
        { partnerTr: 'Jak dojść na przystanek?', prompt: 'Ułóż słowa w kolejności. Powiedz „Prosto, a potem w prawo”.', blocksTr: ['1. Prosto', '2. i', '3. potem', '4. w prawo'], pattern: 'Wzór: kierunek + i potem + kierunek. Końcówka „-lle” znaczy „w stronę”: oikea (prawy) zmienia się w oikealle.', wordTr: 'w prawo' },
        { partnerTr: 'Czy chce pan bilet?', prompt: 'Powiedz na głos: „Jeden bilet, proszę”.', targetTr: 'Jeden bilet, proszę.', wordTr: 'bilet' },
      ],
      can: ['wytłumaczyć prostą drogę', 'powiedzieć, że coś jest blisko lub daleko', 'poprosić o bilet'],
    },
    a2_time: {
      steps: [
        { partnerTr: 'Która jest godzina?', prompt: 'Powiedz, że jest ósma.', optionsTr: ['Jest ósma.', 'Mieszkam w Finlandii.', 'Bardzo dziękuję.'], hint: 'Pytają cię o godzinę.', wordTr: 'zegar / godzina' },
        { partnerTr: 'Kiedy się budzisz?', prompt: 'Powiedz, że budzisz się o szóstej rano.', optionsTr: ['Dziś jest zimno.', 'Budzę się o szóstej rano.', 'Do widzenia.'], hint: 'Pytają o twój poranek.', wordTr: 'budzę się' },
        { partnerTr: 'Co robisz jutro?', prompt: 'Ułóż słowa w kolejności. Powiedz „Jutro jestem w pracy”.', blocksTr: ['1. Jutro', '2. jestem', '3. w pracy'], pattern: 'Wzór: kiedy + jestem + gdzie. W języku fińskim czasownik zostaje na drugim miejscu, nawet gdy słowo o czasie jest pierwsze.', wordTr: 'w pracy' },
        { partnerTr: 'Kiedy idziesz spać?', prompt: 'Powiedz na głos: „Idę spać wieczorem”.', targetTr: 'Idę spać wieczorem.', wordTr: 'wieczór' },
      ],
      can: ['powiedzieć, która jest godzina', 'powiedzieć, kiedy się budzisz', 'powiedzieć, co robisz jutro'],
    },
    a2_health: {
      steps: [
        { partnerTr: 'Dzień dobry! Co panu dolega?', prompt: 'Powiedz, że masz gorączkę.', optionsTr: ['Mam gorączkę.', 'Poproszę kawę.', 'Miło mi poznać.'], hint: 'Lekarz pyta, jaki jest problem.', wordTr: 'gorączka' },
        { partnerTr: 'Czy boli pana głowa?', prompt: 'Powiedz „tak, boli mnie głowa”.', optionsTr: ['Bardzo dziękuję.', 'Tak, boli mnie głowa.', 'Dobranoc.'], hint: 'Szukamy odpowiedzi „tak”.', wordTr: 'ból głowy' },
        { partnerTr: 'Co pana boli?', prompt: 'Ułóż słowa w kolejności. Powiedz „Boli mnie brzuch”.', blocksTr: ['1. Mój brzuch', '2. jest', '3. obolały'], pattern: 'Wzór: mój + część ciała + boli. Końcówka „-ni” znaczy „mój”: vatsa (brzuch) zmienia się w vatsani.', wordTr: 'brzuch' },
        { partnerTr: 'Czy potrzebuje pan wizyty u lekarza?', prompt: 'Powiedz na głos: „Chciałbym umówić wizytę u lekarza”.', targetTr: 'Chciałbym umówić wizytę u lekarza.', wordTr: 'wizyta u lekarza' },
      ],
      can: ['powiedzieć, że masz gorączkę lub ból głowy', 'powiedzieć, co cię boli', 'umówić wizytę u lekarza'],
    },
  },
};
