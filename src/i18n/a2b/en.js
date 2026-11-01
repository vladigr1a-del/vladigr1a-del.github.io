export const a2b = {
  path: { a2_rest: 'At the restaurant', a2_food: 'Food and drink', a2_home: 'Finding a flat', a2_rooms: 'At home', a2_city: 'In town', a2_bank: 'Bank and post office', a2_phone: 'Phone and plans', a2_adverbs: 'When and how often', a2_work: 'At work', a2_jobs: 'Jobs', a2_school: 'Studying', a2_verbs1: 'Everyday verbs 1', a2_verbs2: 'Everyday verbs 2', a2_past: 'Yesterday (past tense)', a2_hobby: 'Hobbies', a2_adj: 'Opposites', a2_feel: 'Feelings', a2_questions: 'Question words' },
  words: {
    a2_rest: ['menu', 'to order', 'bill', 'to reserve', 'dessert', 'main course', 'starter', 'tastes (good)', 'delicious', 'vegetarian dish', 'allergic', 'more', 'pleasant', 'without'],
    a2_food: ['food', 'drink', 'meat', 'fish', 'chicken', 'potato', 'rice', 'vegetable', 'soup', 'salad', 'juice', 'beer', 'egg', 'butter'],
    a2_home: ['flat', 'to rent', 'floor', 'lift', 'balcony', 'electricity', 'heating', 'key', 'address', 'to move (house)', 'renovation', 'apartment', 'two-room flat', 'studio flat'],
    a2_rooms: ['home', 'room', 'kitchen', 'bedroom', 'bathroom', 'living room', 'door', 'window', 'table', 'chair', 'bed', 'cupboard', 'rent', 'neighbour'],
    a2_city: ['city', 'bank', 'post office', 'library', 'school', 'hospital', 'restaurant', 'market square', 'park', 'museum', 'church', 'hotel', 'swimming hall', 'crossroads'],
    a2_bank: ['account', 'money', 'account number', 'to withdraw', 'payment', 'to send', 'parcel', 'letter', 'stamp', 'recipient', 'form', 'signature', 'passport', 'receipt'],
    a2_phone: ['phone', 'message', 'number', 'email', 'to agree (a time)', 'to meet', 'invitation', 'to have time', 'free', 'next week', 'early', 'late', 'nice', 'a pity'],
    a2_adverbs: ['always', 'often', 'sometimes', 'rarely', 'never', 'now', 'later', 'soon', 'already', 'still / yet', 'then', 'first', 'last time', 'every day'],
    a2_work: ['workplace', 'working day', 'break', 'meeting', 'boss', 'colleague', 'work contract', 'holiday', 'shift', 'overtime', 'interview', 'to apply', 'experience', 'language'],
    a2_jobs: ['teacher', 'nurse', 'cook', 'driver', 'cleaner', 'shop assistant', 'engineer', 'builder', 'waiter', 'police officer', 'firefighter', 'student', 'employer', 'salary'],
    a2_school: ['course', 'lesson', 'homework', 'test', 'word', 'sentence', 'grammar', 'pronunciation', 'exercise', 'dictionary', 'question', 'answer', 'mistake', 'to learn'],
    a2_verbs1: ['to do / make', 'to go', 'to come', 'to buy', 'to sell', 'to give', 'to take', 'to see', 'to hear', 'to understand', 'to know (a fact)', 'to know how to', 'to wait', 'to help'],
    a2_verbs2: ['to study', 'to work', 'to call / to play', 'to write', 'to read', 'to watch', 'to listen', 'to ask', 'to answer', 'to open', 'to close', 'to find', 'to try', 'to remember'],
    a2_past: ['I was', 'I went (to a place)', 'I went', 'I ate', 'I drank', 'I saw', 'I did', 'I bought', 'I met', 'I read', 'I slept', 'at the weekend', 'last week', 'fun'],
    a2_hobby: ['hobby', 'sport', 'football', 'swimming', 'skiing', 'cycling', 'music', 'film', 'book', 'to dance', 'to sing', 'to draw', 'sauna', 'trip'],
    a2_adj: ['good', 'bad', 'new', 'old', 'fast', 'slow', 'easy', 'difficult', 'beautiful', 'ugly', 'clean', 'dirty', 'full', 'empty'],
    a2_feel: ['happy', 'sad', 'tired', 'hungry', 'thirsty', 'angry', 'calm', 'busy', 'I like', 'I love', 'I am afraid', 'I miss (someone)', 'worried', 'proud'],
    a2_questions: ['who', 'what', 'when', 'why', 'how', 'how many', 'whose', 'which (of two)', 'where to', 'how long', 'how often', 'can I', 'may I', 'to mean'],
  },
  missions: {
    a2_rest: {
      steps: [
        { partnerTr: 'Welcome! Do you have a reservation?', prompt: 'Say that you reserved a table for two.', optionsTr: ['Yes, I reserved a table for two.', 'Good morning.', 'Where is the station?'], hint: 'The waiter asks about your reservation.', wordTr: 'to reserve' },
        { partnerTr: 'What would you like to order?', prompt: 'Order soup and water.', optionsTr: ['What time is it?', 'I would like soup and water.', 'I have a fever.'], hint: 'You are ordering food.', wordTr: 'to order' },
        { partnerTr: 'How does the food taste?', prompt: 'Put the words in order. Say “The soup is delicious”.', blocksTr: ['1. The soup', '2. is', '3. delicious'], pattern: 'Pattern: thing + on (is) + adjective. Finnish has no “the” or “a”: “keitto” means “the soup” or “a soup”.', wordTr: 'delicious' },
        { partnerTr: 'Would you like dessert?', prompt: 'Say out loud: “Could I have the bill?”', targetTr: 'Could I have the bill?', wordTr: 'bill' },
      ],
      can: ['say that you have a reservation', 'order food and drink', 'say that the food is delicious', 'ask for the bill'],
    },
    a2_home: {
      steps: [
        { partnerTr: 'Hello! Are you looking for a flat?', prompt: 'Say that you are looking for a studio flat.', optionsTr: ['Yes, I am looking for a studio flat.', 'Thanks, I have a fever.', 'Today is Monday.'], hint: 'You are talking about housing.', wordTr: 'studio flat' },
        { partnerTr: 'Which floor do you live on?', prompt: 'Say that you live on the third floor.', optionsTr: ['Good night.', 'I live on the third floor.', 'I have a sister.'], hint: 'They ask about the floor.', wordTr: 'floor' },
        { partnerTr: 'What is there in the flat?', prompt: 'Put the words in order. Say “There is a balcony in the flat”.', blocksTr: ['1. In the flat', '2. there is', '3. a balcony'], pattern: 'Pattern: where + on + what. “Asunnossa on parveke” = “in the flat there is a balcony”. Finnish uses “on” (is) for “there is”.', wordTr: 'balcony' },
        { partnerTr: 'Here is the key.', prompt: 'Ask what the address is.', targetTr: 'What is the address?', wordTr: 'address' },
      ],
      can: ['say what kind of flat you are looking for', 'say which floor you live on', 'say what there is in a flat', 'ask for an address'],
    },
    a2_bank: {
      steps: [
        { partnerTr: 'Hello! How can I help?', prompt: 'Say that you would like to send a parcel.', optionsTr: ['I would like to send a parcel.', 'I am tired.', 'Today is Monday.'], hint: 'You are at the post office.', wordTr: 'parcel' },
        { partnerTr: 'Where is the parcel going?', prompt: 'Say that it is going abroad.', optionsTr: ['Good night.', 'It is going abroad.', 'It is delicious.'], hint: 'They ask about the destination.', wordTr: 'to send' },
        { partnerTr: 'I need to see your ID.', prompt: 'Put the words in order. Say “Here is my passport”.', blocksTr: ['1. Here', '2. is', '3. my passport'], pattern: 'Pattern: “Tässä on” = “here is”. It is useful when handing something over. The ending “-ni” means “my”: passi becomes passini.', wordTr: 'passport' },
        { partnerTr: 'Do you need a receipt?', prompt: 'Say out loud: “Yes, I want a receipt”.', targetTr: 'Yes, I want a receipt.', wordTr: 'receipt' },
      ],
      can: ['send a parcel', 'say where it is going', 'hand over your passport', 'ask for a receipt'],
    },
    a2_phone: {
      steps: [
        { partnerTr: 'Hi! Would you come for coffee on Saturday?', prompt: 'Thank them for the invitation.', optionsTr: ['Thanks for the invitation, gladly!', 'I have a fever.', 'Where is the station?'], hint: 'You are being invited.', wordTr: 'invitation' },
        { partnerTr: 'When suits you?', prompt: 'Say “Saturday at two o’clock”.', optionsTr: ['Nice to meet you.', 'Saturday at two o’clock.', 'Sorry.'], hint: 'They are asking for a time.', wordTr: 'to agree (a time)' },
        { partnerTr: 'Do you have time to come?', prompt: 'Put the words in order. Say “A pity, I don’t have time to come”.', blocksTr: ['1. A pity', '2. I don’t', '3. have time', '4. to come'], pattern: 'Pattern: negative = en + verb. “en” means “I don’t”, “et” means “you don’t”. The verb loses its ending: ehdin becomes en ehdi.', wordTr: 'to have time' },
        { partnerTr: 'What is your number?', prompt: 'Say out loud: “I will send you a message”.', targetTr: 'I will send you a message.', wordTr: 'message' },
      ],
      can: ['thank someone for an invitation', 'suggest a time', 'say that you cannot come', 'promise to send a message'],
    },
    a2_work: {
      steps: [
        { partnerTr: 'Where do you work?', prompt: 'Say that you work in a restaurant.', optionsTr: ['I work in a restaurant.', 'It is cold today.', 'I have a sister.'], hint: 'They ask about your workplace.', wordTr: 'workplace' },
        { partnerTr: 'When do you have a break?', prompt: 'Say that your break is at twelve.', optionsTr: ['Good night.', 'I have a break at twelve o’clock.', 'Where is the station?'], hint: 'They ask about your break.', wordTr: 'break' },
        { partnerTr: 'Do you have experience?', prompt: 'Put the words in order. Say “I have work experience”.', blocksTr: ['1. I have', '2. (there is)', '3. work experience'], pattern: 'Pattern: “Minulla on” = “I have” (literally “at me there is”). After “on”, an unspecified amount takes the partitive: kokemus becomes kokemusta.', wordTr: 'experience' },
        { partnerTr: 'Tell me about yourself.', prompt: 'Say out loud: “I would like to apply for a job”.', targetTr: 'I would like to apply for a job.', wordTr: 'to apply' },
      ],
      can: ['say where you work', 'say when your break is', 'say that you have experience', 'say that you want to apply for a job'],
    },
    a2_school: {
      steps: [
        { partnerTr: 'Which course are you on?', prompt: 'Say that you are on the Finnish course.', optionsTr: ['I am on the Finnish course.', 'I have a fever.', 'Good night.'], hint: 'They ask about your course.', wordTr: 'course' },
        { partnerTr: 'Do you have a question?', prompt: 'Ask what this word means.', optionsTr: ['Good morning.', 'Yes, what does this word mean?', 'Goodbye.'], hint: 'You want to ask about a word.', wordTr: 'word' },
        { partnerTr: 'Have you done your homework?', prompt: 'Put the words in order. Say “I have done the homework”.', blocksTr: ['1. I have', '2. done', '3. the homework'], pattern: 'Pattern: “olen” + past participle = “I have done”. This is the perfect tense: olen tehnyt.', wordTr: 'homework' },
        { partnerTr: 'Do you want to ask something?', prompt: 'Say out loud: “I have a question”.', targetTr: 'I have a question.', wordTr: 'question' },
      ],
      can: ['say which course you are on', 'ask what a word means', 'say that you have done your homework', 'say that you have a question'],
    },
    a2_past: {
      steps: [
        { partnerTr: 'Where were you yesterday?', prompt: 'Say that you were at work.', optionsTr: ['I was at work.', 'Good night.', 'It costs five euros.'], hint: 'They ask about yesterday.', wordTr: 'I was' },
        { partnerTr: 'What did you do at the weekend?', prompt: 'Say that you saw a friend.', optionsTr: ['I would like a coffee.', 'I saw a friend.', 'It is cold today.'], hint: 'They ask about your weekend.', wordTr: 'I saw' },
        { partnerTr: 'What did you eat?', prompt: 'Put the words in order. Say “I ate soup and bread”.', blocksTr: ['1. I ate', '2. soup', '3. and', '4. bread'], pattern: 'Pattern: past + what. söin = “I ate” (syön = “I eat”). The ending “-in” marks the past for “I”. Soup and bread take the partitive: keittoa, leipää.', wordTr: 'I ate' },
        { partnerTr: 'Was it fun?', prompt: 'Say out loud: “Yes, I had fun”.', targetTr: 'Yes, I had fun.', wordTr: 'fun' },
      ],
      can: ['say where you were yesterday', 'say what you did at the weekend', 'say what you ate', 'say that you had fun'],
    },
  },
};
