export const a2 = {
  path: { a2_shop: 'Parduotuvėje', a2_weather: 'Oras ir metų laikai', a2_move: 'Kaip nukeliauti', a2_time: 'Laikas ir diena', a2_clothes: 'Spalvos ir drabužiai', a2_health: 'Pas gydytoją' },
  words: {
    a2_shop: ['parduotuvė', 'duona', 'sūris', 'obuolys', 'kaina', 'pigus', 'brangus', 'man reikia', 'aš ieškau', 'kasa', 'maišelis', 'akcija', 'didelis', 'mažas'],
    a2_weather: ['oras', 'saulė', 'lietus', 'sniegas', 'vėjas', 'šalta', 'šilta', 'karšta', 'debesuota', 'pavasaris', 'vasara', 'ruduo', 'žiema', 'laipsnis'],
    a2_move: ['autobusas', 'traukinys', 'stotelė', 'stotis', 'bilietas', 'į dešinę', 'į kairę', 'tiesiai', 'gatvė', 'žemėlapis', 'kur', 'arti', 'toli', 'eiti pėsčiomis'],
    a2_time: ['laikrodis / laikas', 'rytas', 'diena', 'vakaras', 'naktis', 'šiandien', 'rytoj', 'vakar', 'aš keliuosi', 'aš valgau', 'aš miegu', 'darbe', 'pusė', 'minutė'],
    a2_clothes: ['raudonas', 'mėlynas', 'žalias', 'geltonas', 'juodas', 'baltas', 'paltas', 'kelnės', 'marškiniai', 'batai', 'kepurė', 'pirštinės', 'kojinės', 'suknelė'],
    a2_health: ['gydytojas', 'vaistinė', 'vaistai', 'karščiavimas', 'gripas', 'galvos skausmas', 'pilvas', 'ranka', 'koja', 'galva', 'skauda', 'sveikas', 'vizitas pas gydytoją', 'pagalba'],
  },
  missions: {
    a2_shop: {
      steps: [
        { partnerTr: 'Laba diena! Ar galiu padėti?', prompt: 'Pasakykite, kad ieškote pieno.', optionsTr: ['Aš ieškau pieno.', 'Aš esu kava.', 'Labanakt.'], hint: 'Pasakykite pardavėjui, ko ieškote.', wordTr: 'aš ieškau' },
        { partnerTr: 'Ar jums reikia maišelio?', prompt: 'Pasakykite „taip, prašom“.', optionsTr: ['Atsiprašau.', 'Taip, prašom.', 'Labanakt.'], hint: 'Ieškome atsakymo „taip, prašom“.', wordTr: 'maišelis' },
        { partnerTr: 'Ko jums reikia?', prompt: 'Sudėliokite žodžius tvarka. Pasakykite „Man reikia duonos ir sūrio“.', blocksTr: ['1. Man reikia', '2. duonos', '3. ir', '4. sūrio'], pattern: 'Pavyzdys: man reikia + ko. Po „tarvitsen“ žodis gauna galūnę: leipä (duona) tampa leipää, juusto – juustoa. Tai vadinama partityvu: „šiek tiek ko nors“.', wordTr: 'man reikia' },
        { partnerTr: 'Štai obuolys.', prompt: 'Paklauskite, kiek tai kainuoja.', targetTr: 'Kiek tai kainuoja?', wordTr: 'kaina' },
      ],
      can: ['pasakyti, ko ieškote parduotuvėje', 'pasakyti, ko jums reikia', 'paklausti, kiek kas kainuoja'],
    },
    a2_move: {
      steps: [
        { partnerTr: 'Atsiprašau, kur yra stotis?', prompt: 'Paaiškinkite: tiesiai, paskui į dešinę.', optionsTr: ['Tiesiai ir paskui į dešinę.', 'Norėčiau kavos.', 'Labanakt.'], hint: 'Jūs rodote kelią.', wordTr: 'tiesiai' },
        { partnerTr: 'Ar stotis toli?', prompt: 'Pasakykite, kad ji arti.', optionsTr: ['Labas rytas.', 'Ne, ji arti.', 'Tai kainuoja penkis eurus.'], hint: 'Norime pasakyti, kad stotis nėra toli.', wordTr: 'arti' },
        { partnerTr: 'Kaip nueiti iki stotelės?', prompt: 'Sudėliokite žodžius tvarka. Pasakykite „Tiesiai ir paskui į dešinę“.', blocksTr: ['1. Tiesiai', '2. ir', '3. paskui', '4. į dešinę'], pattern: 'Pavyzdys: kryptis + ir paskui + kryptis. Galūnė „-lle“ reiškia „į“: oikea (dešinė) tampa oikealle.', wordTr: 'į dešinę' },
        { partnerTr: 'Ar norite bilieto?', prompt: 'Pasakykite garsiai: „Vieną bilietą, prašom“.', targetTr: 'Vieną bilietą, prašom.', wordTr: 'bilietas' },
      ],
      can: ['paaiškinti paprastą kelią', 'pasakyti, kad kažkas arti ar toli', 'paprašyti bilieto'],
    },
    a2_time: {
      steps: [
        { partnerTr: 'Kiek valandų?', prompt: 'Pasakykite, kad yra aštuonios.', optionsTr: ['Yra aštuonios.', 'Aš gyvenu Suomijoje.', 'Labai ačiū.'], hint: 'Jūsų klausia laiko.', wordTr: 'laikrodis / laikas' },
        { partnerTr: 'Kada keliatės?', prompt: 'Pasakykite, kad keliatės šeštą ryto.', optionsTr: ['Šiandien šalta.', 'Aš keliuosi šeštą ryto.', 'Viso gero.'], hint: 'Jūsų klausia apie jūsų rytą.', wordTr: 'aš keliuosi' },
        { partnerTr: 'Ką veiksite rytoj?', prompt: 'Sudėliokite žodžius tvarka. Pasakykite „Rytoj aš esu darbe“.', blocksTr: ['1. Rytoj', '2. aš esu', '3. darbe'], pattern: 'Pavyzdys: kada + aš esu + kur. Suomių kalboje veiksmažodis lieka antroje vietoje, net jei laiko žodis yra pirmas.', wordTr: 'darbe' },
        { partnerTr: 'Kada einate miegoti?', prompt: 'Pasakykite garsiai: „Einu miegoti vakare“.', targetTr: 'Einu miegoti vakare.', wordTr: 'vakaras' },
      ],
      can: ['pasakyti, kiek valandų', 'pasakyti, kada keliatės', 'pasakyti, ką darysite rytoj'],
    },
    a2_health: {
      steps: [
        { partnerTr: 'Laba diena! Kas jums skauda?', prompt: 'Pasakykite, kad turite karščiavimą.', optionsTr: ['Aš karščiuoju.', 'Norėčiau kavos.', 'Malonu susipažinti.'], hint: 'Gydytojas klausia, kokia problema.', wordTr: 'karščiavimas' },
        { partnerTr: 'Ar jums skauda galvą?', prompt: 'Pasakykite „taip, man skauda galvą“.', optionsTr: ['Labai ačiū.', 'Taip, man skauda galvą.', 'Labanakt.'], hint: 'Ieškome atsakymo „taip“.', wordTr: 'galvos skausmas' },
        { partnerTr: 'Kas skauda?', prompt: 'Sudėliokite žodžius tvarka. Pasakykite „Man skauda pilvą“.', blocksTr: ['1. Mano pilvas', '2. yra', '3. skaudantis'], pattern: 'Pavyzdys: mano + kūno dalis + skauda. Galūnė „-ni“ reiškia „mano“: vatsa (pilvas) tampa vatsani.', wordTr: 'pilvas' },
        { partnerTr: 'Ar jums reikia vizito pas gydytoją?', prompt: 'Pasakykite garsiai: „Norėčiau užsiregistruoti pas gydytoją“.', targetTr: 'Norėčiau užsiregistruoti pas gydytoją.', wordTr: 'vizitas pas gydytoją' },
      ],
      can: ['pasakyti, kad karščiuojate ar skauda galvą', 'pasakyti, kas skauda', 'užsiregistruoti pas gydytoją'],
    },
  },
};
