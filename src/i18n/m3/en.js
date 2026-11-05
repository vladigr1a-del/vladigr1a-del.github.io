export const m3 = {
  missions: {
    "a2c_doctor": {
      "steps": [
        {
          "partnerTr": "What is bothering you?",
          "prompt": "Say “I have a sore throat”.",
          "optionsTr": [
            "I have a sore throat.",
            "I would like a coffee.",
            "Good night."
          ],
          "hint": "You are describing how you feel.",
          "wordTr": "sore throat"
        },
        {
          "partnerTr": "Do you have allergies?",
          "prompt": "Say “Yes, I have an allergy”.",
          "optionsTr": [
            "It costs five euros.",
            "Yes, I have an allergy.",
            "Goodbye."
          ],
          "hint": "They are asking about allergies.",
          "wordTr": "allergy"
        },
        {
          "partnerTr": "Do you need sick leave?",
          "prompt": "Put the words in order. Say “I need sick leave for three days”.",
          "blocksTr": [
            "1. I need",
            "2. sick leave",
            "3. for three",
            "4. days"
          ],
          "pattern": "Pattern: I need + sick leave + for three days. The ending -ksi means “for” a time: kolme päivää becomes kolmeksi päiväksi.",
          "wordTr": "sick leave"
        },
        {
          "partnerTr": "Now we will measure your blood pressure.",
          "prompt": "Say out loud: “Is my blood pressure normal?”.",
          "targetTr": "Is my blood pressure normal?",
          "wordTr": "blood pressure"
        }
      ],
      "can": [
        "describe how you feel",
        "say that you have an allergy",
        "ask for sick leave for a few days",
        "ask about your blood pressure"
      ]
    },
    "a2c_hotel": {
      "steps": [
        {
          "partnerTr": "Good evening! How can I help?",
          "prompt": "Say “I have a reservation”.",
          "optionsTr": [
            "I have a reservation.",
            "Goodbye.",
            "It costs three euros."
          ],
          "hint": "You have already booked a room.",
          "wordTr": "reservation"
        },
        {
          "partnerTr": "How many nights are you going to stay?",
          "prompt": "Say “We are going to stay two nights”.",
          "optionsTr": [
            "Good night.",
            "We are going to stay two nights.",
            "I would like a coffee."
          ],
          "hint": "You are saying how long you will stay.",
          "wordTr": "to stay overnight"
        },
        {
          "partnerTr": "Where is the pool?",
          "prompt": "Put the words in order. Say “The pool is downstairs”.",
          "blocksTr": [
            "1. The pool",
            "2. is",
            "3. downstairs"
          ],
          "pattern": "Pattern: place + is + where. The ending -ssa means “in / at”: alakerta (the downstairs) becomes alakerrassa.",
          "wordTr": "swimming pool"
        },
        {
          "partnerTr": "Do you need anything else?",
          "prompt": "Say out loud: “Could I have a spare key?”.",
          "targetTr": "Could I have a spare key?",
          "wordTr": "spare key"
        }
      ],
      "can": [
        "say that you have a reservation",
        "say how many nights you will stay",
        "ask where the pool is",
        "ask for a spare key"
      ]
    },
    "a2c_directions": {
      "steps": [
        {
          "partnerTr": "Excuse me, where is the nearest pharmacy?",
          "prompt": "Say “It is at the crossroads over there”.",
          "optionsTr": [
            "It is at the crossroads over there.",
            "I would like a coffee.",
            "Good night."
          ],
          "hint": "You are telling where the place is.",
          "wordTr": "at the crossroads"
        },
        {
          "partnerTr": "Is it far?",
          "prompt": "Say “No, it is within walking distance”.",
          "optionsTr": [
            "Good morning.",
            "No, it is within walking distance.",
            "It costs three euros."
          ],
          "hint": "You are saying that it is close.",
          "wordTr": "walking distance"
        },
        {
          "partnerTr": "Which way do I need to go?",
          "prompt": "Put the words in order. Say “Turn right and continue straight on”.",
          "blocksTr": [
            "1. Turn",
            "2. right",
            "3. and",
            "4. continue",
            "5. straight on"
          ],
          "pattern": "Pattern: turn + right + and + continue + straight on. These are commands: käänny (turn!), jatka (continue!).",
          "wordTr": "to turn"
        },
        {
          "partnerTr": "It is opposite the library.",
          "prompt": "Say out loud: “Is it around the corner?”.",
          "targetTr": "Is it around the corner?",
          "wordTr": "corner"
        }
      ],
      "can": [
        "ask where the nearest place is",
        "understand “within walking distance”",
        "tell someone to turn right and continue",
        "ask whether something is around the corner"
      ]
    },
    "b1c_service": {
      "steps": [
        {
          "partnerTr": "Good day. How can I help?",
          "prompt": "Say “I would like to book an appointment”.",
          "optionsTr": [
            "I would like to book an appointment.",
            "Goodbye.",
            "It costs three euros."
          ],
          "hint": "You want to book an appointment.",
          "wordTr": "appointment booking"
        },
        {
          "partnerTr": "Do you have a queue number?",
          "prompt": "Say “Yes, my number is twenty-three”.",
          "optionsTr": [
            "Good night.",
            "Yes, my number is twenty-three.",
            "It is cold today."
          ],
          "hint": "You are giving your queue number.",
          "wordTr": "queue number"
        },
        {
          "partnerTr": "What would you like to do?",
          "prompt": "Put the words in order. Say “I want to collect the parcel from the pickup point”.",
          "blocksTr": [
            "1. I want",
            "2. to collect",
            "3. the parcel",
            "4. from the pickup point"
          ],
          "pattern": "Pattern: I want + to collect + the parcel + from the pickup point. The ending -sta means “from”: noutopiste becomes noutopisteestä.",
          "wordTr": "pick-up point"
        },
        {
          "partnerTr": "We still need the attachment.",
          "prompt": "Say out loud: “I will send the attachment by email”.",
          "targetTr": "I will send the attachment by email.",
          "wordTr": "attachment"
        }
      ],
      "can": [
        "ask for an appointment",
        "give your queue number",
        "say that you want to collect a parcel",
        "promise to send an attachment"
      ]
    },
    "b1c_work2": {
      "steps": [
        {
          "partnerTr": "Why are you applying for this job?",
          "prompt": "Say “I am applying because I am looking for a permanent job”.",
          "optionsTr": [
            "I am applying because I am looking for a permanent job.",
            "I would like a coffee.",
            "Good night."
          ],
          "hint": "You are explaining why you are applying.",
          "wordTr": "permanent"
        },
        {
          "partnerTr": "Do you want to work full-time or part-time?",
          "prompt": "Say “Part-time work would suit me better”.",
          "optionsTr": [
            "Goodbye.",
            "Part-time work would suit me better.",
            "It is cold today."
          ],
          "hint": "You are choosing between full-time and part-time.",
          "wordTr": "part-time"
        },
        {
          "partnerTr": "Do you have a work certificate?",
          "prompt": "Put the words in order. Say “I have a work certificate from my previous employer”.",
          "blocksTr": [
            "1. I",
            "2. have",
            "3. work certificate",
            "4. from the previous",
            "5. employer"
          ],
          "pattern": "Pattern: I have + a work certificate + from my previous employer. The ending -lta means “from”: työnantaja becomes työnantajalta.",
          "wordTr": "employment certificate"
        },
        {
          "partnerTr": "Let’s talk about working hours too.",
          "prompt": "Say out loud: “What are the weekly working hours?”.",
          "targetTr": "What are the weekly working hours?",
          "wordTr": "working hours"
        }
      ],
      "can": [
        "say why you are applying for a job",
        "talk about part-time work",
        "say that you have a work certificate",
        "ask about working hours"
      ]
    },
    "b1c_shop3": {
      "steps": [
        {
          "partnerTr": "How can I help?",
          "prompt": "Say “I would like to make a complaint about this product”.",
          "optionsTr": [
            "I would like to make a complaint about this product.",
            "Good night.",
            "Where is the station?"
          ],
          "hint": "You want to complain about a product.",
          "wordTr": "to complain (about a product)"
        },
        {
          "partnerTr": "Is the product still under warranty?",
          "prompt": "Say “Yes, the warranty ends next month”.",
          "optionsTr": [
            "Good morning.",
            "Yes, the warranty ends next month.",
            "It is red."
          ],
          "hint": "You are saying that the warranty is still valid.",
          "wordTr": "warranty period"
        },
        {
          "partnerTr": "Why do you want to return the product?",
          "prompt": "Put the words in order. Say “There were no instructions in it”.",
          "blocksTr": [
            "1. It",
            "2. not",
            "3. was",
            "4. instructions"
          ],
          "pattern": "Pattern: in it + not + was + instructions. In a negative sentence the thing takes the “some” form: käyttöohjetta.",
          "wordTr": "instructions for use"
        },
        {
          "partnerTr": "You have a fourteen-day right of return.",
          "prompt": "Say out loud: “Will the delivery costs be refunded?”.",
          "targetTr": "Will the delivery costs be refunded?",
          "wordTr": "delivery costs"
        }
      ],
      "can": [
        "say that you want to make a complaint",
        "ask about the warranty period",
        "explain that instructions were missing",
        "ask whether delivery costs are refunded"
      ]
    },
    "b2c_meeting": {
      "steps": [
        {
          "partnerTr": "Have you received the meeting invitation?",
          "prompt": "Say “Yes, I have read the agenda”.",
          "optionsTr": [
            "Yes, I have read the agenda.",
            "Good night.",
            "It costs three euros."
          ],
          "hint": "You are saying that you have read it.",
          "wordTr": "agenda"
        },
        {
          "partnerTr": "Who is the chair of the meeting?",
          "prompt": "Say “Virtanen is the chair”.",
          "optionsTr": [
            "Goodbye.",
            "Virtanen is the chair.",
            "It is cold today."
          ],
          "hint": "You are naming the chair.",
          "wordTr": "chairperson"
        },
        {
          "partnerTr": "What happens next?",
          "prompt": "Put the words in order. Say “The proposal is voted on before the meeting ends”.",
          "blocksTr": [
            "1. About the proposal",
            "2. it is voted",
            "3. before",
            "4. of the meeting",
            "5. the ending"
          ],
          "pattern": "Pattern: about the proposal + it is voted + before + the meeting’s + ending. “äänestetään” = “it is voted” (nobody in particular is named).",
          "wordTr": "vote"
        },
        {
          "partnerTr": "Does anyone have anything else to say?",
          "prompt": "Say out loud: “I would like to support the proposal”.",
          "targetTr": "I would like to support the proposal.",
          "wordTr": "support (seconding)"
        }
      ],
      "can": [
        "say that you have read the agenda",
        "name the chair of a meeting",
        "understand that a vote will be held",
        "say that you support a proposal"
      ]
    },
    "b2c_housing3": {
      "steps": [
        {
          "partnerTr": "Have you read the rental agreement?",
          "prompt": "Say “Yes, the notice period is three months”.",
          "optionsTr": [
            "Yes, the notice period is three months.",
            "Good night.",
            "It is red."
          ],
          "hint": "You are talking about the notice period.",
          "wordTr": "notice period"
        },
        {
          "partnerTr": "What is the housing company going to do?",
          "prompt": "Say “The housing company is doing a pipe renovation”.",
          "optionsTr": [
            "Goodbye.",
            "The housing company is doing a pipe renovation.",
            "I would like a coffee."
          ],
          "hint": "You are talking about the pipe renovation.",
          "wordTr": "pipe renovation"
        },
        {
          "partnerTr": "What did the managing agent say about the charge?",
          "prompt": "Put the words in order. Say “He said that the maintenance charge is rising”.",
          "blocksTr": [
            "1. He",
            "2. said",
            "3. that",
            "4. the charge",
            "5. rises"
          ],
          "pattern": "Pattern: he + said + that + the charge + rises. After “että” (that) a new sentence begins: vastike nousee.",
          "wordTr": "maintenance charge (company)"
        },
        {
          "partnerTr": "Do you still need documents?",
          "prompt": "Say out loud: “I need the managing agent’s certificate”.",
          "targetTr": "I need the managing agent’s certificate.",
          "wordTr": "managing agent’s certificate"
        }
      ],
      "can": [
        "talk about the notice period",
        "mention a pipe renovation",
        "talk about the maintenance charge",
        "ask for a managing agent’s certificate"
      ]
    },
    "b2c_finance": {
      "steps": [
        {
          "partnerTr": "How can I help?",
          "prompt": "Say “I would like to apply for a mortgage”.",
          "optionsTr": [
            "I would like to apply for a mortgage.",
            "Good night.",
            "Where is the station?"
          ],
          "hint": "You want a mortgage.",
          "wordTr": "mortgage"
        },
        {
          "partnerTr": "Is a guarantee needed for the loan?",
          "prompt": "Say “Yes, the bank requires a guarantee”.",
          "optionsTr": [
            "It is cold today.",
            "Yes, the bank requires a guarantee.",
            "Goodbye."
          ],
          "hint": "You are saying that the bank needs a guarantee.",
          "wordTr": "guarantee"
        },
        {
          "partnerTr": "Do you have payment defaults?",
          "prompt": "Put the words in order. Say “I have no payment defaults”.",
          "blocksTr": [
            "1. I",
            "2. not",
            "3. have",
            "4. payment defaults"
          ],
          "pattern": "Pattern: I + not + have + payment defaults. In a negative sentence the thing takes the “some” form: maksuhäiriötä.",
          "wordTr": "payment default entry"
        },
        {
          "partnerTr": "Do you have any more questions?",
          "prompt": "Say out loud: “When will I get my tax refund?”.",
          "targetTr": "When will I get my tax refund?",
          "wordTr": "tax refund"
        }
      ],
      "can": [
        "apply for a mortgage",
        "say that the bank requires a guarantee",
        "say that you have no payment defaults",
        "ask about a tax refund"
      ]
    }
  },
};
