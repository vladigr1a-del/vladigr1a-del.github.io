export const a2b = {
  path: { a2_rest: 'Au restaurant', a2_food: 'Nourriture et boissons', a2_home: 'Chercher un appartement', a2_rooms: 'À la maison', a2_city: 'En ville', a2_bank: 'Banque et poste', a2_phone: 'Téléphone et projets', a2_adverbs: 'Quand et à quelle fréquence', a2_work: 'Au travail', a2_jobs: 'Les métiers', a2_school: 'Les études', a2_verbs1: 'Verbes du quotidien 1', a2_verbs2: 'Verbes du quotidien 2', a2_past: 'Hier (le passé)', a2_hobby: 'Les loisirs', a2_adj: 'Les contraires', a2_feel: 'Les sentiments', a2_questions: 'Mots interrogatifs' },
  words: {
    a2_rest: ['menu', 'commander', 'addition', 'réserver', 'dessert', 'plat principal', 'entrée', 'avoir bon goût', 'délicieux', 'plat végétarien', 'allergique', 'encore', 'agréable', 'sans'],
    a2_food: ['nourriture', 'boisson', 'viande', 'poisson', 'poulet', 'pomme de terre', 'riz', 'légume', 'soupe', 'salade', 'jus', 'bière', 'œuf', 'beurre'],
    a2_home: ['appartement', 'louer', 'étage', 'ascenseur', 'balcon', 'électricité', 'chauffage', 'clé', 'adresse', 'déménager', 'rénovation', 'logement', 'deux-pièces', 'studio'],
    a2_rooms: ['maison', 'pièce', 'cuisine', 'chambre', 'salle de bains', 'salon', 'porte', 'fenêtre', 'table', 'chaise', 'lit', 'armoire', 'loyer', 'voisin'],
    a2_city: ['ville', 'banque', 'poste', 'bibliothèque', 'école', 'hôpital', 'restaurant', 'place du marché', 'parc', 'musée', 'église', 'hôtel', 'piscine', 'carrefour'],
    a2_bank: ['compte', 'argent', 'numéro de compte', 'retirer', 'paiement', 'envoyer', 'colis', 'lettre', 'timbre', 'destinataire', 'formulaire', 'signature', 'passeport', 'reçu'],
    a2_phone: ['téléphone', 'message', 'numéro', 'e-mail', 'convenir (d’une heure)', 'se retrouver', 'invitation', 'avoir le temps', 'libre', 'la semaine prochaine', 'tôt', 'tard', 'sympa', 'dommage'],
    a2_adverbs: ['toujours', 'souvent', 'parfois', 'rarement', 'jamais', 'maintenant', 'plus tard', 'bientôt', 'déjà', 'encore', 'puis', 'd’abord', 'la dernière fois', 'tous les jours'],
    a2_work: ['lieu de travail', 'journée de travail', 'pause', 'réunion', 'chef', 'collègue', 'contrat de travail', 'congé', 'service (équipe)', 'heures supplémentaires', 'entretien d’embauche', 'postuler', 'expérience', 'langue'],
    a2_jobs: ['enseignant', 'infirmier', 'cuisinier', 'chauffeur', 'agent d’entretien', 'vendeur', 'ingénieur', 'ouvrier du bâtiment', 'serveur', 'policier', 'pompier', 'étudiant', 'employeur', 'salaire'],
    a2_school: ['cours (série)', 'leçon', 'devoirs', 'contrôle', 'mot', 'phrase', 'grammaire', 'prononciation', 'exercice', 'dictionnaire', 'question', 'réponse', 'erreur', 'apprendre'],
    a2_verbs1: ['faire', 'aller', 'venir', 'acheter', 'vendre', 'donner', 'prendre', 'voir', 'entendre', 'comprendre', 'savoir (un fait)', 'savoir faire', 'attendre', 'aider'],
    a2_verbs2: ['étudier', 'travailler', 'appeler / jouer', 'écrire', 'lire', 'regarder', 'écouter', 'demander', 'répondre', 'ouvrir', 'fermer', 'trouver', 'essayer', 'se souvenir'],
    a2_past: ['j’étais', 'je suis allé (quelque part)', 'je suis allé', 'j’ai mangé', 'j’ai bu', 'j’ai vu', 'j’ai fait', 'j’ai acheté', 'j’ai rencontré', 'j’ai lu', 'j’ai dormi', 'le week-end', 'la semaine dernière', 'amusant'],
    a2_hobby: ['loisir', 'sport', 'football', 'natation', 'ski', 'cyclisme', 'musique', 'film', 'livre', 'danser', 'chanter', 'dessiner', 'sauna', 'excursion'],
    a2_adj: ['bon', 'mauvais', 'nouveau', 'vieux', 'rapide', 'lent', 'facile', 'difficile', 'beau', 'laid', 'propre', 'sale', 'plein', 'vide'],
    a2_feel: ['heureux', 'triste', 'fatigué', 'affamé', 'assoiffé', 'en colère', 'calme', 'occupé', 'j’aime bien', 'j’aime', 'j’ai peur', 'il / elle me manque', 'inquiet', 'fier'],
    a2_questions: ['qui', 'quoi', 'quand', 'pourquoi', 'comment', 'combien', 'à qui', 'lequel (de deux)', 'où (vers)', 'combien de temps', 'à quelle fréquence', 'puis-je', 'ai-je le droit', 'signifier'],
  },
  missions: {
    a2_rest: {
      steps: [
        { partnerTr: 'Bienvenue ! Avez-vous réservé ?', prompt: 'Dites que vous avez réservé une table pour deux.', optionsTr: ['Oui, j’ai réservé une table pour deux.', 'Bonjour.', 'Où est la gare ?'], hint: 'Le serveur vous interroge sur votre réservation.', wordTr: 'réserver' },
        { partnerTr: 'Qu’est-ce que vous désirez commander ?', prompt: 'Commandez une soupe et de l’eau.', optionsTr: ['Quelle heure est-il ?', 'Je voudrais une soupe et de l’eau.', 'J’ai de la fièvre.'], hint: 'Vous commandez à manger.', wordTr: 'commander' },
        { partnerTr: 'Comment trouvez-vous le repas ?', prompt: 'Mettez les mots dans l’ordre. Dites « La soupe est délicieuse ».', blocksTr: ['1. La soupe', '2. est', '3. délicieuse'], pattern: 'Modèle : chose + on (est) + adjectif. Le finnois n’a ni « le » ni « un » : « keitto » signifie « la soupe » ou « une soupe ».', wordTr: 'délicieux' },
        { partnerTr: 'Voulez-vous un dessert ?', prompt: 'Dites à voix haute : « Puis-je avoir l’addition ? »', targetTr: 'Puis-je avoir l’addition ?', wordTr: 'addition' },
      ],
      can: ['dire que vous avez réservé', 'commander à manger et à boire', 'dire que le repas est délicieux', 'demander l’addition'],
    },
    a2_home: {
      steps: [
        { partnerTr: 'Bonjour ! Vous cherchez un appartement ?', prompt: 'Dites que vous cherchez un studio.', optionsTr: ['Oui, je cherche un studio.', 'Merci, j’ai de la fièvre.', 'Aujourd’hui, c’est lundi.'], hint: 'Vous parlez de logement.', wordTr: 'studio' },
        { partnerTr: 'À quel étage habitez-vous ?', prompt: 'Dites que vous habitez au troisième étage.', optionsTr: ['Bonne nuit.', 'J’habite au troisième étage.', 'J’ai une sœur.'], hint: 'On vous interroge sur l’étage.', wordTr: 'étage' },
        { partnerTr: 'Qu’y a-t-il dans l’appartement ?', prompt: 'Mettez les mots dans l’ordre. Dites « Il y a un balcon dans l’appartement ».', blocksTr: ['1. Dans l’appartement', '2. il y a', '3. un balcon'], pattern: 'Modèle : où + on + quoi. « Asunnossa on parveke » = « dans l’appartement il y a un balcon ». Le finnois utilise « on » (est) pour « il y a ».', wordTr: 'balcon' },
        { partnerTr: 'Voici la clé.', prompt: 'Demandez quelle est l’adresse.', targetTr: 'Quelle est l’adresse ?', wordTr: 'adresse' },
      ],
      can: ['dire quel type de logement vous cherchez', 'dire à quel étage vous habitez', 'dire ce qu’il y a dans un appartement', 'demander une adresse'],
    },
    a2_bank: {
      steps: [
        { partnerTr: 'Bonjour ! Que puis-je faire pour vous ?', prompt: 'Dites que vous voudriez envoyer un colis.', optionsTr: ['Je voudrais envoyer un colis.', 'Je suis fatigué.', 'Aujourd’hui, c’est lundi.'], hint: 'Vous êtes à la poste.', wordTr: 'colis' },
        { partnerTr: 'Où va le colis ?', prompt: 'Dites qu’il part à l’étranger.', optionsTr: ['Bonne nuit.', 'Il part à l’étranger.', 'C’est délicieux.'], hint: 'On vous demande la destination.', wordTr: 'envoyer' },
        { partnerTr: 'Je dois voir une pièce d’identité.', prompt: 'Mettez les mots dans l’ordre. Dites « Voici mon passeport ».', blocksTr: ['1. Voici', '2. est', '3. mon passeport'], pattern: 'Modèle : « Tässä on » = « voici ». C’est utile pour tendre quelque chose. La terminaison « -ni » signifie « mon / ma » : passi devient passini.', wordTr: 'passeport' },
        { partnerTr: 'Avez-vous besoin d’un reçu ?', prompt: 'Dites à voix haute : « Oui, je voudrais un reçu ».', targetTr: 'Oui, je voudrais un reçu.', wordTr: 'reçu' },
      ],
      can: ['envoyer un colis', 'dire où il part', 'présenter votre passeport', 'demander un reçu'],
    },
    a2_phone: {
      steps: [
        { partnerTr: 'Salut ! Tu viendrais prendre un café samedi ?', prompt: 'Remerciez pour l’invitation.', optionsTr: ['Merci pour l’invitation, avec plaisir !', 'J’ai de la fièvre.', 'Où est la gare ?'], hint: 'On vous invite.', wordTr: 'invitation' },
        { partnerTr: 'Quand cela vous convient-il ?', prompt: 'Dites « Samedi à deux heures ».', optionsTr: ['Enchanté.', 'Samedi à deux heures.', 'Pardon.'], hint: 'On vous demande une heure.', wordTr: 'convenir (d’une heure)' },
        { partnerTr: 'As-tu le temps de venir ?', prompt: 'Mettez les mots dans l’ordre. Dites « Dommage, je n’ai pas le temps de venir ».', blocksTr: ['1. Dommage', '2. je ne', '3. peux pas', '4. venir'], pattern: 'Modèle : négation = en + verbe. « en » signifie « je ne … pas », « et » signifie « tu ne … pas ». Le verbe perd sa terminaison : ehdin devient en ehdi.', wordTr: 'avoir le temps' },
        { partnerTr: 'Quel est votre numéro ?', prompt: 'Dites à voix haute : « Je vous enverrai un message ».', targetTr: 'Je vous enverrai un message.', wordTr: 'message' },
      ],
      can: ['remercier pour une invitation', 'proposer une heure', 'dire que vous ne pouvez pas venir', 'promettre d’envoyer un message'],
    },
    a2_work: {
      steps: [
        { partnerTr: 'Où travaillez-vous ?', prompt: 'Dites que vous travaillez dans un restaurant.', optionsTr: ['Je travaille dans un restaurant.', 'Il fait froid aujourd’hui.', 'J’ai une sœur.'], hint: 'On vous interroge sur votre lieu de travail.', wordTr: 'lieu de travail' },
        { partnerTr: 'Quand avez-vous votre pause ?', prompt: 'Dites que votre pause est à midi.', optionsTr: ['Bonne nuit.', 'J’ai ma pause à midi.', 'Où est la gare ?'], hint: 'On vous interroge sur votre pause.', wordTr: 'pause' },
        { partnerTr: 'Avez-vous de l’expérience ?', prompt: 'Mettez les mots dans l’ordre. Dites « J’ai de l’expérience professionnelle ».', blocksTr: ['1. J’ai', '2. (il y a)', '3. de l’expérience professionnelle'], pattern: 'Modèle : « Minulla on » = « j’ai » (littéralement « chez moi il y a »). Après « on », une quantité non précisée prend le partitif : kokemus devient kokemusta.', wordTr: 'expérience' },
        { partnerTr: 'Parlez-moi de vous.', prompt: 'Dites à voix haute : « Je voudrais postuler à un emploi ».', targetTr: 'Je voudrais postuler à un emploi.', wordTr: 'postuler' },
      ],
      can: ['dire où vous travaillez', 'dire quand est votre pause', 'dire que vous avez de l’expérience', 'dire que vous voulez postuler à un emploi'],
    },
    a2_school: {
      steps: [
        { partnerTr: 'Quel cours suivez-vous ?', prompt: 'Dites que vous suivez le cours de finnois.', optionsTr: ['Je suis le cours de finnois.', 'J’ai de la fièvre.', 'Bonne nuit.'], hint: 'On vous interroge sur votre cours.', wordTr: 'cours (série)' },
        { partnerTr: 'Avez-vous une question ?', prompt: 'Demandez ce que signifie ce mot.', optionsTr: ['Bonjour.', 'Oui, que signifie ce mot ?', 'Au revoir.'], hint: 'Vous voulez poser une question sur un mot.', wordTr: 'mot' },
        { partnerTr: 'Avez-vous fait vos devoirs ?', prompt: 'Mettez les mots dans l’ordre. Dites « J’ai fait mes devoirs ».', blocksTr: ['1. J’ai', '2. fait', '3. les devoirs'], pattern: 'Modèle : « olen » + participe passé = « j’ai fait ». C’est le parfait : olen tehnyt.', wordTr: 'devoirs' },
        { partnerTr: 'Voulez-vous demander quelque chose ?', prompt: 'Dites à voix haute : « J’ai une question ».', targetTr: 'J’ai une question.', wordTr: 'question' },
      ],
      can: ['dire quel cours vous suivez', 'demander ce que signifie un mot', 'dire que vous avez fait vos devoirs', 'dire que vous avez une question'],
    },
    a2_past: {
      steps: [
        { partnerTr: 'Où étiez-vous hier ?', prompt: 'Dites que vous étiez au travail.', optionsTr: ['J’étais au travail.', 'Bonne nuit.', 'Ça coûte cinq euros.'], hint: 'On vous interroge sur hier.', wordTr: 'j’étais' },
        { partnerTr: 'Qu’avez-vous fait ce week-end ?', prompt: 'Dites que vous avez vu un ami.', optionsTr: ['Je voudrais un café.', 'J’ai vu un ami.', 'Il fait froid aujourd’hui.'], hint: 'On vous interroge sur votre week-end.', wordTr: 'j’ai vu' },
        { partnerTr: 'Qu’avez-vous mangé ?', prompt: 'Mettez les mots dans l’ordre. Dites « J’ai mangé de la soupe et du pain ».', blocksTr: ['1. J’ai mangé', '2. de la soupe', '3. et', '4. du pain'], pattern: 'Modèle : passé + quoi. söin = « j’ai mangé » (syön = « je mange »). La terminaison « -in » marque le passé pour « je ». La soupe et le pain prennent le partitif : keittoa, leipää.', wordTr: 'j’ai mangé' },
        { partnerTr: 'C’était amusant ?', prompt: 'Dites à voix haute : « Oui, je me suis amusé ».', targetTr: 'Oui, je me suis amusé.', wordTr: 'amusant' },
      ],
      can: ['dire où vous étiez hier', 'dire ce que vous avez fait ce week-end', 'dire ce que vous avez mangé', 'dire que vous vous êtes amusé'],
    },
  },
};
