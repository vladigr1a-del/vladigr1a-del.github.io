export const a2b = {
  path: { a2_rest: 'No restaurante', a2_food: 'Comida e bebida', a2_home: 'Procurar casa', a2_rooms: 'Em casa', a2_city: 'Na cidade', a2_bank: 'Banco e correios', a2_phone: 'Telefone e combinações', a2_adverbs: 'Quando e com que frequência', a2_work: 'No trabalho', a2_jobs: 'Profissões', a2_school: 'Estudar', a2_verbs1: 'Verbos do dia a dia 1', a2_verbs2: 'Verbos do dia a dia 2', a2_past: 'Ontem (passado)', a2_hobby: 'Passatempos', a2_adj: 'Opostos', a2_feel: 'Sentimentos', a2_questions: 'Palavras interrogativas' },
  words: {
    a2_rest: ['ementa', 'pedir (no restaurante)', 'conta', 'reservar', 'sobremesa', 'prato principal', 'entrada', 'sabe (a)', 'delicioso', 'prato vegetariano', 'alérgico', 'mais', 'agradável', 'sem'],
    a2_food: ['comida', 'bebida', 'carne', 'peixe', 'frango', 'batata', 'arroz', 'legume', 'sopa', 'salada', 'sumo', 'cerveja', 'ovo', 'manteiga'],
    a2_home: ['habitação', 'arrendar', 'andar', 'elevador', 'varanda', 'eletricidade', 'aquecimento', 'chave', 'morada', 'mudar de casa', 'obras', 'apartamento', 'apartamento T1', 'estúdio'],
    a2_rooms: ['lar', 'quarto (divisão)', 'cozinha', 'quarto de dormir', 'casa de banho', 'sala de estar', 'porta', 'janela', 'mesa', 'cadeira', 'cama', 'armário', 'renda', 'vizinho'],
    a2_city: ['cidade', 'banco', 'estação dos correios', 'biblioteca', 'escola', 'hospital', 'restaurante', 'praça do mercado', 'parque', 'museu', 'igreja', 'hotel', 'piscina coberta', 'cruzamento'],
    a2_bank: ['conta (bancária)', 'dinheiro', 'número da conta', 'levantar dinheiro', 'pagamento', 'enviar', 'encomenda', 'carta', 'selo', 'destinatário', 'formulário', 'assinatura', 'passaporte', 'recibo'],
    a2_phone: ['telefone', 'mensagem', 'número', 'correio eletrónico', 'combinar', 'encontrar-se', 'convite', 'ter tempo', 'livre', 'na próxima semana', 'cedo', 'tarde (hora)', 'simpático', 'pena'],
    a2_adverbs: ['sempre', 'muitas vezes', 'às vezes', 'raramente', 'nunca', 'agora', 'mais tarde', 'em breve', 'já', 'ainda', 'depois', 'primeiro', 'da última vez', 'todos os dias'],
    a2_work: ['local de trabalho', 'dia de trabalho', 'pausa', 'reunião', 'chefe', 'colega', 'contrato de trabalho', 'férias', 'turno', 'horas extra', 'entrevista', 'candidatar-se', 'experiência', 'língua'],
    a2_jobs: ['professor', 'enfermeira', 'cozinheiro', 'motorista', 'empregado de limpeza', 'empregado de loja', 'engenheiro', 'pedreiro', 'empregado de mesa', 'polícia', 'bombeiro', 'estudante', 'empregador', 'salário'],
    a2_school: ['curso', 'aula', 'trabalho de casa', 'teste', 'palavra', 'frase', 'gramática', 'pronúncia', 'exercício', 'dicionário', 'pergunta', 'resposta', 'erro', 'aprender'],
    a2_verbs1: ['fazer', 'ir', 'vir', 'comprar', 'vender', 'dar', 'pegar', 'ver', 'ouvir', 'compreender', 'saber', 'saber fazer', 'esperar', 'ajudar'],
    a2_verbs2: ['estudar', 'trabalhar', 'ligar / tocar', 'escrever', 'ler', 'assistir', 'escutar', 'perguntar', 'responder', 'abrir', 'fechar', 'encontrar', 'experimentar', 'lembrar-se'],
    a2_past: ['estive', 'fui (a um lugar)', 'fui', 'comi', 'bebi', 'vi', 'fiz', 'comprei', 'conheci', 'li', 'dormi', 'no fim de semana', 'na semana passada', 'divertido'],
    a2_hobby: ['passatempo', 'desporto', 'futebol', 'natação', 'esqui', 'ciclismo', 'música', 'filme', 'livro', 'dançar', 'cantar', 'desenhar', 'sauna', 'passeio'],
    a2_adj: ['bom', 'mau', 'novo', 'velho', 'rápido', 'lento', 'fácil', 'difícil', 'bonito', 'feio', 'limpo', 'sujo', 'cheio', 'vazio'],
    a2_feel: ['alegre', 'triste', 'cansado', 'faminto', 'sedento', 'zangado', 'calmo', 'ocupado', 'eu gosto', 'eu amo', 'tenho medo', 'tenho saudades', 'preocupado', 'orgulhoso'],
    a2_questions: ['quem', 'o quê', 'quando', 'porquê', 'como', 'quantos', 'de quem', 'qual (de dois)', 'para onde', 'quanto tempo', 'com que frequência', 'posso', 'é-me permitido', 'significar'],
  },
  missions: {
    a2_rest: {
      steps: [
        { partnerTr: 'Bem-vindo! Tem reserva?', prompt: 'Diga que reservou uma mesa para dois.', optionsTr: ['Sim, reservei uma mesa para dois.', 'Bom dia.', 'Onde fica a estação?'], hint: 'O empregado pergunta pela reserva.', wordTr: 'reservar' },
        { partnerTr: 'O que vão pedir?', prompt: 'Peça sopa e água.', optionsTr: ['Que horas são?', 'Gostaria de sopa e água.', 'Tenho febre.'], hint: 'Está a pedir comida.', wordTr: 'pedir (no restaurante)' },
        { partnerTr: 'Que tal está a comida?', prompt: 'Ordene as palavras. Diga «A sopa está deliciosa».', blocksTr: ['1. A sopa', '2. está', '3. deliciosa'], pattern: 'Padrão: coisa + on (é/está) + adjetivo. O finlandês não tem artigos: «keitto» significa «a sopa» ou «uma sopa».', wordTr: 'delicioso' },
        { partnerTr: 'Desejam sobremesa?', prompt: 'Diga em voz alta: «Pode trazer a conta?»', targetTr: 'Pode trazer a conta?', wordTr: 'conta' },
      ],
      can: ['dizer que tem reserva', 'pedir comida e bebida', 'dizer que a comida está deliciosa', 'pedir a conta'],
    },
    a2_home: {
      steps: [
        { partnerTr: 'Olá! Procura casa?', prompt: 'Diga que procura um estúdio.', optionsTr: ['Sim, procuro um estúdio.', 'Obrigado, tenho febre.', 'Hoje é segunda-feira.'], hint: 'Estão a falar de habitação.', wordTr: 'estúdio' },
        { partnerTr: 'Em que andar mora?', prompt: 'Diga que mora no terceiro andar.', optionsTr: ['Boa noite.', 'Moro no terceiro andar.', 'Tenho uma irmã.'], hint: 'Perguntam pelo andar.', wordTr: 'andar' },
        { partnerTr: 'O que há no apartamento?', prompt: 'Ordene as palavras. Diga «No apartamento há uma varanda».', blocksTr: ['1. No apartamento', '2. há', '3. uma varanda'], pattern: 'Padrão: onde + on + o quê. «Asunnossa on parveke» = «no apartamento há uma varanda». O finlandês usa «on» (é) para dizer «há».', wordTr: 'varanda' },
        { partnerTr: 'Aqui tem a chave.', prompt: 'Pergunte qual é a morada.', targetTr: 'Qual é a morada?', wordTr: 'morada' },
      ],
      can: ['dizer que habitação procura', 'dizer em que andar mora', 'dizer o que há numa casa', 'perguntar uma morada'],
    },
    a2_bank: {
      steps: [
        { partnerTr: 'Olá! Como posso ajudar?', prompt: 'Diga que gostaria de enviar uma encomenda.', optionsTr: ['Gostaria de enviar uma encomenda.', 'Estou cansado.', 'Hoje é segunda-feira.'], hint: 'Está nos correios.', wordTr: 'encomenda' },
        { partnerTr: 'Para onde vai a encomenda?', prompt: 'Diga que vai para o estrangeiro.', optionsTr: ['Boa noite.', 'Vai para o estrangeiro.', 'É delicioso.'], hint: 'Perguntam pelo destino.', wordTr: 'enviar' },
        { partnerTr: 'Preciso de ver um documento de identificação.', prompt: 'Ordene as palavras. Diga «Aqui está o meu passaporte».', blocksTr: ['1. Aqui', '2. está', '3. o meu passaporte'], pattern: 'Padrão: «Tässä on» = «aqui está». Serve para entregar algo. A terminação «-ni» significa «meu»: passi passa a passini.', wordTr: 'passaporte' },
        { partnerTr: 'Precisa de recibo?', prompt: 'Diga em voz alta: «Sim, quero um recibo».', targetTr: 'Sim, quero um recibo.', wordTr: 'recibo' },
      ],
      can: ['enviar uma encomenda', 'dizer para onde vai', 'entregar o passaporte', 'pedir um recibo'],
    },
    a2_phone: {
      steps: [
        { partnerTr: 'Olá! Vens tomar café no sábado?', prompt: 'Agradeça o convite.', optionsTr: ['Obrigado pelo convite, com todo o gosto!', 'Tenho febre.', 'Onde fica a estação?'], hint: 'Está a ser convidado.', wordTr: 'convite' },
        { partnerTr: 'Quando te dá jeito?', prompt: 'Diga «No sábado às duas».', optionsTr: ['Muito prazer.', 'No sábado às duas.', 'Desculpe.'], hint: 'Perguntam por uma hora.', wordTr: 'combinar' },
        { partnerTr: 'Consegues vir?', prompt: 'Ordene as palavras. Diga «Que pena, não tenho tempo para ir».', blocksTr: ['1. Que pena', '2. não', '3. tenho tempo', '4. para ir'], pattern: 'Padrão: negação = en + verbo. «en» significa «eu não», «et» significa «tu não». O verbo perde a terminação: ehdin passa a en ehdi.', wordTr: 'ter tempo' },
        { partnerTr: 'Qual é o teu número?', prompt: 'Diga em voz alta: «Vou enviar-te uma mensagem».', targetTr: 'Vou enviar-te uma mensagem.', wordTr: 'mensagem' },
      ],
      can: ['agradecer um convite', 'propor uma hora', 'dizer que não pode ir', 'prometer enviar uma mensagem'],
    },
    a2_work: {
      steps: [
        { partnerTr: 'Onde trabalhas?', prompt: 'Diga que trabalha num restaurante.', optionsTr: ['Trabalho num restaurante.', 'Hoje está frio.', 'Tenho uma irmã.'], hint: 'Perguntam pelo seu local de trabalho.', wordTr: 'local de trabalho' },
        { partnerTr: 'Quando tens a pausa?', prompt: 'Diga que a pausa é às doze.', optionsTr: ['Boa noite.', 'Tenho a pausa às doze horas.', 'Onde fica a estação?'], hint: 'Perguntam pela pausa.', wordTr: 'pausa' },
        { partnerTr: 'Tens experiência?', prompt: 'Ordene as palavras. Diga «Tenho experiência de trabalho».', blocksTr: ['1. Tenho', '2. (há)', '3. experiência de trabalho'], pattern: 'Padrão: «Minulla on» = «tenho» (literalmente «em mim há»). Depois de «on», uma quantidade indefinida fica no partitivo: kokemus passa a kokemusta.', wordTr: 'experiência' },
        { partnerTr: 'Fala-me de ti.', prompt: 'Diga em voz alta: «Gostaria de me candidatar a um emprego».', targetTr: 'Gostaria de me candidatar a um emprego.', wordTr: 'candidatar-se' },
      ],
      can: ['dizer onde trabalha', 'dizer quando é a pausa', 'dizer que tem experiência', 'dizer que quer candidatar-se a um emprego'],
    },
    a2_school: {
      steps: [
        { partnerTr: 'Em que curso estás?', prompt: 'Diga que está no curso de finlandês.', optionsTr: ['Estou no curso de finlandês.', 'Tenho febre.', 'Boa noite.'], hint: 'Perguntam pelo seu curso.', wordTr: 'curso' },
        { partnerTr: 'Tens alguma pergunta?', prompt: 'Pergunte o que significa esta palavra.', optionsTr: ['Bom dia.', 'Sim, o que significa esta palavra?', 'Adeus.'], hint: 'Quer perguntar por uma palavra.', wordTr: 'palavra' },
        { partnerTr: 'Fizeste o trabalho de casa?', prompt: 'Ordene as palavras. Diga «Fiz o trabalho de casa».', blocksTr: ['1. Eu tenho', '2. feito', '3. o trabalho de casa'], pattern: 'Padrão: «olen» + particípio = «tenho feito / fiz». É o pretérito perfeito: olen tehnyt.', wordTr: 'trabalho de casa' },
        { partnerTr: 'Queres perguntar alguma coisa?', prompt: 'Diga em voz alta: «Tenho uma pergunta».', targetTr: 'Tenho uma pergunta.', wordTr: 'pergunta' },
      ],
      can: ['dizer em que curso está', 'perguntar o que significa uma palavra', 'dizer que fez o trabalho de casa', 'dizer que tem uma pergunta'],
    },
    a2_past: {
      steps: [
        { partnerTr: 'Onde estiveste ontem?', prompt: 'Diga que esteve no trabalho.', optionsTr: ['Estive no trabalho.', 'Boa noite.', 'Custa cinco euros.'], hint: 'Perguntam por ontem.', wordTr: 'estive' },
        { partnerTr: 'O que fizeste no fim de semana?', prompt: 'Diga que viu um amigo.', optionsTr: ['Gostaria de um café.', 'Vi um amigo.', 'Hoje está frio.'], hint: 'Perguntam pelo seu fim de semana.', wordTr: 'vi' },
        { partnerTr: 'O que comeste?', prompt: 'Ordene as palavras. Diga «Comi sopa e pão».', blocksTr: ['1. Comi', '2. sopa', '3. e', '4. pão'], pattern: 'Padrão: passado + o quê. söin = «comi» (syön = «como»). A terminação «-in» marca o passado para «eu». Sopa e pão ficam no partitivo: keittoa, leipää.', wordTr: 'comi' },
        { partnerTr: 'Foi divertido?', prompt: 'Diga em voz alta: «Sim, diverti-me».', targetTr: 'Sim, diverti-me.', wordTr: 'divertido' },
      ],
      can: ['dizer onde esteve ontem', 'dizer o que fez no fim de semana', 'dizer o que comeu', 'dizer que se divertiu'],
    },
  },
};
