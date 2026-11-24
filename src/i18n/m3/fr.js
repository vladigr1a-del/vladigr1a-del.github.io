export const m3 = {
  missions: {
    "a2c_doctor": {
      "steps": [
        {
          "partnerTr": "Qu’est-ce qui vous gêne ?",
          "prompt": "Dites « J’ai mal à la gorge ».",
          "optionsTr": [
            "J’ai mal à la gorge.",
            "Je voudrais un café.",
            "Bonne nuit."
          ],
          "hint": "Vous décrivez comment vous vous sentez.",
          "wordTr": "mal de gorge"
        },
        {
          "partnerTr": "Avez-vous des allergies ?",
          "prompt": "Dites « Oui, j’ai une allergie ».",
          "optionsTr": [
            "Ça coûte cinq euros.",
            "Oui, j’ai une allergie.",
            "Au revoir."
          ],
          "hint": "On vous interroge sur les allergies.",
          "wordTr": "allergie"
        },
        {
          "partnerTr": "Avez-vous besoin d’un arrêt maladie ?",
          "prompt": "Mettez les mots dans l’ordre. Dites « J’ai besoin d’un arrêt maladie de trois jours ».",
          "blocksTr": [
            "1. J’ai besoin",
            "2. d’un arrêt maladie",
            "3. de trois",
            "4. jours"
          ],
          "pattern": "Modèle : j’ai besoin + arrêt maladie + de trois jours. La terminaison -ksi indique une durée : kolme päivää devient kolmeksi päiväksi.",
          "wordTr": "arrêt maladie"
        },
        {
          "partnerTr": "Nous allons maintenant mesurer votre tension.",
          "prompt": "Dites à voix haute : « Ma tension est-elle normale ? ».",
          "targetTr": "Ma tension est-elle normale ?",
          "wordTr": "tension artérielle"
        }
      ],
      "can": [
        "décrire comment vous vous sentez",
        "dire que vous avez une allergie",
        "demander un arrêt maladie pour quelques jours",
        "poser une question sur votre tension"
      ]
    },
    "a2c_hotel": {
      "steps": [
        {
          "partnerTr": "Bonsoir ! Comment puis-je vous aider ?",
          "prompt": "Dites « J’ai une réservation ».",
          "optionsTr": [
            "J’ai une réservation.",
            "Au revoir.",
            "Ça coûte trois euros."
          ],
          "hint": "Vous avez déjà réservé une chambre.",
          "wordTr": "réservation"
        },
        {
          "partnerTr": "Combien de nuits allez-vous rester ?",
          "prompt": "Dites « Nous allons rester deux nuits ».",
          "optionsTr": [
            "Bonne nuit.",
            "Nous allons rester deux nuits.",
            "Je voudrais un café."
          ],
          "hint": "Vous dites combien de temps vous resterez.",
          "wordTr": "passer la nuit"
        },
        {
          "partnerTr": "Où est la piscine ?",
          "prompt": "Mettez les mots dans l’ordre. Dites « La piscine est en bas ».",
          "blocksTr": [
            "1. La piscine",
            "2. est",
            "3. en bas"
          ],
          "pattern": "Modèle : lieu + est + où. La terminaison -ssa signifie « dans / à » : alakerta (le rez-de-chaussée) devient alakerrassa.",
          "wordTr": "piscine"
        },
        {
          "partnerTr": "Avez-vous besoin d’autre chose ?",
          "prompt": "Dites à voix haute : « Puis-je avoir une clé de rechange ? ».",
          "targetTr": "Puis-je avoir une clé de rechange ?",
          "wordTr": "clé de rechange"
        }
      ],
      "can": [
        "dire que vous avez une réservation",
        "dire combien de nuits vous resterez",
        "demander où est la piscine",
        "demander une clé de rechange"
      ]
    },
    "a2c_directions": {
      "steps": [
        {
          "partnerTr": "Excusez-moi, où est la pharmacie la plus proche ?",
          "prompt": "Dites « C’est au carrefour, là-bas ».",
          "optionsTr": [
            "C’est au carrefour, là-bas.",
            "Je voudrais un café.",
            "Bonne nuit."
          ],
          "hint": "Vous indiquez où se trouve l’endroit.",
          "wordTr": "au carrefour"
        },
        {
          "partnerTr": "Est-ce loin ?",
          "prompt": "Dites « Non, c’est à distance de marche ».",
          "optionsTr": [
            "Bonjour.",
            "Non, c’est à distance de marche.",
            "Ça coûte trois euros."
          ],
          "hint": "Vous dites que c’est proche.",
          "wordTr": "à distance de marche"
        },
        {
          "partnerTr": "Par où dois-je aller ?",
          "prompt": "Mettez les mots dans l’ordre. Dites « Tournez à droite et continuez tout droit ».",
          "blocksTr": [
            "1. Tournez",
            "2. à droite",
            "3. et",
            "4. continuez",
            "5. tout droit"
          ],
          "pattern": "Modèle : tournez + à droite + et + continuez + tout droit. Ce sont des ordres : käänny (tournez !), jatka (continuez !).",
          "wordTr": "tourner"
        },
        {
          "partnerTr": "C’est en face de la bibliothèque.",
          "prompt": "Dites à voix haute : « Est-ce au coin de la rue ? ».",
          "targetTr": "Est-ce au coin de la rue ?",
          "wordTr": "coin"
        }
      ],
      "can": [
        "demander où est l’endroit le plus proche",
        "comprendre « à distance de marche »",
        "dire à quelqu’un de tourner à droite et de continuer",
        "demander si quelque chose est au coin de la rue"
      ]
    },
    "b1c_service": {
      "steps": [
        {
          "partnerTr": "Bonjour. Comment puis-je vous aider ?",
          "prompt": "Dites « Je voudrais prendre un rendez-vous ».",
          "optionsTr": [
            "Je voudrais prendre un rendez-vous.",
            "Au revoir.",
            "Ça coûte trois euros."
          ],
          "hint": "Vous voulez prendre un rendez-vous.",
          "wordTr": "prise de rendez-vous"
        },
        {
          "partnerTr": "Avez-vous un numéro de file d’attente ?",
          "prompt": "Dites « Oui, mon numéro est le vingt-trois ».",
          "optionsTr": [
            "Bonne nuit.",
            "Oui, mon numéro est le vingt-trois.",
            "Il fait froid aujourd’hui."
          ],
          "hint": "Vous donnez votre numéro de file d’attente.",
          "wordTr": "numéro de file d’attente"
        },
        {
          "partnerTr": "Que voulez-vous faire ?",
          "prompt": "Mettez les mots dans l’ordre. Dites « Je veux retirer le colis au point de retrait ».",
          "blocksTr": [
            "1. Je veux",
            "2. retirer",
            "3. le colis",
            "4. au point de retrait"
          ],
          "pattern": "Modèle : je veux + retirer + le colis + au point de retrait. La terminaison -sta signifie « de » : noutopiste devient noutopisteestä.",
          "wordTr": "point de retrait"
        },
        {
          "partnerTr": "Il nous manque encore la pièce jointe.",
          "prompt": "Dites à voix haute : « J’enverrai la pièce jointe par e-mail ».",
          "targetTr": "J’enverrai la pièce jointe par e-mail.",
          "wordTr": "pièce jointe"
        }
      ],
      "can": [
        "demander un rendez-vous",
        "donner votre numéro de file d’attente",
        "dire que vous voulez retirer un colis",
        "promettre d’envoyer une pièce jointe"
      ]
    },
    "b1c_work2": {
      "steps": [
        {
          "partnerTr": "Pourquoi postulez-vous à ce poste ?",
          "prompt": "Dites « Je postule parce que je cherche un emploi à durée indéterminée ».",
          "optionsTr": [
            "Je postule parce que je cherche un emploi à durée indéterminée.",
            "Je voudrais un café.",
            "Bonne nuit."
          ],
          "hint": "Vous expliquez pourquoi vous postulez.",
          "wordTr": "à durée indéterminée"
        },
        {
          "partnerTr": "Voulez-vous travailler à temps plein ou à temps partiel ?",
          "prompt": "Dites « Un travail à temps partiel me conviendrait mieux ».",
          "optionsTr": [
            "Au revoir.",
            "Un travail à temps partiel me conviendrait mieux.",
            "Il fait froid aujourd’hui."
          ],
          "hint": "Vous choisissez entre temps plein et temps partiel.",
          "wordTr": "à temps partiel"
        },
        {
          "partnerTr": "Avez-vous un certificat de travail ?",
          "prompt": "Mettez les mots dans l’ordre. Dites « J’ai un certificat de travail de mon employeur précédent ».",
          "blocksTr": [
            "1. J’",
            "2. ai",
            "3. un certificat de travail",
            "4. de mon précédent",
            "5. employeur"
          ],
          "pattern": "Modèle : j’ai + un certificat de travail + de mon employeur précédent. La terminaison -lta signifie « de » : työnantaja devient työnantajalta.",
          "wordTr": "certificat de travail"
        },
        {
          "partnerTr": "Parlons aussi des horaires de travail.",
          "prompt": "Dites à voix haute : « Quelles sont les horaires de travail hebdomadaires ? ».",
          "targetTr": "Quelles sont les horaires de travail hebdomadaires ?",
          "wordTr": "horaires de travail"
        }
      ],
      "can": [
        "dire pourquoi vous postulez à un emploi",
        "parler du travail à temps partiel",
        "dire que vous avez un certificat de travail",
        "poser une question sur les horaires de travail"
      ]
    },
    "b1c_shop3": {
      "steps": [
        {
          "partnerTr": "Comment puis-je vous aider ?",
          "prompt": "Dites « Je voudrais faire une réclamation au sujet de ce produit ».",
          "optionsTr": [
            "Je voudrais faire une réclamation au sujet de ce produit.",
            "Bonne nuit.",
            "Où est la gare ?"
          ],
          "hint": "Vous voulez vous plaindre d’un produit.",
          "wordTr": "se plaindre (d’un produit)"
        },
        {
          "partnerTr": "Le produit est-il encore sous garantie ?",
          "prompt": "Dites « Oui, la garantie se termine le mois prochain ».",
          "optionsTr": [
            "Bonjour.",
            "Oui, la garantie se termine le mois prochain.",
            "Il est rouge."
          ],
          "hint": "Vous dites que la garantie est encore valable.",
          "wordTr": "période de garantie"
        },
        {
          "partnerTr": "Pourquoi voulez-vous retourner le produit ?",
          "prompt": "Mettez les mots dans l’ordre. Dites « Il n’y avait pas de mode d’emploi ».",
          "blocksTr": [
            "1. Il",
            "2. n’y",
            "3. avait",
            "4. mode d’emploi"
          ],
          "pattern": "Modèle : dedans + pas + il y avait + mode d’emploi. Dans une phrase négative, la chose prend la forme « du » : käyttöohjetta.",
          "wordTr": "mode d’emploi"
        },
        {
          "partnerTr": "Vous disposez d’un droit de retour de quatorze jours.",
          "prompt": "Dites à voix haute : « Les frais de livraison seront-ils remboursés ? ».",
          "targetTr": "Les frais de livraison seront-ils remboursés ?",
          "wordTr": "frais de livraison"
        }
      ],
      "can": [
        "dire que vous voulez faire une réclamation",
        "poser une question sur la période de garantie",
        "expliquer que le mode d’emploi manquait",
        "demander si les frais de livraison sont remboursés"
      ]
    },
    "b2c_meeting": {
      "steps": [
        {
          "partnerTr": "Avez-vous reçu la convocation à la réunion ?",
          "prompt": "Dites « Oui, j’ai lu l’ordre du jour ».",
          "optionsTr": [
            "Oui, j’ai lu l’ordre du jour.",
            "Bonne nuit.",
            "Ça coûte trois euros."
          ],
          "hint": "Vous dites que vous l’avez lu.",
          "wordTr": "ordre du jour"
        },
        {
          "partnerTr": "Qui préside la réunion ?",
          "prompt": "Dites « Virtanen préside ».",
          "optionsTr": [
            "Au revoir.",
            "Virtanen préside.",
            "Il fait froid aujourd’hui."
          ],
          "hint": "Vous nommez le président de séance.",
          "wordTr": "président de séance"
        },
        {
          "partnerTr": "Que se passe-t-il ensuite ?",
          "prompt": "Mettez les mots dans l’ordre. Dites « La proposition est mise aux voix avant la fin de la réunion ».",
          "blocksTr": [
            "1. Sur la proposition",
            "2. on vote",
            "3. avant",
            "4. de la réunion",
            "5. la fin"
          ],
          "pattern": "Modèle : sur la proposition + on vote + avant + de la réunion + la fin. « äänestetään » = « on vote » (personne n’est nommé).",
          "wordTr": "vote"
        },
        {
          "partnerTr": "Quelqu’un a-t-il encore quelque chose à dire ?",
          "prompt": "Dites à voix haute : « Je voudrais appuyer la proposition ».",
          "targetTr": "Je voudrais appuyer la proposition.",
          "wordTr": "soutien (appui)"
        }
      ],
      "can": [
        "dire que vous avez lu l’ordre du jour",
        "nommer le président d’une réunion",
        "comprendre qu’un vote aura lieu",
        "dire que vous soutenez une proposition"
      ]
    },
    "b2c_housing3": {
      "steps": [
        {
          "partnerTr": "Avez-vous lu le contrat de location ?",
          "prompt": "Dites « Oui, le préavis est de trois mois ».",
          "optionsTr": [
            "Oui, le préavis est de trois mois.",
            "Bonne nuit.",
            "Il est rouge."
          ],
          "hint": "Vous parlez du préavis.",
          "wordTr": "préavis"
        },
        {
          "partnerTr": "Que va faire la copropriété ?",
          "prompt": "Dites « La copropriété fait rénover les canalisations ».",
          "optionsTr": [
            "Au revoir.",
            "La copropriété fait rénover les canalisations.",
            "Je voudrais un café."
          ],
          "hint": "Vous parlez de la rénovation des canalisations.",
          "wordTr": "rénovation des canalisations"
        },
        {
          "partnerTr": "Qu’a dit le syndic au sujet des charges ?",
          "prompt": "Mettez les mots dans l’ordre. Dites « Il a dit que les charges d’entretien augmentent ».",
          "blocksTr": [
            "1. Il",
            "2. a dit",
            "3. que",
            "4. les charges",
            "5. augmentent"
          ],
          "pattern": "Modèle : il + a dit + que + les charges + augmentent. Après « että » (que), une nouvelle phrase commence : vastike nousee.",
          "wordTr": "charges de copropriété"
        },
        {
          "partnerTr": "Avez-vous encore besoin de documents ?",
          "prompt": "Dites à voix haute : « J’ai besoin de l’attestation du syndic ».",
          "targetTr": "J’ai besoin de l’attestation du syndic.",
          "wordTr": "attestation du syndic"
        }
      ],
      "can": [
        "parler du préavis",
        "mentionner une rénovation des canalisations",
        "parler des charges d’entretien",
        "demander une attestation du syndic"
      ]
    },
    "b2c_finance": {
      "steps": [
        {
          "partnerTr": "Comment puis-je vous aider ?",
          "prompt": "Dites « Je voudrais demander un prêt immobilier ».",
          "optionsTr": [
            "Je voudrais demander un prêt immobilier.",
            "Bonne nuit.",
            "Où est la gare ?"
          ],
          "hint": "Vous voulez un prêt immobilier.",
          "wordTr": "prêt immobilier"
        },
        {
          "partnerTr": "Faut-il une garantie pour le prêt ?",
          "prompt": "Dites « Oui, la banque exige une garantie ».",
          "optionsTr": [
            "Il fait froid aujourd’hui.",
            "Oui, la banque exige une garantie.",
            "Au revoir."
          ],
          "hint": "Vous dites que la banque a besoin d’une garantie.",
          "wordTr": "garantie"
        },
        {
          "partnerTr": "Avez-vous des incidents de paiement ?",
          "prompt": "Mettez les mots dans l’ordre. Dites « Je n’ai aucun incident de paiement ».",
          "blocksTr": [
            "1. Je",
            "2. n’ai",
            "3. aucun",
            "4. incident de paiement"
          ],
          "pattern": "Modèle : je + ne… pas + j’ai + incident de paiement. Dans une phrase négative, la chose prend la forme « du » : maksuhäiriötä.",
          "wordTr": "inscription pour défaut de paiement"
        },
        {
          "partnerTr": "Avez-vous d’autres questions ?",
          "prompt": "Dites à voix haute : « Quand recevrai-je mon remboursement d’impôts ? ».",
          "targetTr": "Quand recevrai-je mon remboursement d’impôts ?",
          "wordTr": "remboursement d’impôts"
        }
      ],
      "can": [
        "demander un prêt immobilier",
        "dire que la banque exige une garantie",
        "dire que vous n’avez aucun incident de paiement",
        "poser une question sur un remboursement d’impôts"
      ]
    }
  }
};
