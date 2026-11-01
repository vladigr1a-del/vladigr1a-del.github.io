export const a2 = {
  path: { a2_shop: 'En la tienda', a2_weather: 'El tiempo y las estaciones', a2_move: 'Cómo llegar', a2_time: 'La hora y el día', a2_clothes: 'Colores y ropa', a2_health: 'En el médico' },
  words: {
    a2_shop: ['tienda', 'pan', 'queso', 'manzana', 'precio', 'barato', 'caro', 'necesito', 'busco', 'caja', 'bolsa', 'oferta', 'grande', 'pequeño'],
    a2_weather: ['tiempo (clima)', 'sol', 'lluvia', 'nieve', 'viento', 'frío', 'templado', 'calor', 'nublado', 'primavera', 'verano', 'otoño', 'invierno', 'grado'],
    a2_move: ['autobús', 'tren', 'parada', 'estación', 'billete', 'a la derecha', 'a la izquierda', 'todo recto', 'calle', 'mapa', 'dónde', 'cerca', 'lejos', 'caminar'],
    a2_time: ['reloj / hora', 'mañana (por la mañana)', 'día', 'tarde-noche', 'noche', 'hoy', 'mañana (día siguiente)', 'ayer', 'me despierto', 'como', 'duermo', 'en el trabajo', 'media', 'minuto'],
    a2_clothes: ['rojo', 'azul', 'verde', 'amarillo', 'negro', 'blanco', 'abrigo', 'pantalones', 'camisa', 'zapatos', 'gorro', 'manoplas', 'calcetines', 'vestido'],
    a2_health: ['médico', 'farmacia', 'medicina', 'fiebre', 'gripe', 'dolor de cabeza', 'estómago', 'mano', 'pierna', 'cabeza', 'dolorido', 'sano', 'cita', 'ayuda'],
  },
  missions: {
    a2_shop: {
      steps: [
        { partnerTr: '¡Hola! ¿Puedo ayudarle?', prompt: 'Di que buscas leche.', optionsTr: ['Busco leche.', 'Yo soy café.', 'Buenas noches.'], hint: 'Dile al dependiente lo que buscas.', wordTr: 'busco' },
        { partnerTr: '¿Necesita una bolsa?', prompt: 'Di «sí, por favor».', optionsTr: ['Perdón.', 'Sí, por favor.', 'Buenas noches.'], hint: 'Buscamos la respuesta «sí, por favor».', wordTr: 'bolsa' },
        { partnerTr: '¿Qué necesita?', prompt: 'Ordena las palabras. Di «Necesito pan y queso».', blocksTr: ['1. Necesito', '2. pan', '3. y', '4. queso'], pattern: 'Patrón: necesito + qué. Después de «tarvitsen» la palabra recibe una terminación: leipä (pan) pasa a leipää, juusto a juustoa. Se llama partitivo: «un poco de algo».', wordTr: 'necesito' },
        { partnerTr: 'Aquí tiene una manzana.', prompt: 'Pregunta cuánto cuesta esto.', targetTr: '¿Cuánto cuesta esto?', wordTr: 'precio' },
      ],
      can: ['decir qué buscas en una tienda', 'decir qué necesitas', 'preguntar cuánto cuesta algo'],
    },
    a2_move: {
      steps: [
        { partnerTr: 'Perdone, ¿dónde está la estación?', prompt: 'Explica: todo recto y luego a la derecha.', optionsTr: ['Todo recto y luego a la derecha.', 'Quisiera un café.', 'Buenas noches.'], hint: 'Estás indicando el camino.', wordTr: 'todo recto' },
        { partnerTr: '¿Está lejos la estación?', prompt: 'Di que está cerca.', optionsTr: ['Buenos días.', 'No, está cerca.', 'Cuesta cinco euros.'], hint: 'Queremos decir que la estación no está lejos.', wordTr: 'cerca' },
        { partnerTr: '¿Cómo llego a la parada?', prompt: 'Ordena las palabras. Di «Todo recto y luego a la derecha».', blocksTr: ['1. Todo recto', '2. y', '3. luego', '4. a la derecha'], pattern: 'Patrón: dirección + y luego + dirección. La terminación «-lle» significa «hacia»: oikea (derecha) pasa a oikealle.', wordTr: 'a la derecha' },
        { partnerTr: '¿Quiere un billete?', prompt: 'Di en voz alta: «Un billete, por favor».', targetTr: 'Un billete, por favor.', wordTr: 'billete' },
      ],
      can: ['indicar un camino sencillo', 'decir que algo está cerca o lejos', 'pedir un billete'],
    },
    a2_time: {
      steps: [
        { partnerTr: '¿Qué hora es?', prompt: 'Di que son las ocho.', optionsTr: ['Son las ocho.', 'Vivo en Finlandia.', 'Muchas gracias.'], hint: 'Te preguntan la hora.', wordTr: 'reloj / hora' },
        { partnerTr: '¿Cuándo te despiertas?', prompt: 'Di que te despiertas a las seis de la mañana.', optionsTr: ['Hoy hace frío.', 'Me despierto a las seis de la mañana.', 'Adiós.'], hint: 'Te preguntan por tu mañana.', wordTr: 'me despierto' },
        { partnerTr: '¿Qué haces mañana?', prompt: 'Ordena las palabras. Di «Mañana estoy en el trabajo».', blocksTr: ['1. Mañana', '2. estoy', '3. en el trabajo'], pattern: 'Patrón: cuándo + estoy + dónde. En finés el verbo se queda en segundo lugar, aunque la palabra de tiempo vaya primero.', wordTr: 'en el trabajo' },
        { partnerTr: '¿Cuándo te acuestas?', prompt: 'Di en voz alta: «Me acuesto por la noche».', targetTr: 'Me acuesto por la noche.', wordTr: 'tarde-noche' },
      ],
      can: ['decir qué hora es', 'decir cuándo te despiertas', 'decir qué haces mañana'],
    },
    a2_health: {
      steps: [
        { partnerTr: '¡Hola! ¿Qué le pasa?', prompt: 'Di que tienes fiebre.', optionsTr: ['Tengo fiebre.', 'Quisiera un café.', 'Encantado de conocerte.'], hint: 'El médico pregunta cuál es el problema.', wordTr: 'fiebre' },
        { partnerTr: '¿Le duele la cabeza?', prompt: 'Di «sí, tengo dolor de cabeza».', optionsTr: ['Muchas gracias.', 'Sí, tengo dolor de cabeza.', 'Buenas noches.'], hint: 'Buscamos la respuesta «sí».', wordTr: 'dolor de cabeza' },
        { partnerTr: '¿Qué le duele?', prompt: 'Ordena las palabras. Di «Me duele el estómago».', blocksTr: ['1. Mi estómago', '2. está', '3. dolorido'], pattern: 'Patrón: mi + parte del cuerpo + duele. La terminación «-ni» significa «mi»: vatsa (estómago) pasa a vatsani.', wordTr: 'estómago' },
        { partnerTr: '¿Necesita cita con el médico?', prompt: 'Di en voz alta: «Quisiera una cita con el médico».', targetTr: 'Quisiera una cita con el médico.', wordTr: 'cita' },
      ],
      can: ['decir que tienes fiebre o dolor de cabeza', 'decir qué te duele', 'pedir cita con el médico'],
    },
  },
};
