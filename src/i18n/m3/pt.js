export const m3 = {
  missions: {
    "a2c_doctor": {
      "steps": [
        {
          "partnerTr": "O que o incomoda?",
          "prompt": "Diga «Tenho dor de garganta».",
          "optionsTr": [
            "Tenho dor de garganta.",
            "Queria um café.",
            "Boa noite."
          ],
          "hint": "Descreve como se sente.",
          "wordTr": "dor de garganta"
        },
        {
          "partnerTr": "Tem alergias?",
          "prompt": "Diga «Sim, tenho uma alergia».",
          "optionsTr": [
            "Custa cinco euros.",
            "Sim, tenho uma alergia.",
            "Adeus."
          ],
          "hint": "Perguntam-lhe por alergias.",
          "wordTr": "alergia"
        },
        {
          "partnerTr": "Precisa de baixa médica?",
          "prompt": "Ordene as palavras. Diga «Preciso de baixa médica por três dias».",
          "blocksTr": [
            "1. Preciso de",
            "2. baixa médica",
            "3. por três",
            "4. dias"
          ],
          "pattern": "Padrão: preciso de + baixa médica + por três dias. A terminação -ksi significa «por» um tempo: kolme päivää passa a kolmeksi päiväksi.",
          "wordTr": "baixa médica"
        },
        {
          "partnerTr": "Vamos medir-lhe a tensão arterial.",
          "prompt": "Diga em voz alta: «A minha tensão arterial é normal?»",
          "targetTr": "A minha tensão arterial é normal?",
          "wordTr": "tensão arterial"
        }
      ],
      "can": [
        "descrever como se sente",
        "dizer que tem uma alergia",
        "pedir baixa médica por alguns dias",
        "perguntar pela sua tensão arterial"
      ]
    },
    "a2c_hotel": {
      "steps": [
        {
          "partnerTr": "Boa noite! Em que posso ajudar?",
          "prompt": "Diga «Tenho uma reserva».",
          "optionsTr": [
            "Tenho uma reserva.",
            "Adeus.",
            "Custa três euros."
          ],
          "hint": "Já reservou um quarto.",
          "wordTr": "reserva"
        },
        {
          "partnerTr": "Quantas noites vão ficar?",
          "prompt": "Diga «Vamos ficar duas noites».",
          "optionsTr": [
            "Boa noite.",
            "Vamos ficar duas noites.",
            "Queria um café."
          ],
          "hint": "Diz quanto tempo fica.",
          "wordTr": "pernoitar"
        },
        {
          "partnerTr": "Onde fica a piscina?",
          "prompt": "Ordene as palavras. Diga «A piscina fica em baixo».",
          "blocksTr": [
            "1. A piscina",
            "2. fica",
            "3. em baixo"
          ],
          "pattern": "Padrão: lugar + fica + onde. A terminação -ssa significa «em»: alakerta (o andar de baixo) passa a alakerrassa.",
          "wordTr": "piscina"
        },
        {
          "partnerTr": "Precisa de mais alguma coisa?",
          "prompt": "Diga em voz alta: «Podia dar-me uma chave suplente?»",
          "targetTr": "Podia dar-me uma chave suplente?",
          "wordTr": "chave suplente"
        }
      ],
      "can": [
        "dizer que tem uma reserva",
        "dizer quantas noites fica",
        "perguntar onde é a piscina",
        "pedir uma chave suplente"
      ]
    },
    "a2c_directions": {
      "steps": [
        {
          "partnerTr": "Desculpe, onde fica a farmácia mais próxima?",
          "prompt": "Diga «Fica naquele cruzamento».",
          "optionsTr": [
            "Fica naquele cruzamento.",
            "Queria um café.",
            "Boa noite."
          ],
          "hint": "Diz onde fica o lugar.",
          "wordTr": "no cruzamento"
        },
        {
          "partnerTr": "É longe?",
          "prompt": "Diga «Não, fica a uma curta distância a pé».",
          "optionsTr": [
            "Bom dia.",
            "Não, fica a uma curta distância a pé.",
            "Custa três euros."
          ],
          "hint": "Diz que é perto.",
          "wordTr": "a pé (distância)"
        },
        {
          "partnerTr": "Para onde tenho de ir?",
          "prompt": "Ordene as palavras. Diga «Vire à direita e continue em frente».",
          "blocksTr": [
            "1. Vire",
            "2. à direita",
            "3. e",
            "4. continue",
            "5. em frente"
          ],
          "pattern": "Padrão: vire + à direita + e + continue + em frente. São ordens: käänny (vire!), jatka (continue!).",
          "wordTr": "virar"
        },
        {
          "partnerTr": "Fica em frente à biblioteca.",
          "prompt": "Diga em voz alta: «Fica ao virar da esquina?»",
          "targetTr": "Fica ao virar da esquina?",
          "wordTr": "esquina"
        }
      ],
      "can": [
        "perguntar onde fica o lugar mais próximo",
        "perceber «a uma curta distância a pé»",
        "dizer a alguém para virar à direita e continuar",
        "perguntar se algo fica ao virar da esquina"
      ]
    },
    "b1c_service": {
      "steps": [
        {
          "partnerTr": "Bom dia. Em que posso ajudar?",
          "prompt": "Diga «Queria marcar uma consulta».",
          "optionsTr": [
            "Queria marcar uma consulta.",
            "Adeus.",
            "Custa três euros."
          ],
          "hint": "Quer marcar uma consulta.",
          "wordTr": "marcação de consulta"
        },
        {
          "partnerTr": "Tem senha de atendimento?",
          "prompt": "Diga «Sim, o meu número é o vinte e três».",
          "optionsTr": [
            "Boa noite.",
            "Sim, o meu número é o vinte e três.",
            "Hoje está frio."
          ],
          "hint": "Diz o seu número da senha.",
          "wordTr": "número de senha"
        },
        {
          "partnerTr": "O que deseja fazer?",
          "prompt": "Ordene as palavras. Diga «Quero levantar a encomenda no ponto de recolha».",
          "blocksTr": [
            "1. Quero",
            "2. levantar",
            "3. a encomenda",
            "4. no ponto de recolha"
          ],
          "pattern": "Padrão: quero + levantar + a encomenda + no ponto de recolha. A terminação -sta significa «de / em»: noutopiste passa a noutopisteestä.",
          "wordTr": "ponto de recolha"
        },
        {
          "partnerTr": "Ainda precisamos do anexo.",
          "prompt": "Diga em voz alta: «Envio o anexo por e-mail».",
          "targetTr": "Envio o anexo por e-mail.",
          "wordTr": "anexo"
        }
      ],
      "can": [
        "pedir uma marcação",
        "dizer o número da sua senha",
        "dizer que quer levantar uma encomenda",
        "prometer enviar um anexo"
      ]
    },
    "b1c_work2": {
      "steps": [
        {
          "partnerTr": "Porque se candidata a este emprego?",
          "prompt": "Diga «Candidato-me porque procuro um emprego efetivo».",
          "optionsTr": [
            "Candidato-me porque procuro um emprego efetivo.",
            "Queria um café.",
            "Boa noite."
          ],
          "hint": "Explica porque se candidata.",
          "wordTr": "efetivo"
        },
        {
          "partnerTr": "Quer trabalhar a tempo inteiro ou a tempo parcial?",
          "prompt": "Diga «Um trabalho a tempo parcial convinha-me mais».",
          "optionsTr": [
            "Adeus.",
            "Um trabalho a tempo parcial convinha-me mais.",
            "Hoje está frio."
          ],
          "hint": "Escolhe entre tempo inteiro e tempo parcial.",
          "wordTr": "a tempo parcial"
        },
        {
          "partnerTr": "Tem uma declaração de trabalho?",
          "prompt": "Ordene as palavras. Diga «Tenho uma declaração de trabalho do meu anterior empregador».",
          "blocksTr": [
            "1. Tenho",
            "2. uma",
            "3. declaração de trabalho",
            "4. do meu anterior",
            "5. empregador"
          ],
          "pattern": "Padrão: tenho + declaração de trabalho + do meu anterior empregador. A terminação -lta significa «de»: työnantaja passa a työnantajalta.",
          "wordTr": "declaração de trabalho"
        },
        {
          "partnerTr": "Vamos falar também do horário de trabalho.",
          "prompt": "Diga em voz alta: «Qual é o horário semanal de trabalho?»",
          "targetTr": "Qual é o horário semanal de trabalho?",
          "wordTr": "horário de trabalho"
        }
      ],
      "can": [
        "dizer porque se candidata a um emprego",
        "falar de trabalho a tempo parcial",
        "dizer que tem uma declaração de trabalho",
        "perguntar pelo horário de trabalho"
      ]
    },
    "b1c_shop3": {
      "steps": [
        {
          "partnerTr": "Em que posso ajudar?",
          "prompt": "Diga «Queria fazer uma reclamação sobre este produto».",
          "optionsTr": [
            "Queria fazer uma reclamação sobre este produto.",
            "Boa noite.",
            "Onde fica a estação?"
          ],
          "hint": "Quer reclamar de um produto.",
          "wordTr": "reclamar (um produto)"
        },
        {
          "partnerTr": "O produto ainda está na garantia?",
          "prompt": "Diga «Sim, a garantia termina no próximo mês».",
          "optionsTr": [
            "Bom dia.",
            "Sim, a garantia termina no próximo mês.",
            "É vermelho."
          ],
          "hint": "Diz que a garantia ainda é válida.",
          "wordTr": "prazo de garantia"
        },
        {
          "partnerTr": "Porque quer devolver o produto?",
          "prompt": "Ordene as palavras. Diga «Não tinha instruções de uso».",
          "blocksTr": [
            "1. Não",
            "2. tinha",
            "3. instruções",
            "4. de uso"
          ],
          "pattern": "Padrão: não + tinha + instruções. Numa frase negativa a coisa fica na forma «algum»: käyttöohjetta.",
          "wordTr": "instruções de uso"
        },
        {
          "partnerTr": "Tem direito a devolução em catorze dias.",
          "prompt": "Diga em voz alta: «Os custos de envio são reembolsados?»",
          "targetTr": "Os custos de envio são reembolsados?",
          "wordTr": "custos de envio"
        }
      ],
      "can": [
        "dizer que quer fazer uma reclamação",
        "perguntar pelo prazo de garantia",
        "explicar que faltavam as instruções",
        "perguntar se os custos de envio são reembolsados"
      ]
    },
    "b2c_meeting": {
      "steps": [
        {
          "partnerTr": "Recebeu a convocatória da reunião?",
          "prompt": "Diga «Sim, li a ordem de trabalhos».",
          "optionsTr": [
            "Sim, li a ordem de trabalhos.",
            "Boa noite.",
            "Custa três euros."
          ],
          "hint": "Diz que já a leu.",
          "wordTr": "ordem de trabalhos"
        },
        {
          "partnerTr": "Quem é o presidente da reunião?",
          "prompt": "Diga «O presidente é o Virtanen».",
          "optionsTr": [
            "Adeus.",
            "O presidente é o Virtanen.",
            "Hoje está frio."
          ],
          "hint": "Nomeia o presidente.",
          "wordTr": "presidente da mesa"
        },
        {
          "partnerTr": "O que acontece a seguir?",
          "prompt": "Ordene as palavras. Diga «Sobre a proposta vota-se antes de a reunião terminar».",
          "blocksTr": [
            "1. Sobre a proposta",
            "2. vota-se",
            "3. antes",
            "4. da reunião",
            "5. terminar"
          ],
          "pattern": "Padrão: sobre a proposta + vota-se + antes + da reunião + terminar. «äänestetään» = «vota-se» (não se diz quem vota).",
          "wordTr": "votação"
        },
        {
          "partnerTr": "Alguém tem mais alguma coisa a dizer?",
          "prompt": "Diga em voz alta: «Queria apoiar a proposta».",
          "targetTr": "Queria apoiar a proposta.",
          "wordTr": "apoio (a uma proposta)"
        }
      ],
      "can": [
        "dizer que leu a ordem de trabalhos",
        "nomear o presidente de uma reunião",
        "perceber que haverá votação",
        "dizer que apoia uma proposta"
      ]
    },
    "b2c_housing3": {
      "steps": [
        {
          "partnerTr": "Leu o contrato de arrendamento?",
          "prompt": "Diga «Sim, o prazo de pré-aviso é de três meses».",
          "optionsTr": [
            "Sim, o prazo de pré-aviso é de três meses.",
            "Boa noite.",
            "É vermelho."
          ],
          "hint": "Fala do prazo de pré-aviso.",
          "wordTr": "prazo de aviso prévio"
        },
        {
          "partnerTr": "O que vai fazer o condomínio?",
          "prompt": "Diga «O condomínio vai renovar as canalizações».",
          "optionsTr": [
            "Adeus.",
            "O condomínio vai renovar as canalizações.",
            "Queria um café."
          ],
          "hint": "Fala da renovação das canalizações.",
          "wordTr": "renovação de canalizações"
        },
        {
          "partnerTr": "O que disse o administrador sobre a quota?",
          "prompt": "Ordene as palavras. Diga «Ele disse que a quota sobe».",
          "blocksTr": [
            "1. Ele",
            "2. disse",
            "3. que",
            "4. a quota",
            "5. sobe"
          ],
          "pattern": "Padrão: ele + disse + que + a quota + sobe. Depois de «että» (que) começa uma frase nova: vastike nousee.",
          "wordTr": "quota de condomínio"
        },
        {
          "partnerTr": "Precisa de mais documentos?",
          "prompt": "Diga em voz alta: «Preciso da declaração do administrador».",
          "targetTr": "Preciso da declaração do administrador.",
          "wordTr": "certidão do administrador"
        }
      ],
      "can": [
        "falar do prazo de pré-aviso",
        "mencionar a renovação das canalizações",
        "falar da quota do condomínio",
        "pedir a declaração do administrador"
      ]
    },
    "b2c_finance": {
      "steps": [
        {
          "partnerTr": "Em que posso ajudar?",
          "prompt": "Diga «Queria pedir um crédito à habitação».",
          "optionsTr": [
            "Queria pedir um crédito à habitação.",
            "Boa noite.",
            "Onde fica a estação?"
          ],
          "hint": "Quer um crédito à habitação.",
          "wordTr": "crédito à habitação"
        },
        {
          "partnerTr": "É preciso um fiador para o crédito?",
          "prompt": "Diga «Sim, o banco exige um fiador».",
          "optionsTr": [
            "Hoje está frio.",
            "Sim, o banco exige um fiador.",
            "Adeus."
          ],
          "hint": "Diz que o banco exige um fiador.",
          "wordTr": "garantia (fiança)"
        },
        {
          "partnerTr": "Tem incumprimentos registados?",
          "prompt": "Ordene as palavras. Diga «Não tenho nenhum incumprimento».",
          "blocksTr": [
            "1. Não",
            "2. tenho",
            "3. nenhum",
            "4. incumprimento"
          ],
          "pattern": "Padrão: não + tenho + nenhum + incumprimento. Numa frase negativa a coisa fica na forma «algum»: maksuhäiriötä.",
          "wordTr": "registo de incumprimento"
        },
        {
          "partnerTr": "Tem mais perguntas?",
          "prompt": "Diga em voz alta: «Quando recebo o reembolso de impostos?»",
          "targetTr": "Quando recebo o reembolso de impostos?",
          "wordTr": "reembolso de impostos"
        }
      ],
      "can": [
        "pedir um crédito à habitação",
        "dizer que o banco exige um fiador",
        "dizer que não tem incumprimentos",
        "perguntar pelo reembolso de impostos"
      ]
    }
  },
};
