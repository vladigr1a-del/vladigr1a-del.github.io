export const a2 = {
  path: { a2_shop: 'Au magasin', a2_weather: 'Le temps et les saisons', a2_move: 'Se déplacer', a2_time: 'L’heure et la journée', a2_clothes: 'Couleurs et vêtements', a2_health: 'Chez le médecin' },
  words: {
    a2_shop: ['magasin', 'pain', 'fromage', 'pomme', 'prix', 'bon marché', 'cher', 'j’ai besoin de', 'je cherche', 'caisse', 'sac', 'promotion', 'grand', 'petit'],
    a2_weather: ['temps (météo)', 'soleil', 'pluie', 'neige', 'vent', 'froid', 'tiède', 'chaud', 'nuageux', 'printemps', 'été', 'automne', 'hiver', 'degré'],
    a2_move: ['bus', 'train', 'arrêt', 'gare', 'billet', 'à droite', 'à gauche', 'tout droit', 'rue', 'carte', 'où', 'près', 'loin', 'marcher'],
    a2_time: ['heure', 'matin', 'journée', 'soir', 'nuit', 'aujourd’hui', 'demain', 'hier', 'je me réveille', 'je mange', 'je dors', 'au travail', 'demi', 'minute'],
    a2_clothes: ['rouge', 'bleu', 'vert', 'jaune', 'noir', 'blanc', 'manteau', 'pantalon', 'chemise', 'chaussures', 'chapeau', 'moufles', 'chaussettes', 'robe'],
    a2_health: ['médecin', 'pharmacie', 'médicament', 'fièvre', 'grippe', 'mal de tête', 'ventre', 'main', 'jambe', 'tête', 'douloureux', 'en bonne santé', 'rendez-vous', 'aide'],
  },
  missions: {
    a2_shop: {
      steps: [
        { partnerTr: 'Bonjour ! Puis-je vous aider ?', prompt: 'Dites que vous cherchez du lait.', optionsTr: ['Je cherche du lait.', 'Je suis un café.', 'Bonne nuit.'], hint: 'Dites au vendeur ce que vous cherchez.', wordTr: 'je cherche' },
        { partnerTr: 'Avez-vous besoin d’un sac ?', prompt: 'Dites « oui, s’il vous plaît ».', optionsTr: ['Pardon.', 'Oui, s’il vous plaît.', 'Bonne nuit.'], hint: 'On cherche la réponse « oui, s’il vous plaît ».', wordTr: 'sac' },
        { partnerTr: 'De quoi avez-vous besoin ?', prompt: 'Mettez les mots dans l’ordre. Dites « J’ai besoin de pain et de fromage ».', blocksTr: ['1. J’ai besoin de', '2. pain', '3. et', '4. fromage'], pattern: 'Modèle : j’ai besoin de + quoi. Après « tarvitsen », la chose reçoit une terminaison : leipä (pain) devient leipää, juusto devient juustoa. C’est le partitif : « un peu de ».', wordTr: 'j’ai besoin de' },
        { partnerTr: 'Voici une pomme.', prompt: 'Demandez combien cela coûte.', targetTr: 'Combien ça coûte ?', wordTr: 'prix' },
      ],
      can: ['dire ce que vous cherchez dans un magasin', 'dire ce dont vous avez besoin', 'demander combien coûte quelque chose'],
    },
    a2_move: {
      steps: [
        { partnerTr: 'Excusez-moi, où est la gare ?', prompt: 'Indiquez le chemin : tout droit, puis à droite.', optionsTr: ['Tout droit, puis à droite.', 'Je voudrais un café.', 'Bonne nuit.'], hint: 'Vous indiquez le chemin.', wordTr: 'tout droit' },
        { partnerTr: 'La gare est-elle loin ?', prompt: 'Dites qu’elle est près.', optionsTr: ['Bonjour.', 'Non, elle est près.', 'Ça coûte cinq euros.'], hint: 'On veut dire que la gare n’est pas loin.', wordTr: 'près' },
        { partnerTr: 'Comment aller à l’arrêt de bus ?', prompt: 'Mettez les mots dans l’ordre. Dites « Tout droit, puis à droite ».', blocksTr: ['1. Tout droit', '2. et', '3. puis', '4. à droite'], pattern: 'Modèle : direction + et puis + direction. La terminaison « -lle » signifie « vers / à » : oikea (droite) devient oikealle.', wordTr: 'à droite' },
        { partnerTr: 'Voulez-vous un billet ?', prompt: 'Dites à voix haute : « Un billet, s’il vous plaît ».', targetTr: 'Un billet, s’il vous plaît.', wordTr: 'billet' },
      ],
      can: ['indiquer un chemin simple', 'dire que quelque chose est près ou loin', 'demander un billet'],
    },
    a2_time: {
      steps: [
        { partnerTr: 'Quelle heure est-il ?', prompt: 'Dites qu’il est huit heures.', optionsTr: ['Il est huit heures.', 'J’habite en Finlande.', 'Merci beaucoup.'], hint: 'On vous demande l’heure.', wordTr: 'heure' },
        { partnerTr: 'À quelle heure vous réveillez-vous ?', prompt: 'Dites que vous vous réveillez à six heures du matin.', optionsTr: ['Il fait froid aujourd’hui.', 'Je me réveille à six heures du matin.', 'Au revoir.'], hint: 'On vous interroge sur votre matinée.', wordTr: 'je me réveille' },
        { partnerTr: 'Que faites-vous demain ?', prompt: 'Mettez les mots dans l’ordre. Dites « Demain, je suis au travail ».', blocksTr: ['1. Demain', '2. je suis', '3. au travail'], pattern: 'Modèle : quand + je suis + où. En finnois, le verbe reste en deuxième position, même quand le mot de temps vient en premier.', wordTr: 'au travail' },
        { partnerTr: 'Quand vous couchez-vous ?', prompt: 'Dites à voix haute : « Je me couche le soir ».', targetTr: 'Je me couche le soir.', wordTr: 'soir' },
      ],
      can: ['dire quelle heure il est', 'dire à quelle heure vous vous réveillez', 'dire ce que vous faites demain'],
    },
    a2_health: {
      steps: [
        { partnerTr: 'Bonjour ! Qu’est-ce qui ne va pas ?', prompt: 'Dites que vous avez de la fièvre.', optionsTr: ['J’ai de la fièvre.', 'Je voudrais un café.', 'Enchanté.'], hint: 'Le médecin demande quel est le problème.', wordTr: 'fièvre' },
        { partnerTr: 'Avez-vous mal à la tête ?', prompt: 'Dites « oui, j’ai mal à la tête ».', optionsTr: ['Merci beaucoup.', 'Oui, j’ai mal à la tête.', 'Bonne nuit.'], hint: 'On cherche la réponse « oui ».', wordTr: 'mal de tête' },
        { partnerTr: 'Où avez-vous mal ?', prompt: 'Mettez les mots dans l’ordre. Dites « J’ai mal au ventre ».', blocksTr: ['1. Mon ventre', '2. est', '3. douloureux'], pattern: 'Modèle : mon + partie du corps + est douloureux. La terminaison « -ni » signifie « mon / ma » : vatsa (ventre) devient vatsani.', wordTr: 'ventre' },
        { partnerTr: 'Avez-vous besoin d’un rendez-vous chez le médecin ?', prompt: 'Dites à voix haute : « Je voudrais un rendez-vous chez le médecin ».', targetTr: 'Je voudrais un rendez-vous chez le médecin.', wordTr: 'rendez-vous' },
      ],
      can: ['dire que vous avez de la fièvre ou mal à la tête', 'dire où vous avez mal', 'demander un rendez-vous chez le médecin'],
    },
  },
};
