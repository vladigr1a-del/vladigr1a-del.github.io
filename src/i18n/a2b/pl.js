export const a2b = {
  path: { a2_rest: 'W restauracji', a2_food: 'Jedzenie i napoje', a2_home: 'Szukanie mieszkania', a2_rooms: 'W domu', a2_city: 'W mieście', a2_bank: 'Bank i poczta', a2_phone: 'Telefon i umawianie się', a2_adverbs: 'Kiedy i jak często', a2_work: 'W pracy', a2_jobs: 'Zawody', a2_school: 'Nauka', a2_verbs1: 'Codzienne czasowniki 1', a2_verbs2: 'Codzienne czasowniki 2', a2_past: 'Wczoraj (czas przeszły)', a2_hobby: 'Hobby', a2_adj: 'Przeciwieństwa', a2_feel: 'Uczucia', a2_questions: 'Słowa pytające' },
  words: {
    a2_rest: ['menu', 'zamawiać', 'rachunek', 'rezerwować', 'deser', 'danie główne', 'przystawka', 'smakuje', 'pyszny', 'danie wegetariańskie', 'uczulony', 'więcej', 'miły', 'bez'],
    a2_food: ['jedzenie', 'napój', 'mięso', 'ryba', 'kurczak', 'ziemniak', 'ryż', 'warzywo', 'zupa', 'sałatka', 'sok', 'piwo', 'jajko', 'masło'],
    a2_home: ['mieszkanie', 'wynajmować', 'piętro', 'winda', 'balkon', 'prąd', 'ogrzewanie', 'klucz', 'adres', 'przeprowadzać się', 'remont', 'lokal', 'dwa pokoje', 'kawalerka'],
    a2_rooms: ['dom', 'pokój', 'kuchnia', 'sypialnia', 'łazienka', 'salon', 'drzwi', 'okno', 'stół', 'krzesło', 'łóżko', 'szafa', 'czynsz', 'sąsiad'],
    a2_city: ['miasto', 'bank', 'poczta', 'biblioteka', 'szkoła', 'szpital', 'restauracja', 'rynek', 'park', 'muzeum', 'kościół', 'hotel', 'basen kryty', 'skrzyżowanie'],
    a2_bank: ['konto', 'pieniądze', 'numer konta', 'wypłacać', 'płatność', 'wysyłać', 'paczka', 'list', 'znaczek', 'odbiorca', 'formularz', 'podpis', 'paszport', 'paragon'],
    a2_phone: ['telefon', 'wiadomość', 'numer', 'e-mail', 'umawiać się', 'spotykać się', 'zaproszenie', 'mieć czas', 'wolny', 'w przyszłym tygodniu', 'wcześnie', 'późno', 'miło', 'szkoda'],
    a2_adverbs: ['zawsze', 'często', 'czasami', 'rzadko', 'nigdy', 'teraz', 'później', 'wkrótce', 'już', 'jeszcze', 'potem', 'najpierw', 'ostatnio', 'codziennie'],
    a2_work: ['miejsce pracy', 'dzień pracy', 'przerwa', 'zebranie', 'szef', 'kolega z pracy', 'umowa o pracę', 'urlop', 'zmiana', 'nadgodziny', 'rozmowa kwalifikacyjna', 'ubiegać się', 'doświadczenie', 'język'],
    a2_jobs: ['nauczyciel', 'pielęgniarka', 'kucharz', 'kierowca', 'sprzątaczka', 'sprzedawca', 'inżynier', 'budowlaniec', 'kelner', 'policjant', 'strażak', 'student', 'pracodawca', 'wynagrodzenie'],
    a2_school: ['kurs', 'lekcja', 'zadanie domowe', 'sprawdzian', 'słowo', 'zdanie', 'gramatyka', 'wymowa', 'ćwiczenie', 'słownik', 'pytanie', 'odpowiedź', 'błąd', 'uczyć się'],
    a2_verbs1: ['robić', 'iść', 'przychodzić', 'kupować', 'sprzedawać', 'dawać', 'brać', 'widzieć', 'słyszeć', 'rozumieć', 'wiedzieć', 'umieć', 'czekać', 'pomagać'],
    a2_verbs2: ['studiować', 'pracować', 'dzwonić / grać', 'pisać', 'czytać', 'oglądać', 'słuchać', 'pytać', 'odpowiadać', 'otwierać', 'zamykać', 'znajdować', 'próbować', 'pamiętać'],
    a2_past: ['byłem', 'poszedłem (gdzieś)', 'poszedłem', 'zjadłem', 'wypiłem', 'zobaczyłem', 'zrobiłem', 'kupiłem', 'spotkałem', 'przeczytałem', 'spałem', 'w weekend', 'w zeszłym tygodniu', 'zabawnie'],
    a2_hobby: ['hobby', 'sport', 'piłka nożna', 'pływanie', 'narciarstwo biegowe', 'jazda na rowerze', 'muzyka', 'film', 'książka', 'tańczyć', 'śpiewać', 'rysować', 'sauna', 'wycieczka'],
    a2_adj: ['dobry', 'zły', 'nowy', 'stary', 'szybki', 'wolny', 'łatwy', 'trudny', 'piękny', 'brzydki', 'czysty', 'brudny', 'pełny', 'pusty'],
    a2_feel: ['radosny', 'smutny', 'zmęczony', 'głodny', 'spragniony', 'zły (zdenerwowany)', 'spokojny', 'zajęty', 'lubię', 'kocham', 'boję się', 'tęsknię', 'zmartwiony', 'dumny'],
    a2_questions: ['kto', 'co', 'kiedy', 'dlaczego', 'jak', 'ile (sztuk)', 'czyj', 'który (z dwóch)', 'dokąd', 'jak długo', 'jak często', 'czy mogę', 'czy wolno', 'oznaczać'],
  },
  missions: {
    a2_rest: {
      steps: [
        { partnerTr: 'Witamy! Czy mają państwo rezerwację?', prompt: 'Powiedz, że zarezerwowałeś stolik dla dwóch osób.', optionsTr: ['Tak, zarezerwowałem stolik dla dwóch osób.', 'Dzień dobry.', 'Gdzie jest dworzec?'], hint: 'Kelner pyta o rezerwację.', wordTr: 'rezerwować' },
        { partnerTr: 'Co państwo zamawiają?', prompt: 'Zamów zupę i wodę.', optionsTr: ['Która jest godzina?', 'Poproszę zupę i wodę.', 'Mam gorączkę.'], hint: 'Zamawiasz jedzenie.', wordTr: 'zamawiać' },
        { partnerTr: 'Jak smakuje jedzenie?', prompt: 'Ułóż słowa w kolejności. Powiedz „Zupa jest pyszna”.', blocksTr: ['1. Zupa', '2. jest', '3. pyszna'], pattern: 'Wzór: rzecz + on (jest) + przymiotnik. W języku fińskim nie ma rodzajników: „keitto” znaczy „zupa” lub „jakaś zupa”.', wordTr: 'pyszny' },
        { partnerTr: 'Czy życzą sobie państwo deser?', prompt: 'Powiedz na głos: „Czy mogę prosić o rachunek?”', targetTr: 'Czy mogę prosić o rachunek?', wordTr: 'rachunek' },
      ],
      can: ['powiedzieć, że masz rezerwację', 'zamówić jedzenie i napoje', 'powiedzieć, że jedzenie jest pyszne', 'poprosić o rachunek'],
    },
    a2_home: {
      steps: [
        { partnerTr: 'Cześć! Szukasz mieszkania?', prompt: 'Powiedz, że szukasz kawalerki.', optionsTr: ['Tak, szukam kawalerki.', 'Dziękuję, mam gorączkę.', 'Dziś jest poniedziałek.'], hint: 'Rozmawiacie o mieszkaniu.', wordTr: 'kawalerka' },
        { partnerTr: 'Na którym piętrze mieszkasz?', prompt: 'Powiedz, że mieszkasz na trzecim piętrze.', optionsTr: ['Dobranoc.', 'Mieszkam na trzecim piętrze.', 'Mam siostrę.'], hint: 'Pytają o piętro.', wordTr: 'piętro' },
        { partnerTr: 'Co jest w mieszkaniu?', prompt: 'Ułóż słowa w kolejności. Powiedz „W mieszkaniu jest balkon”.', blocksTr: ['1. W mieszkaniu', '2. jest', '3. balkon'], pattern: 'Wzór: gdzie + on + co. „Asunnossa on parveke” = „w mieszkaniu jest balkon”. W języku fińskim „jest” wyrażamy słowem „on”.', wordTr: 'balkon' },
        { partnerTr: 'Oto klucz.', prompt: 'Zapytaj, jaki jest adres.', targetTr: 'Jaki jest adres?', wordTr: 'adres' },
      ],
      can: ['powiedzieć, jakiego mieszkania szukasz', 'powiedzieć, na którym piętrze mieszkasz', 'powiedzieć, co jest w mieszkaniu', 'zapytać o adres'],
    },
    a2_bank: {
      steps: [
        { partnerTr: 'Dzień dobry! W czym mogę pomóc?', prompt: 'Powiedz, że chcesz wysłać paczkę.', optionsTr: ['Chciałbym wysłać paczkę.', 'Jestem zmęczony.', 'Dziś jest poniedziałek.'], hint: 'Jesteś na poczcie.', wordTr: 'paczka' },
        { partnerTr: 'Dokąd idzie paczka?', prompt: 'Powiedz, że za granicę.', optionsTr: ['Dobranoc.', 'Idzie za granicę.', 'To jest pyszne.'], hint: 'Pytają o miejsce docelowe.', wordTr: 'wysyłać' },
        { partnerTr: 'Potrzebuję dokumentu tożsamości.', prompt: 'Ułóż słowa w kolejności. Powiedz „Oto mój paszport”.', blocksTr: ['1. Oto', '2. jest', '3. mój paszport'], pattern: 'Wzór: „Tässä on” = „oto”. Przydaje się, gdy coś podajesz. Końcówka „-ni” znaczy „mój”: passi zmienia się w passini.', wordTr: 'paszport' },
        { partnerTr: 'Czy potrzebuje pan paragonu?', prompt: 'Powiedz na głos: „Tak, poproszę paragon”.', targetTr: 'Tak, poproszę paragon.', wordTr: 'paragon' },
      ],
      can: ['wysłać paczkę', 'powiedzieć, dokąd idzie', 'pokazać paszport', 'poprosić o paragon'],
    },
    a2_phone: {
      steps: [
        { partnerTr: 'Cześć! Przyjdziesz w sobotę na kawę?', prompt: 'Podziękuj za zaproszenie.', optionsTr: ['Dziękuję za zaproszenie, chętnie!', 'Mam gorączkę.', 'Gdzie jest dworzec?'], hint: 'Ktoś cię zaprasza.', wordTr: 'zaproszenie' },
        { partnerTr: 'Kiedy ci pasuje?', prompt: 'Powiedz „W sobotę o drugiej”.', optionsTr: ['Miło mi poznać.', 'W sobotę o drugiej.', 'Przepraszam.'], hint: 'Pytają o godzinę.', wordTr: 'umawiać się' },
        { partnerTr: 'Zdążysz przyjść?', prompt: 'Ułóż słowa w kolejności. Powiedz „Szkoda, nie zdążę przyjść”.', blocksTr: ['1. Szkoda', '2. nie', '3. zdążę', '4. przyjść'], pattern: 'Wzór: zaprzeczenie = en + czasownik. „en” znaczy „ja nie”, „et” znaczy „ty nie”. Czasownik traci końcówkę: ehdin zmienia się w en ehdi.', wordTr: 'mieć czas' },
        { partnerTr: 'Jaki masz numer?', prompt: 'Powiedz na głos: „Wyślę ci wiadomość”.', targetTr: 'Wyślę ci wiadomość.', wordTr: 'wiadomość' },
      ],
      can: ['podziękować za zaproszenie', 'zaproponować godzinę', 'powiedzieć, że nie możesz przyjść', 'obiecać wysłanie wiadomości'],
    },
    a2_work: {
      steps: [
        { partnerTr: 'Gdzie pracujesz?', prompt: 'Powiedz, że pracujesz w restauracji.', optionsTr: ['Pracuję w restauracji.', 'Dziś jest zimno.', 'Mam siostrę.'], hint: 'Pytają o miejsce pracy.', wordTr: 'miejsce pracy' },
        { partnerTr: 'Kiedy masz przerwę?', prompt: 'Powiedz, że przerwę masz o dwunastej.', optionsTr: ['Dobranoc.', 'Mam przerwę o dwunastej.', 'Gdzie jest dworzec?'], hint: 'Pytają o przerwę.', wordTr: 'przerwa' },
        { partnerTr: 'Czy masz doświadczenie?', prompt: 'Ułóż słowa w kolejności. Powiedz „Mam doświadczenie zawodowe”.', blocksTr: ['1. Mam', '2. (jest)', '3. doświadczenie zawodowe'], pattern: 'Wzór: „Minulla on” = „mam” (dosłownie „u mnie jest”). Po „on” nieokreślona ilość stoi w partytiwie: kokemus zmienia się w kokemusta.', wordTr: 'doświadczenie' },
        { partnerTr: 'Opowiedz coś o sobie.', prompt: 'Powiedz na głos: „Chciałbym ubiegać się o pracę”.', targetTr: 'Chciałbym ubiegać się o pracę.', wordTr: 'ubiegać się' },
      ],
      can: ['powiedzieć, gdzie pracujesz', 'powiedzieć, kiedy masz przerwę', 'powiedzieć, że masz doświadczenie', 'powiedzieć, że chcesz ubiegać się o pracę'],
    },
    a2_school: {
      steps: [
        { partnerTr: 'Na jakim kursie jesteś?', prompt: 'Powiedz, że jesteś na kursie fińskiego.', optionsTr: ['Jestem na kursie fińskiego.', 'Mam gorączkę.', 'Dobranoc.'], hint: 'Pytają o kurs.', wordTr: 'kurs' },
        { partnerTr: 'Masz pytanie?', prompt: 'Zapytaj, co znaczy to słowo.', optionsTr: ['Dzień dobry.', 'Tak, co znaczy to słowo?', 'Do widzenia.'], hint: 'Chcesz zapytać o słowo.', wordTr: 'słowo' },
        { partnerTr: 'Zrobiłeś zadanie domowe?', prompt: 'Ułóż słowa w kolejności. Powiedz „Zrobiłem zadanie domowe”.', blocksTr: ['1. Jestem', '2. po zrobieniu', '3. zadania domowego'], pattern: 'Wzór: „olen” + imiesłów = „zrobiłem (już)”. To czas perfect: olen tehnyt.', wordTr: 'zadanie domowe' },
        { partnerTr: 'Chcesz o coś zapytać?', prompt: 'Powiedz na głos: „Mam pytanie”.', targetTr: 'Mam pytanie.', wordTr: 'pytanie' },
      ],
      can: ['powiedzieć, na jakim jesteś kursie', 'zapytać, co znaczy słowo', 'powiedzieć, że zrobiłeś zadanie domowe', 'powiedzieć, że masz pytanie'],
    },
    a2_past: {
      steps: [
        { partnerTr: 'Gdzie byłeś wczoraj?', prompt: 'Powiedz, że byłeś w pracy.', optionsTr: ['Byłem w pracy.', 'Dobranoc.', 'To kosztuje pięć euro.'], hint: 'Pytają o wczoraj.', wordTr: 'byłem' },
        { partnerTr: 'Co robiłeś w weekend?', prompt: 'Powiedz, że widziałeś przyjaciela.', optionsTr: ['Poproszę kawę.', 'Zobaczyłem przyjaciela.', 'Dziś jest zimno.'], hint: 'Pytają o weekend.', wordTr: 'zobaczyłem' },
        { partnerTr: 'Co zjadłeś?', prompt: 'Ułóż słowa w kolejności. Powiedz „Zjadłem zupę i chleb”.', blocksTr: ['1. Zjadłem', '2. zupę', '3. i', '4. chleb'], pattern: 'Wzór: czas przeszły + co. söin = „zjadłem” (syön = „jem”). Końcówka „-in” oznacza przeszłość dla „ja”. Zupa i chleb stoją w partytiwie: keittoa, leipää.', wordTr: 'zjadłem' },
        { partnerTr: 'Było fajnie?', prompt: 'Powiedz na głos: „Tak, dobrze się bawiłem”.', targetTr: 'Tak, dobrze się bawiłem.', wordTr: 'zabawnie' },
      ],
      can: ['powiedzieć, gdzie byłeś wczoraj', 'powiedzieć, co robiłeś w weekend', 'powiedzieć, co jadłeś', 'powiedzieć, że dobrze się bawiłeś'],
    },
  },
};
