export const a2 = {
  path: { a2_shop: 'Na loja', a2_weather: 'O tempo e as estações', a2_move: 'Como chegar', a2_time: 'A hora e o dia', a2_clothes: 'Cores e roupa', a2_health: 'No médico' },
  words: {
    a2_shop: ['loja', 'pão', 'queijo', 'maçã', 'preço', 'barato', 'caro', 'preciso', 'procuro', 'caixa', 'saco', 'promoção', 'grande', 'pequeno'],
    a2_weather: ['tempo (clima)', 'sol', 'chuva', 'neve', 'vento', 'frio', 'morno', 'calor', 'nublado', 'primavera', 'verão', 'outono', 'inverno', 'grau'],
    a2_move: ['autocarro', 'comboio', 'paragem', 'estação', 'bilhete', 'à direita', 'à esquerda', 'sempre em frente', 'rua', 'mapa', 'onde', 'perto', 'longe', 'andar a pé'],
    a2_time: ['relógio / hora', 'manhã', 'dia', 'fim de tarde', 'noite', 'hoje', 'amanhã', 'ontem', 'acordo', 'como', 'durmo', 'no trabalho', 'meia', 'minuto'],
    a2_clothes: ['vermelho', 'azul', 'verde', 'amarelo', 'preto', 'branco', 'casaco', 'calças', 'camisa', 'sapatos', 'chapéu', 'luvas', 'meias', 'vestido'],
    a2_health: ['médico', 'farmácia', 'medicamento', 'febre', 'gripe', 'dor de cabeça', 'estômago', 'mão', 'perna', 'cabeça', 'dorido', 'saudável', 'consulta', 'ajuda'],
  },
  missions: {
    a2_shop: {
      steps: [
        { partnerTr: 'Olá! Posso ajudar?', prompt: 'Diga que procura leite.', optionsTr: ['Procuro leite.', 'Eu sou café.', 'Boa noite.'], hint: 'Diga ao empregado o que procura.', wordTr: 'procuro' },
        { partnerTr: 'Precisa de um saco?', prompt: 'Diga «sim, por favor».', optionsTr: ['Desculpe.', 'Sim, por favor.', 'Boa noite.'], hint: 'Procuramos a resposta «sim, por favor».', wordTr: 'saco' },
        { partnerTr: 'De que precisa?', prompt: 'Ordene as palavras. Diga «Preciso de pão e queijo».', blocksTr: ['1. Preciso de', '2. pão', '3. e', '4. queijo'], pattern: 'Padrão: preciso de + o quê. Depois de «tarvitsen» a palavra recebe uma terminação: leipä (pão) passa a leipää, juusto a juustoa. Chama-se partitivo: «um pouco de algo».', wordTr: 'preciso' },
        { partnerTr: 'Aqui tem uma maçã.', prompt: 'Pergunte quanto custa isto.', targetTr: 'Quanto custa isto?', wordTr: 'preço' },
      ],
      can: ['dizer o que procura numa loja', 'dizer de que precisa', 'perguntar quanto custa algo'],
    },
    a2_move: {
      steps: [
        { partnerTr: 'Desculpe, onde fica a estação?', prompt: 'Explique: sempre em frente e depois à direita.', optionsTr: ['Sempre em frente e depois à direita.', 'Gostaria de um café.', 'Boa noite.'], hint: 'Está a indicar o caminho.', wordTr: 'sempre em frente' },
        { partnerTr: 'A estação fica longe?', prompt: 'Diga que fica perto.', optionsTr: ['Bom dia.', 'Não, fica perto.', 'Custa cinco euros.'], hint: 'Queremos dizer que a estação não fica longe.', wordTr: 'perto' },
        { partnerTr: 'Como chego à paragem?', prompt: 'Ordene as palavras. Diga «Sempre em frente e depois à direita».', blocksTr: ['1. Sempre em frente', '2. e', '3. depois', '4. à direita'], pattern: 'Padrão: direção + e depois + direção. A terminação «-lle» significa «para»: oikea (direito) passa a oikealle.', wordTr: 'à direita' },
        { partnerTr: 'Quer um bilhete?', prompt: 'Diga em voz alta: «Um bilhete, por favor».', targetTr: 'Um bilhete, por favor.', wordTr: 'bilhete' },
      ],
      can: ['indicar um caminho simples', 'dizer que algo fica perto ou longe', 'pedir um bilhete'],
    },
    a2_time: {
      steps: [
        { partnerTr: 'Que horas são?', prompt: 'Diga que são oito horas.', optionsTr: ['São oito horas.', 'Moro na Finlândia.', 'Muito obrigado.'], hint: 'Perguntam-lhe as horas.', wordTr: 'relógio / hora' },
        { partnerTr: 'Quando acorda?', prompt: 'Diga que acorda às seis da manhã.', optionsTr: ['Hoje está frio.', 'Acordo às seis da manhã.', 'Adeus.'], hint: 'Perguntam-lhe pela sua manhã.', wordTr: 'acordo' },
        { partnerTr: 'O que faz amanhã?', prompt: 'Ordene as palavras. Diga «Amanhã estou no trabalho».', blocksTr: ['1. Amanhã', '2. estou', '3. no trabalho'], pattern: 'Padrão: quando + estou + onde. Em finlandês o verbo fica em segundo lugar, mesmo quando a palavra de tempo vem primeiro.', wordTr: 'no trabalho' },
        { partnerTr: 'Quando se deita?', prompt: 'Diga em voz alta: «Deito-me ao fim da tarde».', targetTr: 'Deito-me ao fim da tarde.', wordTr: 'fim de tarde' },
      ],
      can: ['dizer que horas são', 'dizer quando acorda', 'dizer o que faz amanhã'],
    },
    a2_health: {
      steps: [
        { partnerTr: 'Olá! O que se passa?', prompt: 'Diga que tem febre.', optionsTr: ['Tenho febre.', 'Gostaria de um café.', 'Muito prazer.'], hint: 'O médico pergunta qual é o problema.', wordTr: 'febre' },
        { partnerTr: 'Dói-lhe a cabeça?', prompt: 'Diga «sim, tenho dor de cabeça».', optionsTr: ['Muito obrigado.', 'Sim, tenho dor de cabeça.', 'Boa noite.'], hint: 'Procuramos a resposta «sim».', wordTr: 'dor de cabeça' },
        { partnerTr: 'O que lhe dói?', prompt: 'Ordene as palavras. Diga «Dói-me o estômago».', blocksTr: ['1. O meu estômago', '2. está', '3. dorido'], pattern: 'Padrão: o meu + parte do corpo + dói. A terminação «-ni» significa «meu»: vatsa (estômago) passa a vatsani.', wordTr: 'estômago' },
        { partnerTr: 'Precisa de uma consulta com o médico?', prompt: 'Diga em voz alta: «Gostaria de uma consulta com o médico».', targetTr: 'Gostaria de uma consulta com o médico.', wordTr: 'consulta' },
      ],
      can: ['dizer que tem febre ou dor de cabeça', 'dizer o que lhe dói', 'pedir uma consulta com o médico'],
    },
  },
};
