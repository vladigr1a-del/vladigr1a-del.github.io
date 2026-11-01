export const a2b = {
  path: { a2_rest: 'En el restaurante', a2_food: 'Comida y bebida', a2_home: 'Buscar piso', a2_rooms: 'En casa', a2_city: 'En la ciudad', a2_bank: 'Banco y correos', a2_phone: 'Teléfono y planes', a2_adverbs: 'Cuándo y con qué frecuencia', a2_work: 'En el trabajo', a2_jobs: 'Profesiones', a2_school: 'Estudiar', a2_verbs1: 'Verbos cotidianos 1', a2_verbs2: 'Verbos cotidianos 2', a2_past: 'Ayer (pasado)', a2_hobby: 'Aficiones', a2_adj: 'Opuestos', a2_feel: 'Sentimientos', a2_questions: 'Palabras interrogativas' },
  words: {
    a2_rest: ['carta (menú)', 'pedir (en el restaurante)', 'cuenta', 'reservar', 'postre', 'plato principal', 'entrante', 'sabe (a)', 'delicioso', 'plato vegetariano', 'alérgico', 'más', 'agradable', 'sin'],
    a2_food: ['comida', 'bebida', 'carne', 'pescado', 'pollo', 'patata', 'arroz', 'verdura', 'sopa', 'ensalada', 'zumo', 'cerveza', 'huevo', 'mantequilla'],
    a2_home: ['vivienda', 'alquilar', 'planta (piso)', 'ascensor', 'balcón', 'electricidad', 'calefacción', 'llave', 'dirección', 'mudarse', 'reforma', 'apartamento', 'piso de dos habitaciones', 'estudio'],
    a2_rooms: ['hogar', 'habitación', 'cocina', 'dormitorio', 'baño', 'salón', 'puerta', 'ventana', 'mesa', 'silla', 'cama', 'armario', 'alquiler (precio)', 'vecino'],
    a2_city: ['ciudad', 'banco', 'oficina de correos', 'biblioteca', 'colegio', 'hospital', 'restaurante', 'plaza del mercado', 'parque', 'museo', 'iglesia', 'hotel', 'piscina cubierta', 'cruce'],
    a2_bank: ['cuenta (bancaria)', 'dinero', 'número de cuenta', 'sacar dinero', 'pago', 'enviar', 'paquete', 'carta (correo)', 'sello', 'destinatario', 'formulario', 'firma', 'pasaporte', 'recibo'],
    a2_phone: ['teléfono', 'mensaje', 'número', 'correo electrónico', 'quedar (acordar)', 'encontrarse', 'invitación', 'tener tiempo', 'libre', 'la semana que viene', 'temprano', 'tarde (hora)', 'bonito', 'qué pena'],
    a2_adverbs: ['siempre', 'a menudo', 'a veces', 'raramente', 'nunca', 'ahora', 'más tarde', 'pronto', 'ya', 'todavía', 'luego', 'primero', 'la última vez', 'cada día'],
    a2_work: ['lugar de trabajo', 'jornada laboral', 'descanso', 'reunión', 'jefe', 'compañero', 'contrato de trabajo', 'vacaciones', 'turno', 'horas extra', 'entrevista', 'solicitar', 'experiencia', 'idioma'],
    a2_jobs: ['profesor', 'enfermera', 'cocinero', 'conductor', 'limpiador', 'dependiente', 'ingeniero', 'albañil', 'camarero', 'policía', 'bombero', 'estudiante', 'empleador', 'sueldo'],
    a2_school: ['curso', 'clase', 'deberes', 'examen', 'palabra', 'frase', 'gramática', 'pronunciación', 'ejercicio', 'diccionario', 'pregunta', 'respuesta', 'error', 'aprender'],
    a2_verbs1: ['hacer', 'ir', 'venir', 'comprar', 'vender', 'dar', 'tomar', 'ver', 'oír', 'entender', 'saber', 'saber hacer', 'esperar', 'ayudar'],
    a2_verbs2: ['estudiar', 'trabajar', 'llamar / tocar', 'escribir', 'leer', 'mirar', 'escuchar', 'preguntar', 'responder', 'abrir', 'cerrar', 'encontrar', 'probar', 'recordar'],
    a2_past: ['estuve', 'fui (a un lugar)', 'fui', 'comí', 'bebí', 'vi', 'hice', 'compré', 'conocí', 'leí', 'dormí', 'el fin de semana', 'la semana pasada', 'divertido'],
    a2_hobby: ['afición', 'deporte', 'fútbol', 'natación', 'esquí', 'ciclismo', 'música', 'película', 'libro', 'bailar', 'cantar', 'dibujar', 'sauna', 'excursión'],
    a2_adj: ['bueno', 'malo', 'nuevo', 'viejo', 'rápido', 'lento', 'fácil', 'difícil', 'bonito', 'feo', 'limpio', 'sucio', 'lleno', 'vacío'],
    a2_feel: ['alegre', 'triste', 'cansado', 'hambriento', 'sediento', 'enfadado', 'tranquilo', 'ocupado', 'me gusta', 'amo', 'tengo miedo', 'echo de menos', 'preocupado', 'orgulloso'],
    a2_questions: ['quién', 'qué', 'cuándo', 'por qué', 'cómo', 'cuántos', 'de quién', 'cuál (de dos)', 'adónde', 'cuánto tiempo', 'con qué frecuencia', 'puedo', 'me permite', 'significar'],
  },
  missions: {
    a2_rest: {
      steps: [
        { partnerTr: '¡Bienvenido! ¿Tiene reserva?', prompt: 'Di que reservaste una mesa para dos.', optionsTr: ['Sí, reservé una mesa para dos.', 'Buenos días.', '¿Dónde está la estación?'], hint: 'El camarero pregunta por la reserva.', wordTr: 'reservar' },
        { partnerTr: '¿Qué desean pedir?', prompt: 'Pide sopa y agua.', optionsTr: ['¿Qué hora es?', 'Quisiera sopa y agua.', 'Tengo fiebre.'], hint: 'Estás pidiendo comida.', wordTr: 'pedir (en el restaurante)' },
        { partnerTr: '¿Qué tal sabe la comida?', prompt: 'Ordena las palabras. Di «La sopa está deliciosa».', blocksTr: ['1. La sopa', '2. está', '3. deliciosa'], pattern: 'Patrón: cosa + on (es/está) + adjetivo. El finés no tiene artículos: «keitto» significa «la sopa» o «una sopa».', wordTr: 'delicioso' },
        { partnerTr: '¿Desean postre?', prompt: 'Di en voz alta: «¿Me trae la cuenta?»', targetTr: '¿Me trae la cuenta?', wordTr: 'cuenta' },
      ],
      can: ['decir que tienes una reserva', 'pedir comida y bebida', 'decir que la comida está deliciosa', 'pedir la cuenta'],
    },
    a2_home: {
      steps: [
        { partnerTr: '¡Hola! ¿Buscas piso?', prompt: 'Di que buscas un estudio.', optionsTr: ['Sí, busco un estudio.', 'Gracias, tengo fiebre.', 'Hoy es lunes.'], hint: 'Habláis de vivienda.', wordTr: 'estudio' },
        { partnerTr: '¿En qué planta vives?', prompt: 'Di que vives en la tercera planta.', optionsTr: ['Buenas noches.', 'Vivo en la tercera planta.', 'Tengo una hermana.'], hint: 'Preguntan por la planta.', wordTr: 'planta (piso)' },
        { partnerTr: '¿Qué hay en el piso?', prompt: 'Ordena las palabras. Di «En el piso hay un balcón».', blocksTr: ['1. En el piso', '2. hay', '3. un balcón'], pattern: 'Patrón: dónde + on + qué. «Asunnossa on parveke» = «en el piso hay un balcón». El finés usa «on» (es) para decir «hay».', wordTr: 'balcón' },
        { partnerTr: 'Aquí tiene la llave.', prompt: 'Pregunta cuál es la dirección.', targetTr: '¿Cuál es la dirección?', wordTr: 'dirección' },
      ],
      can: ['decir qué vivienda buscas', 'decir en qué planta vives', 'decir qué hay en un piso', 'preguntar una dirección'],
    },
    a2_bank: {
      steps: [
        { partnerTr: '¡Hola! ¿En qué puedo ayudarle?', prompt: 'Di que quieres enviar un paquete.', optionsTr: ['Quisiera enviar un paquete.', 'Estoy cansado.', 'Hoy es lunes.'], hint: 'Estás en correos.', wordTr: 'paquete' },
        { partnerTr: '¿Adónde va el paquete?', prompt: 'Di que va al extranjero.', optionsTr: ['Buenas noches.', 'Va al extranjero.', 'Está delicioso.'], hint: 'Preguntan por el destino.', wordTr: 'enviar' },
        { partnerTr: 'Necesito ver su documento de identidad.', prompt: 'Ordena las palabras. Di «Aquí está mi pasaporte».', blocksTr: ['1. Aquí', '2. está', '3. mi pasaporte'], pattern: 'Patrón: «Tässä on» = «aquí está». Sirve para entregar algo. La terminación «-ni» significa «mi»: passi pasa a passini.', wordTr: 'pasaporte' },
        { partnerTr: '¿Necesita recibo?', prompt: 'Di en voz alta: «Sí, quiero un recibo».', targetTr: 'Sí, quiero un recibo.', wordTr: 'recibo' },
      ],
      can: ['enviar un paquete', 'decir adónde va', 'entregar tu pasaporte', 'pedir un recibo'],
    },
    a2_phone: {
      steps: [
        { partnerTr: '¡Hola! ¿Vienes a tomar un café el sábado?', prompt: 'Da las gracias por la invitación.', optionsTr: ['Gracias por la invitación, ¡con gusto!', 'Tengo fiebre.', '¿Dónde está la estación?'], hint: 'Te invitan.', wordTr: 'invitación' },
        { partnerTr: '¿Cuándo te viene bien?', prompt: 'Di «El sábado a las dos».', optionsTr: ['Encantado de conocerte.', 'El sábado a las dos.', 'Perdón.'], hint: 'Preguntan una hora.', wordTr: 'quedar (acordar)' },
        { partnerTr: '¿Puedes venir?', prompt: 'Ordena las palabras. Di «Qué pena, no tengo tiempo para venir».', blocksTr: ['1. Qué pena', '2. no', '3. tengo tiempo', '4. para venir'], pattern: 'Patrón: negación = en + verbo. «en» significa «yo no», «et» significa «tú no». El verbo pierde su terminación: ehdin pasa a en ehdi.', wordTr: 'tener tiempo' },
        { partnerTr: '¿Cuál es tu número?', prompt: 'Di en voz alta: «Te enviaré un mensaje».', targetTr: 'Te enviaré un mensaje.', wordTr: 'mensaje' },
      ],
      can: ['agradecer una invitación', 'proponer una hora', 'decir que no puedes venir', 'prometer enviar un mensaje'],
    },
    a2_work: {
      steps: [
        { partnerTr: '¿Dónde trabajas?', prompt: 'Di que trabajas en un restaurante.', optionsTr: ['Trabajo en un restaurante.', 'Hoy hace frío.', 'Tengo una hermana.'], hint: 'Preguntan por tu lugar de trabajo.', wordTr: 'lugar de trabajo' },
        { partnerTr: '¿Cuándo tienes el descanso?', prompt: 'Di que tu descanso es a las doce.', optionsTr: ['Buenas noches.', 'Tengo el descanso a las doce.', '¿Dónde está la estación?'], hint: 'Preguntan por tu descanso.', wordTr: 'descanso' },
        { partnerTr: '¿Tienes experiencia?', prompt: 'Ordena las palabras. Di «Tengo experiencia laboral».', blocksTr: ['1. Tengo', '2. (hay)', '3. experiencia laboral'], pattern: 'Patrón: «Minulla on» = «tengo» (literalmente «en mí hay»). Después de «on», una cantidad indefinida va en partitivo: kokemus pasa a kokemusta.', wordTr: 'experiencia' },
        { partnerTr: 'Cuéntame algo sobre ti.', prompt: 'Di en voz alta: «Quisiera solicitar un trabajo».', targetTr: 'Quisiera solicitar un trabajo.', wordTr: 'solicitar' },
      ],
      can: ['decir dónde trabajas', 'decir cuándo es tu descanso', 'decir que tienes experiencia', 'decir que quieres solicitar un trabajo'],
    },
    a2_school: {
      steps: [
        { partnerTr: '¿En qué curso estás?', prompt: 'Di que estás en el curso de finés.', optionsTr: ['Estoy en el curso de finés.', 'Tengo fiebre.', 'Buenas noches.'], hint: 'Preguntan por tu curso.', wordTr: 'curso' },
        { partnerTr: '¿Tienes alguna pregunta?', prompt: 'Pregunta qué significa esta palabra.', optionsTr: ['Buenos días.', 'Sí, ¿qué significa esta palabra?', 'Adiós.'], hint: 'Quieres preguntar por una palabra.', wordTr: 'palabra' },
        { partnerTr: '¿Has hecho los deberes?', prompt: 'Ordena las palabras. Di «He hecho los deberes».', blocksTr: ['1. He', '2. hecho', '3. los deberes'], pattern: 'Patrón: «olen» + participio = «he hecho». Es el pretérito perfecto: olen tehnyt.', wordTr: 'deberes' },
        { partnerTr: '¿Quieres preguntar algo?', prompt: 'Di en voz alta: «Tengo una pregunta».', targetTr: 'Tengo una pregunta.', wordTr: 'pregunta' },
      ],
      can: ['decir en qué curso estás', 'preguntar qué significa una palabra', 'decir que has hecho los deberes', 'decir que tienes una pregunta'],
    },
    a2_past: {
      steps: [
        { partnerTr: '¿Dónde estuviste ayer?', prompt: 'Di que estuviste en el trabajo.', optionsTr: ['Estuve en el trabajo.', 'Buenas noches.', 'Cuesta cinco euros.'], hint: 'Preguntan por ayer.', wordTr: 'estuve' },
        { partnerTr: '¿Qué hiciste el fin de semana?', prompt: 'Di que viste a un amigo.', optionsTr: ['Quisiera un café.', 'Vi a un amigo.', 'Hoy hace frío.'], hint: 'Preguntan por tu fin de semana.', wordTr: 'vi' },
        { partnerTr: '¿Qué comiste?', prompt: 'Ordena las palabras. Di «Comí sopa y pan».', blocksTr: ['1. Comí', '2. sopa', '3. y', '4. pan'], pattern: 'Patrón: pasado + qué. söin = «comí» (syön = «como»). La terminación «-in» marca el pasado para «yo». Sopa y pan van en partitivo: keittoa, leipää.', wordTr: 'comí' },
        { partnerTr: '¿Fue divertido?', prompt: 'Di en voz alta: «Sí, me divertí».', targetTr: 'Sí, me divertí.', wordTr: 'divertido' },
      ],
      can: ['decir dónde estuviste ayer', 'decir qué hiciste el fin de semana', 'decir qué comiste', 'decir que te divertiste'],
    },
  },
};
