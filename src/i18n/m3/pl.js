export const m3 = {
  missions: {
    "a2c_doctor": {
      "steps": [
        {
          "partnerTr": "Co panu dolega?",
          "prompt": "Powiedz „Boli mnie gardło”.",
          "optionsTr": [
            "Boli mnie gardło.",
            "Poproszę kawę.",
            "Dobranoc."
          ],
          "hint": "Opisujesz, jak się czujesz.",
          "wordTr": "ból gardła"
        },
        {
          "partnerTr": "Czy ma pan alergię?",
          "prompt": "Powiedz „Tak, mam alergię”.",
          "optionsTr": [
            "To kosztuje pięć euro.",
            "Tak, mam alergię.",
            "Do widzenia."
          ],
          "hint": "Pytają cię o alergię.",
          "wordTr": "alergia"
        },
        {
          "partnerTr": "Czy potrzebuje pan zwolnienia?",
          "prompt": "Ułóż słowa po kolei. Powiedz „Potrzebuję zwolnienia na trzy dni”.",
          "blocksTr": [
            "1. Potrzebuję",
            "2. zwolnienia",
            "3. na trzy",
            "4. dni"
          ],
          "pattern": "Wzór: potrzebuję + zwolnienia + na trzy dni. Końcówka -ksi znaczy „na” jakiś czas: kolme päivää zmienia się w kolmeksi päiväksi.",
          "wordTr": "zwolnienie lekarskie"
        },
        {
          "partnerTr": "Teraz zmierzymy panu ciśnienie.",
          "prompt": "Powiedz na głos: „Czy moje ciśnienie jest normalne?”",
          "targetTr": "Czy moje ciśnienie jest normalne?",
          "wordTr": "ciśnienie krwi"
        }
      ],
      "can": [
        "opisać, jak się czujesz",
        "powiedzieć, że masz alergię",
        "poprosić o zwolnienie na kilka dni",
        "zapytać o swoje ciśnienie"
      ]
    },
    "a2c_hotel": {
      "steps": [
        {
          "partnerTr": "Dobry wieczór! W czym mogę pomóc?",
          "prompt": "Powiedz „Mam rezerwację”.",
          "optionsTr": [
            "Mam rezerwację.",
            "Do widzenia.",
            "To kosztuje trzy euro."
          ],
          "hint": "Masz już zarezerwowany pokój.",
          "wordTr": "rezerwacja"
        },
        {
          "partnerTr": "Ile nocy państwo zostaną?",
          "prompt": "Powiedz „Zostaniemy dwie noce”.",
          "optionsTr": [
            "Dobranoc.",
            "Zostaniemy dwie noce.",
            "Poproszę kawę."
          ],
          "hint": "Mówisz, jak długo zostajesz.",
          "wordTr": "przenocować"
        },
        {
          "partnerTr": "Gdzie jest basen?",
          "prompt": "Ułóż słowa po kolei. Powiedz „Basen jest na dole”.",
          "blocksTr": [
            "1. Basen",
            "2. jest",
            "3. na dole"
          ],
          "pattern": "Wzór: miejsce + jest + gdzie. Końcówka -ssa znaczy „w / na”: alakerta (dolna kondygnacja) zmienia się w alakerrassa.",
          "wordTr": "basen"
        },
        {
          "partnerTr": "Czy potrzebuje pan jeszcze czegoś?",
          "prompt": "Powiedz na głos: „Czy mogę dostać zapasowy klucz?”",
          "targetTr": "Czy mogę dostać zapasowy klucz?",
          "wordTr": "zapasowy klucz"
        }
      ],
      "can": [
        "powiedzieć, że masz rezerwację",
        "powiedzieć, ile nocy zostajesz",
        "zapytać, gdzie jest basen",
        "poprosić o zapasowy klucz"
      ]
    },
    "a2c_directions": {
      "steps": [
        {
          "partnerTr": "Przepraszam, gdzie jest najbliższa apteka?",
          "prompt": "Powiedz „Jest na tamtym skrzyżowaniu”.",
          "optionsTr": [
            "Jest na tamtym skrzyżowaniu.",
            "Poproszę kawę.",
            "Dobranoc."
          ],
          "hint": "Mówisz, gdzie jest to miejsce.",
          "wordTr": "na skrzyżowaniu"
        },
        {
          "partnerTr": "Czy to daleko?",
          "prompt": "Powiedz „Nie, można tam dojść pieszo”.",
          "optionsTr": [
            "Dzień dobry.",
            "Nie, można tam dojść pieszo.",
            "To kosztuje trzy euro."
          ],
          "hint": "Mówisz, że jest blisko.",
          "wordTr": "pieszo (odległość)"
        },
        {
          "partnerTr": "W którą stronę mam iść?",
          "prompt": "Ułóż słowa po kolei. Powiedz „Skręć w prawo i idź prosto”.",
          "blocksTr": [
            "1. Skręć",
            "2. w prawo",
            "3. i",
            "4. idź",
            "5. prosto"
          ],
          "pattern": "Wzór: skręć + w prawo + i + idź + prosto. To są polecenia: käänny (skręć!), jatka (idź dalej!).",
          "wordTr": "skręcać"
        },
        {
          "partnerTr": "To jest naprzeciwko biblioteki.",
          "prompt": "Powiedz na głos: „Czy to za rogiem?”",
          "targetTr": "Czy to za rogiem?",
          "wordTr": "róg"
        }
      ],
      "can": [
        "zapytać, gdzie jest najbliższe miejsce",
        "zrozumieć „blisko pieszo”",
        "powiedzieć komuś, by skręcił w prawo i szedł dalej",
        "zapytać, czy coś jest za rogiem"
      ]
    },
    "b1c_service": {
      "steps": [
        {
          "partnerTr": "Dzień dobry. W czym mogę pomóc?",
          "prompt": "Powiedz „Chciałbym umówić wizytę”.",
          "optionsTr": [
            "Chciałbym umówić wizytę.",
            "Do widzenia.",
            "To kosztuje trzy euro."
          ],
          "hint": "Chcesz umówić wizytę.",
          "wordTr": "umawianie wizyty"
        },
        {
          "partnerTr": "Czy ma pan numerek?",
          "prompt": "Powiedz „Tak, mój numer to dwadzieścia trzy”.",
          "optionsTr": [
            "Dobranoc.",
            "Tak, mój numer to dwadzieścia trzy.",
            "Dziś jest zimno."
          ],
          "hint": "Podajesz swój numerek.",
          "wordTr": "numerek w kolejce"
        },
        {
          "partnerTr": "Co chce pan zrobić?",
          "prompt": "Ułóż słowa po kolei. Powiedz „Chcę odebrać paczkę z punktu odbioru”.",
          "blocksTr": [
            "1. Chcę",
            "2. odebrać",
            "3. paczkę",
            "4. z punktu odbioru"
          ],
          "pattern": "Wzór: chcę + odebrać + paczkę + z punktu odbioru. Końcówka -sta znaczy „z”: noutopiste zmienia się w noutopisteestä.",
          "wordTr": "punkt odbioru"
        },
        {
          "partnerTr": "Potrzebujemy jeszcze załącznika.",
          "prompt": "Powiedz na głos: „Wyślę załącznik e-mailem”.",
          "targetTr": "Wyślę załącznik e-mailem.",
          "wordTr": "załącznik"
        }
      ],
      "can": [
        "poprosić o umówienie wizyty",
        "podać swój numerek",
        "powiedzieć, że chcesz odebrać paczkę",
        "obiecać, że wyślesz załącznik"
      ]
    },
    "b1c_work2": {
      "steps": [
        {
          "partnerTr": "Dlaczego aplikuje pan na to stanowisko?",
          "prompt": "Powiedz „Aplikuję, bo szukam stałej pracy”.",
          "optionsTr": [
            "Aplikuję, bo szukam stałej pracy.",
            "Poproszę kawę.",
            "Dobranoc."
          ],
          "hint": "Wyjaśniasz, dlaczego aplikujesz.",
          "wordTr": "na stałe"
        },
        {
          "partnerTr": "Czy chce pan pracować na pełen etat, czy na część etatu?",
          "prompt": "Powiedz „Praca na część etatu odpowiadałaby mi bardziej”.",
          "optionsTr": [
            "Do widzenia.",
            "Praca na część etatu odpowiadałaby mi bardziej.",
            "Dziś jest zimno."
          ],
          "hint": "Wybierasz między pełnym etatem a częścią etatu.",
          "wordTr": "na część etatu"
        },
        {
          "partnerTr": "Czy ma pan świadectwo pracy?",
          "prompt": "Ułóż słowa po kolei. Powiedz „Mam świadectwo pracy od poprzedniego pracodawcy”.",
          "blocksTr": [
            "1. U mnie",
            "2. jest",
            "3. świadectwo pracy",
            "4. od poprzedniego",
            "5. pracodawcy"
          ],
          "pattern": "Wzór: u mnie + jest + świadectwo pracy + od poprzedniego pracodawcy. Końcówka -lta znaczy „od”: työnantaja zmienia się w työnantajalta.",
          "wordTr": "świadectwo pracy"
        },
        {
          "partnerTr": "Porozmawiajmy jeszcze o czasie pracy.",
          "prompt": "Powiedz na głos: „Jaki jest tygodniowy wymiar czasu pracy?”",
          "targetTr": "Jaki jest tygodniowy wymiar czasu pracy?",
          "wordTr": "czas pracy"
        }
      ],
      "can": [
        "powiedzieć, dlaczego aplikujesz",
        "mówić o pracy na część etatu",
        "powiedzieć, że masz świadectwo pracy",
        "zapytać o czas pracy"
      ]
    },
    "b1c_shop3": {
      "steps": [
        {
          "partnerTr": "W czym mogę pomóc?",
          "prompt": "Powiedz „Chciałbym złożyć reklamację na ten produkt”.",
          "optionsTr": [
            "Chciałbym złożyć reklamację na ten produkt.",
            "Dobranoc.",
            "Gdzie jest dworzec?"
          ],
          "hint": "Chcesz zareklamować produkt.",
          "wordTr": "reklamować (towar)"
        },
        {
          "partnerTr": "Czy produkt jest jeszcze na gwarancji?",
          "prompt": "Powiedz „Tak, gwarancja kończy się w przyszłym miesiącu”.",
          "optionsTr": [
            "Dzień dobry.",
            "Tak, gwarancja kończy się w przyszłym miesiącu.",
            "To jest czerwone."
          ],
          "hint": "Mówisz, że gwarancja jeszcze obowiązuje.",
          "wordTr": "okres gwarancji"
        },
        {
          "partnerTr": "Dlaczego chce pan zwrócić produkt?",
          "prompt": "Ułóż słowa po kolei. Powiedz „Nie było w nim instrukcji”.",
          "blocksTr": [
            "1. Nie",
            "2. było",
            "3. w nim",
            "4. instrukcji"
          ],
          "pattern": "Wzór: nie + było + w nim + instrukcji. W zdaniu przeczącym rzecz stoi w formie „jakiegoś”: käyttöohjetta.",
          "wordTr": "instrukcja obsługi"
        },
        {
          "partnerTr": "Ma pan prawo do zwrotu w ciągu czternastu dni.",
          "prompt": "Powiedz na głos: „Czy koszty dostawy zostaną zwrócone?”",
          "targetTr": "Czy koszty dostawy zostaną zwrócone?",
          "wordTr": "koszty dostawy"
        }
      ],
      "can": [
        "powiedzieć, że chcesz złożyć reklamację",
        "zapytać o okres gwarancji",
        "wyjaśnić, że brakowało instrukcji",
        "zapytać, czy zwrócą koszty dostawy"
      ]
    },
    "b2c_meeting": {
      "steps": [
        {
          "partnerTr": "Czy dostał pan zaproszenie na zebranie?",
          "prompt": "Powiedz „Tak, przeczytałem porządek obrad”.",
          "optionsTr": [
            "Tak, przeczytałem porządek obrad.",
            "Dobranoc.",
            "To kosztuje trzy euro."
          ],
          "hint": "Mówisz, że już go przeczytałeś.",
          "wordTr": "porządek obrad"
        },
        {
          "partnerTr": "Kto jest przewodniczącym zebrania?",
          "prompt": "Powiedz „Przewodniczącym jest Virtanen”.",
          "optionsTr": [
            "Do widzenia.",
            "Przewodniczącym jest Virtanen.",
            "Dziś jest zimno."
          ],
          "hint": "Wymieniasz przewodniczącego.",
          "wordTr": "przewodniczący"
        },
        {
          "partnerTr": "Co będzie dalej?",
          "prompt": "Ułóż słowa po kolei. Powiedz „O wniosku głosuje się przed końcem zebrania”.",
          "blocksTr": [
            "1. O wniosku",
            "2. głosuje się",
            "3. przed",
            "4. zebrania",
            "5. końcem"
          ],
          "pattern": "Wzór: o wniosku + głosuje się + przed + zebrania + końcem. „äänestetään” = „głosuje się” (nie mówi się, kto głosuje).",
          "wordTr": "głosowanie"
        },
        {
          "partnerTr": "Czy ktoś chce jeszcze coś dodać?",
          "prompt": "Powiedz na głos: „Chciałbym poprzeć ten wniosek”.",
          "targetTr": "Chciałbym poprzeć ten wniosek.",
          "wordTr": "poparcie (wniosku)"
        }
      ],
      "can": [
        "powiedzieć, że przeczytałeś porządek obrad",
        "wymienić przewodniczącego zebrania",
        "zrozumieć, że będzie głosowanie",
        "powiedzieć, że popierasz wniosek"
      ]
    },
    "b2c_housing3": {
      "steps": [
        {
          "partnerTr": "Czy przeczytał pan umowę najmu?",
          "prompt": "Powiedz „Tak, okres wypowiedzenia wynosi trzy miesiące”.",
          "optionsTr": [
            "Tak, okres wypowiedzenia wynosi trzy miesiące.",
            "Dobranoc.",
            "To jest czerwone."
          ],
          "hint": "Mówisz o okresie wypowiedzenia.",
          "wordTr": "okres wypowiedzenia"
        },
        {
          "partnerTr": "Co zamierza zrobić wspólnota mieszkaniowa?",
          "prompt": "Powiedz „Wspólnota wymienia rury”.",
          "optionsTr": [
            "Do widzenia.",
            "Wspólnota wymienia rury.",
            "Poproszę kawę."
          ],
          "hint": "Mówisz o wymianie rur.",
          "wordTr": "wymiana rur"
        },
        {
          "partnerTr": "Co zarządca powiedział o opłacie?",
          "prompt": "Ułóż słowa po kolei. Powiedz „On powiedział, że opłata rośnie”.",
          "blocksTr": [
            "1. On",
            "2. powiedział",
            "3. że",
            "4. opłata",
            "5. rośnie"
          ],
          "pattern": "Wzór: on + powiedział + że + opłata + rośnie. Po „että” (że) zaczyna się nowe zdanie: vastike nousee.",
          "wordTr": "opłata eksploatacyjna"
        },
        {
          "partnerTr": "Czy potrzebuje pan jeszcze dokumentów?",
          "prompt": "Powiedz na głos: „Potrzebuję zaświadczenia od zarządcy”.",
          "targetTr": "Potrzebuję zaświadczenia od zarządcy.",
          "wordTr": "zaświadczenie zarządcy"
        }
      ],
      "can": [
        "mówić o okresie wypowiedzenia",
        "wspomnieć o wymianie rur",
        "mówić o opłacie na utrzymanie",
        "poprosić o zaświadczenie od zarządcy"
      ]
    },
    "b2c_finance": {
      "steps": [
        {
          "partnerTr": "W czym mogę pomóc?",
          "prompt": "Powiedz „Chciałbym ubiegać się o kredyt hipoteczny”.",
          "optionsTr": [
            "Chciałbym ubiegać się o kredyt hipoteczny.",
            "Dobranoc.",
            "Gdzie jest dworzec?"
          ],
          "hint": "Chcesz kredyt hipoteczny.",
          "wordTr": "kredyt mieszkaniowy"
        },
        {
          "partnerTr": "Czy do kredytu potrzebne jest poręczenie?",
          "prompt": "Powiedz „Tak, bank wymaga poręczenia”.",
          "optionsTr": [
            "Dziś jest zimno.",
            "Tak, bank wymaga poręczenia.",
            "Do widzenia."
          ],
          "hint": "Mówisz, że bank wymaga poręczenia.",
          "wordTr": "poręczenie"
        },
        {
          "partnerTr": "Czy ma pan zaległości w płatnościach?",
          "prompt": "Ułóż słowa po kolei. Powiedz „Nie mam żadnych zaległości”.",
          "blocksTr": [
            "1. Nie",
            "2. mam",
            "3. żadnych",
            "4. zaległości"
          ],
          "pattern": "Wzór: nie + mam + żadnych + zaległości. W zdaniu przeczącym rzecz stoi w formie „jakiegoś”: maksuhäiriötä.",
          "wordTr": "wpis o zaległościach"
        },
        {
          "partnerTr": "Czy ma pan jeszcze jakieś pytania?",
          "prompt": "Powiedz na głos: „Kiedy dostanę zwrot podatku?”",
          "targetTr": "Kiedy dostanę zwrot podatku?",
          "wordTr": "zwrot podatku"
        }
      ],
      "can": [
        "ubiegać się o kredyt hipoteczny",
        "powiedzieć, że bank wymaga poręczenia",
        "powiedzieć, że nie masz zaległości",
        "zapytać o zwrot podatku"
      ]
    }
  },
};
