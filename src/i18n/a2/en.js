export const a2 = {
  path: { a2_shop: 'In the shop', a2_weather: 'Weather and seasons', a2_move: 'Getting around', a2_time: 'Time and the day', a2_clothes: 'Colours and clothes', a2_health: 'At the doctor' },
  words: {
    a2_shop: ['shop', 'bread', 'cheese', 'apple', 'price', 'cheap', 'expensive', 'I need', 'I am looking for', 'checkout', 'bag', 'special offer', 'big', 'small'],
    a2_weather: ['weather', 'sun', 'rain', 'snow', 'wind', 'cold', 'warm', 'hot', 'cloudy', 'spring', 'summer', 'autumn', 'winter', 'degree'],
    a2_move: ['bus', 'train', 'stop', 'station', 'ticket', 'to the right', 'to the left', 'straight ahead', 'street', 'map', 'where', 'near', 'far', 'to walk'],
    a2_time: ['clock / time', 'morning', 'day', 'evening', 'night', 'today', 'tomorrow', 'yesterday', 'I wake up', 'I eat', 'I sleep', 'at work', 'half', 'minute'],
    a2_clothes: ['red', 'blue', 'green', 'yellow', 'black', 'white', 'coat', 'trousers', 'shirt', 'shoes', 'hat', 'mittens', 'socks', 'dress'],
    a2_health: ['doctor', 'pharmacy', 'medicine', 'fever', 'flu', 'headache', 'stomach', 'hand', 'leg', 'head', 'sore', 'healthy', 'appointment', 'help'],
  },
  missions: {
    a2_shop: {
      steps: [
        { partnerTr: 'Hello! Can I help you?', prompt: 'Say that you are looking for milk.', optionsTr: ['I am looking for milk.', 'I am coffee.', 'Good night.'], hint: 'Tell the shop assistant what you are looking for.', wordTr: 'I am looking for' },
        { partnerTr: 'Do you need a bag?', prompt: 'Say “yes, please”.', optionsTr: ['Sorry.', 'Yes, please.', 'Good night.'], hint: 'We are looking for the answer “yes, please”.', wordTr: 'bag' },
        { partnerTr: 'What do you need?', prompt: 'Put the words in order. Say “I need bread and cheese”.', blocksTr: ['1. I need', '2. bread', '3. and', '4. cheese'], pattern: 'Pattern: I need + what. After “tarvitsen” the thing gets an ending: leipä (bread) becomes leipää, juusto becomes juustoa. This is called the partitive: “some of it”.', wordTr: 'I need' },
        { partnerTr: 'Here is an apple.', prompt: 'Ask how much this costs.', targetTr: 'How much does this cost?', wordTr: 'price' },
      ],
      can: ['say what you are looking for in a shop', 'say what you need', 'ask how much something costs'],
    },
    a2_move: {
      steps: [
        { partnerTr: 'Excuse me, where is the station?', prompt: 'Give directions: straight ahead, then right.', optionsTr: ['Straight ahead and then to the right.', 'I would like a coffee.', 'Good night.'], hint: 'You are giving directions.', wordTr: 'straight ahead' },
        { partnerTr: 'Is the station far?', prompt: 'Say that it is near.', optionsTr: ['Good morning.', 'No, it is near.', 'It costs five euros.'], hint: 'We want to say that the station is not far.', wordTr: 'near' },
        { partnerTr: 'How do I get to the bus stop?', prompt: 'Put the words in order. Say “Straight ahead and then to the right”.', blocksTr: ['1. Straight ahead', '2. and', '3. then', '4. to the right'], pattern: 'Pattern: direction + and then + direction. The ending “-lle” means “to”: oikea (right) becomes oikealle.', wordTr: 'to the right' },
        { partnerTr: 'Would you like a ticket?', prompt: 'Say out loud: “One ticket, please”.', targetTr: 'One ticket, please.', wordTr: 'ticket' },
      ],
      can: ['give simple directions', 'say that something is near or far', 'ask for a ticket'],
    },
    a2_time: {
      steps: [
        { partnerTr: 'What time is it?', prompt: 'Say that it is eight o’clock.', optionsTr: ['It is eight o’clock.', 'I live in Finland.', 'Thank you very much.'], hint: 'They are asking for the time.', wordTr: 'clock / time' },
        { partnerTr: 'When do you wake up?', prompt: 'Say that you wake up at six in the morning.', optionsTr: ['It is cold today.', 'I wake up at six in the morning.', 'Goodbye.'], hint: 'They are asking about your morning.', wordTr: 'I wake up' },
        { partnerTr: 'What are you doing tomorrow?', prompt: 'Put the words in order. Say “Tomorrow I am at work”.', blocksTr: ['1. Tomorrow', '2. I am', '3. at work'], pattern: 'Pattern: when + I am + where. In Finnish the verb stays in second place, even when the time word comes first.', wordTr: 'at work' },
        { partnerTr: 'When do you go to bed?', prompt: 'Say out loud: “I go to bed in the evening”.', targetTr: 'I go to bed in the evening.', wordTr: 'evening' },
      ],
      can: ['say what time it is', 'say when you wake up', 'say what you are doing tomorrow'],
    },
    a2_health: {
      steps: [
        { partnerTr: 'Hello! What is wrong?', prompt: 'Say that you have a fever.', optionsTr: ['I have a fever.', 'I would like a coffee.', 'Nice to meet you.'], hint: 'The doctor asks what the problem is.', wordTr: 'fever' },
        { partnerTr: 'Do you have a headache?', prompt: 'Say “yes, I have a headache”.', optionsTr: ['Thank you very much.', 'Yes, I have a headache.', 'Good night.'], hint: 'We are looking for the answer “yes”.', wordTr: 'headache' },
        { partnerTr: 'What hurts?', prompt: 'Put the words in order. Say “My stomach hurts”.', blocksTr: ['1. My stomach', '2. is', '3. sore'], pattern: 'Pattern: my + body part + is sore. The ending “-ni” means “my”: vatsa (stomach) becomes vatsani.', wordTr: 'stomach' },
        { partnerTr: 'Do you need an appointment with the doctor?', prompt: 'Say out loud: “I would like an appointment with the doctor”.', targetTr: 'I would like an appointment with the doctor.', wordTr: 'appointment' },
      ],
      can: ['say that you have a fever or a headache', 'say what hurts', 'ask for a doctor’s appointment'],
    },
  },
};
