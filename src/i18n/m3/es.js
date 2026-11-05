export const m3 = {
  missions: {
    "a2c_doctor": {
      "steps": [
        {
          "partnerTr": "¿Qué le pasa?",
          "prompt": "Di «Me duele la garganta».",
          "optionsTr": [
            "Me duele la garganta.",
            "Quisiera un café.",
            "Buenas noches."
          ],
          "hint": "Describes cómo te sientes.",
          "wordTr": "dolor de garganta"
        },
        {
          "partnerTr": "¿Tiene alergias?",
          "prompt": "Di «Sí, tengo una alergia».",
          "optionsTr": [
            "Cuesta cinco euros.",
            "Sí, tengo una alergia.",
            "Adiós."
          ],
          "hint": "Te preguntan por alergias.",
          "wordTr": "alergia"
        },
        {
          "partnerTr": "¿Necesita una baja médica?",
          "prompt": "Ordena las palabras. Di «Necesito una baja médica por tres días».",
          "blocksTr": [
            "1. Necesito",
            "2. una baja médica",
            "3. por tres",
            "4. días"
          ],
          "pattern": "Patrón: necesito + baja médica + por tres días. La terminación -ksi significa «por» un tiempo: kolme päivää pasa a kolmeksi päiväksi.",
          "wordTr": "baja por enfermedad"
        },
        {
          "partnerTr": "Ahora le tomaremos la tensión.",
          "prompt": "Di en voz alta: «¿Es normal mi tensión arterial?»",
          "targetTr": "¿Es normal mi tensión arterial?",
          "wordTr": "presión arterial"
        }
      ],
      "can": [
        "describir cómo te sientes",
        "decir que tienes una alergia",
        "pedir una baja médica por unos días",
        "preguntar por tu tensión arterial"
      ]
    },
    "a2c_hotel": {
      "steps": [
        {
          "partnerTr": "¡Buenas tardes! ¿En qué puedo ayudarle?",
          "prompt": "Di «Tengo una reserva».",
          "optionsTr": [
            "Tengo una reserva.",
            "Adiós.",
            "Cuesta tres euros."
          ],
          "hint": "Ya has reservado una habitación.",
          "wordTr": "reserva"
        },
        {
          "partnerTr": "¿Cuántas noches se van a quedar?",
          "prompt": "Di «Nos quedaremos dos noches».",
          "optionsTr": [
            "Buenas noches.",
            "Nos quedaremos dos noches.",
            "Quisiera un café."
          ],
          "hint": "Dices cuánto tiempo te quedas.",
          "wordTr": "pasar la noche"
        },
        {
          "partnerTr": "¿Dónde está la piscina?",
          "prompt": "Ordena las palabras. Di «La piscina está abajo».",
          "blocksTr": [
            "1. La piscina",
            "2. está",
            "3. abajo"
          ],
          "pattern": "Patrón: lugar + está + dónde. La terminación -ssa significa «en»: alakerta (la planta baja) pasa a alakerrassa.",
          "wordTr": "piscina"
        },
        {
          "partnerTr": "¿Necesita algo más?",
          "prompt": "Di en voz alta: «¿Podría darme una llave de repuesto?»",
          "targetTr": "¿Podría darme una llave de repuesto?",
          "wordTr": "llave de repuesto"
        }
      ],
      "can": [
        "decir que tienes una reserva",
        "decir cuántas noches te quedas",
        "preguntar dónde está la piscina",
        "pedir una llave de repuesto"
      ]
    },
    "a2c_directions": {
      "steps": [
        {
          "partnerTr": "Perdone, ¿dónde está la farmacia más cercana?",
          "prompt": "Di «Está en aquel cruce».",
          "optionsTr": [
            "Está en aquel cruce.",
            "Quisiera un café.",
            "Buenas noches."
          ],
          "hint": "Dices dónde está el lugar.",
          "wordTr": "en el cruce"
        },
        {
          "partnerTr": "¿Está lejos?",
          "prompt": "Di «No, está a poca distancia andando».",
          "optionsTr": [
            "Buenos días.",
            "No, está a poca distancia andando.",
            "Cuesta tres euros."
          ],
          "hint": "Dices que está cerca.",
          "wordTr": "a pie (distancia)"
        },
        {
          "partnerTr": "¿Hacia dónde tengo que ir?",
          "prompt": "Ordena las palabras. Di «Gire a la derecha y siga recto».",
          "blocksTr": [
            "1. Gire",
            "2. a la derecha",
            "3. y",
            "4. siga",
            "5. recto"
          ],
          "pattern": "Patrón: gire + a la derecha + y + siga + recto. Son órdenes: käänny (¡gira!), jatka (¡sigue!).",
          "wordTr": "girar"
        },
        {
          "partnerTr": "Está enfrente de la biblioteca.",
          "prompt": "Di en voz alta: «¿Está a la vuelta de la esquina?»",
          "targetTr": "¿Está a la vuelta de la esquina?",
          "wordTr": "esquina"
        }
      ],
      "can": [
        "preguntar dónde está el lugar más cercano",
        "entender «a poca distancia andando»",
        "decir a alguien que gire a la derecha y siga",
        "preguntar si algo está a la vuelta de la esquina"
      ]
    },
    "b1c_service": {
      "steps": [
        {
          "partnerTr": "Buenos días. ¿En qué puedo ayudarle?",
          "prompt": "Di «Quisiera pedir una cita».",
          "optionsTr": [
            "Quisiera pedir una cita.",
            "Adiós.",
            "Cuesta tres euros."
          ],
          "hint": "Quieres pedir una cita.",
          "wordTr": "cita previa"
        },
        {
          "partnerTr": "¿Tiene número de turno?",
          "prompt": "Di «Sí, mi número es el veintitrés».",
          "optionsTr": [
            "Buenas noches.",
            "Sí, mi número es el veintitrés.",
            "Hoy hace frío."
          ],
          "hint": "Dices tu número de turno.",
          "wordTr": "número de turno"
        },
        {
          "partnerTr": "¿Qué desea hacer?",
          "prompt": "Ordena las palabras. Di «Quiero recoger el paquete del punto de recogida».",
          "blocksTr": [
            "1. Quiero",
            "2. recoger",
            "3. el paquete",
            "4. del punto de recogida"
          ],
          "pattern": "Patrón: quiero + recoger + el paquete + del punto de recogida. La terminación -sta significa «de / desde»: noutopiste pasa a noutopisteestä.",
          "wordTr": "punto de recogida"
        },
        {
          "partnerTr": "Todavía necesitamos el archivo adjunto.",
          "prompt": "Di en voz alta: «Enviaré el archivo adjunto por correo electrónico».",
          "targetTr": "Enviaré el archivo adjunto por correo electrónico.",
          "wordTr": "archivo adjunto"
        }
      ],
      "can": [
        "pedir una cita",
        "decir tu número de turno",
        "decir que quieres recoger un paquete",
        "prometer que enviarás un adjunto"
      ]
    },
    "b1c_work2": {
      "steps": [
        {
          "partnerTr": "¿Por qué solicita este puesto?",
          "prompt": "Di «Lo solicito porque busco un trabajo indefinido».",
          "optionsTr": [
            "Lo solicito porque busco un trabajo indefinido.",
            "Quisiera un café.",
            "Buenas noches."
          ],
          "hint": "Explicas por qué te presentas.",
          "wordTr": "indefinido"
        },
        {
          "partnerTr": "¿Quiere trabajar a jornada completa o a tiempo parcial?",
          "prompt": "Di «Me iría mejor un trabajo a tiempo parcial».",
          "optionsTr": [
            "Adiós.",
            "Me iría mejor un trabajo a tiempo parcial.",
            "Hoy hace frío."
          ],
          "hint": "Eliges entre jornada completa y tiempo parcial.",
          "wordTr": "a tiempo parcial"
        },
        {
          "partnerTr": "¿Tiene un certificado de trabajo?",
          "prompt": "Ordena las palabras. Di «Tengo un certificado de trabajo de mi anterior empleador».",
          "blocksTr": [
            "1. Tengo",
            "2. un",
            "3. certificado de trabajo",
            "4. de mi anterior",
            "5. empleador"
          ],
          "pattern": "Patrón: tengo + certificado de trabajo + de mi anterior empleador. La terminación -lta significa «de»: työnantaja pasa a työnantajalta.",
          "wordTr": "certificado laboral"
        },
        {
          "partnerTr": "Hablemos también del horario de trabajo.",
          "prompt": "Di en voz alta: «¿Cuál es la jornada semanal?»",
          "targetTr": "¿Cuál es la jornada semanal?",
          "wordTr": "horario de trabajo"
        }
      ],
      "can": [
        "decir por qué solicitas un trabajo",
        "hablar del trabajo a tiempo parcial",
        "decir que tienes un certificado de trabajo",
        "preguntar por el horario de trabajo"
      ]
    },
    "b1c_shop3": {
      "steps": [
        {
          "partnerTr": "¿En qué puedo ayudarle?",
          "prompt": "Di «Quisiera reclamar por este producto».",
          "optionsTr": [
            "Quisiera reclamar por este producto.",
            "Buenas noches.",
            "¿Dónde está la estación?"
          ],
          "hint": "Quieres quejarte de un producto.",
          "wordTr": "reclamar (un producto)"
        },
        {
          "partnerTr": "¿El producto sigue en garantía?",
          "prompt": "Di «Sí, la garantía termina el mes que viene».",
          "optionsTr": [
            "Buenos días.",
            "Sí, la garantía termina el mes que viene.",
            "Es rojo."
          ],
          "hint": "Dices que la garantía sigue vigente.",
          "wordTr": "plazo de garantía"
        },
        {
          "partnerTr": "¿Por qué quiere devolver el producto?",
          "prompt": "Ordena las palabras. Di «No traía instrucciones de uso».",
          "blocksTr": [
            "1. No",
            "2. traía",
            "3. instrucciones",
            "4. de uso"
          ],
          "pattern": "Patrón: no + traía + instrucciones. En una frase negativa la cosa va en la forma «algo de»: käyttöohjetta.",
          "wordTr": "instrucciones de uso"
        },
        {
          "partnerTr": "Tiene derecho a devolverlo en catorce días.",
          "prompt": "Di en voz alta: «¿Devolverán los gastos de envío?»",
          "targetTr": "¿Devolverán los gastos de envío?",
          "wordTr": "gastos de envío"
        }
      ],
      "can": [
        "decir que quieres reclamar",
        "preguntar por el plazo de garantía",
        "explicar que faltaban las instrucciones",
        "preguntar si devuelven los gastos de envío"
      ]
    },
    "b2c_meeting": {
      "steps": [
        {
          "partnerTr": "¿Ha recibido la convocatoria de la reunión?",
          "prompt": "Di «Sí, he leído el orden del día».",
          "optionsTr": [
            "Sí, he leído el orden del día.",
            "Buenas noches.",
            "Cuesta tres euros."
          ],
          "hint": "Dices que lo has leído.",
          "wordTr": "orden del día"
        },
        {
          "partnerTr": "¿Quién preside la reunión?",
          "prompt": "Di «La preside Virtanen».",
          "optionsTr": [
            "Adiós.",
            "La preside Virtanen.",
            "Hoy hace frío."
          ],
          "hint": "Nombras al presidente.",
          "wordTr": "presidente de la reunión"
        },
        {
          "partnerTr": "¿Qué ocurre ahora?",
          "prompt": "Ordena las palabras. Di «Sobre la propuesta se vota antes del final de la reunión».",
          "blocksTr": [
            "1. Sobre la propuesta",
            "2. se vota",
            "3. antes",
            "4. de la reunión",
            "5. del final"
          ],
          "pattern": "Patrón: sobre la propuesta + se vota + antes + de la reunión + del final. «äänestetään» = «se vota» (no se dice quién vota).",
          "wordTr": "votación"
        },
        {
          "partnerTr": "¿Alguien tiene algo más que decir?",
          "prompt": "Di en voz alta: «Quisiera apoyar la propuesta».",
          "targetTr": "Quisiera apoyar la propuesta.",
          "wordTr": "apoyo (a una propuesta)"
        }
      ],
      "can": [
        "decir que has leído el orden del día",
        "nombrar al presidente de una reunión",
        "entender que habrá una votación",
        "decir que apoyas una propuesta"
      ]
    },
    "b2c_housing3": {
      "steps": [
        {
          "partnerTr": "¿Ha leído el contrato de alquiler?",
          "prompt": "Di «Sí, el plazo de preaviso es de tres meses».",
          "optionsTr": [
            "Sí, el plazo de preaviso es de tres meses.",
            "Buenas noches.",
            "Es rojo."
          ],
          "hint": "Hablas del plazo de preaviso.",
          "wordTr": "plazo de preaviso"
        },
        {
          "partnerTr": "¿Qué va a hacer la comunidad de vecinos?",
          "prompt": "Di «La comunidad va a renovar las tuberías».",
          "optionsTr": [
            "Adiós.",
            "La comunidad va a renovar las tuberías.",
            "Quisiera un café."
          ],
          "hint": "Hablas de la renovación de tuberías.",
          "wordTr": "renovación de tuberías"
        },
        {
          "partnerTr": "¿Qué dijo el administrador sobre la cuota?",
          "prompt": "Ordena las palabras. Di «Él dijo que la cuota sube».",
          "blocksTr": [
            "1. Él",
            "2. dijo",
            "3. que",
            "4. la cuota",
            "5. sube"
          ],
          "pattern": "Patrón: él + dijo + que + la cuota + sube. Después de «että» (que) empieza una frase nueva: vastike nousee.",
          "wordTr": "cuota de mantenimiento"
        },
        {
          "partnerTr": "¿Necesita más documentos?",
          "prompt": "Di en voz alta: «Necesito el certificado del administrador».",
          "targetTr": "Necesito el certificado del administrador.",
          "wordTr": "certificado del administrador"
        }
      ],
      "can": [
        "hablar del plazo de preaviso",
        "mencionar la renovación de tuberías",
        "hablar de la cuota de la comunidad",
        "pedir el certificado del administrador"
      ]
    },
    "b2c_finance": {
      "steps": [
        {
          "partnerTr": "¿En qué puedo ayudarle?",
          "prompt": "Di «Quisiera solicitar una hipoteca».",
          "optionsTr": [
            "Quisiera solicitar una hipoteca.",
            "Buenas noches.",
            "¿Dónde está la estación?"
          ],
          "hint": "Quieres una hipoteca.",
          "wordTr": "hipoteca (préstamo)"
        },
        {
          "partnerTr": "¿Se necesita un aval para el préstamo?",
          "prompt": "Di «Sí, el banco exige un aval».",
          "optionsTr": [
            "Hoy hace frío.",
            "Sí, el banco exige un aval.",
            "Adiós."
          ],
          "hint": "Dices que el banco necesita un aval.",
          "wordTr": "aval"
        },
        {
          "partnerTr": "¿Tiene impagos registrados?",
          "prompt": "Ordena las palabras. Di «No tengo ningún impago».",
          "blocksTr": [
            "1. No",
            "2. tengo",
            "3. ningún",
            "4. impago"
          ],
          "pattern": "Patrón: no + tengo + ningún + impago. En una frase negativa la cosa va en la forma «algo de»: maksuhäiriötä.",
          "wordTr": "anotación por impago"
        },
        {
          "partnerTr": "¿Tiene más preguntas?",
          "prompt": "Di en voz alta: «¿Cuándo recibiré la devolución de impuestos?»",
          "targetTr": "¿Cuándo recibiré la devolución de impuestos?",
          "wordTr": "devolución de impuestos"
        }
      ],
      "can": [
        "solicitar una hipoteca",
        "decir que el banco exige un aval",
        "decir que no tienes impagos",
        "preguntar por la devolución de impuestos"
      ]
    }
  },
};
