const CONFIG = {
  nombre: "Amor mio",
  saludo: "Mi amor,",                // primera lin de la carta
  firma: "Con todo mi amor,\nTu novio",
  inicio: "2025-08-28",              // fecha (AAAA-MM-DD)

  /* Cada nivel:
     desplazamiento -> cuantos lugares se corre el César
     respuestas     -> TODAS las respuestas que se aceptan como correctas
                       (no importan mayusculas, acentos ni signos como "/" o "-")
     carta          -> el parrafo que se desbloquea al acertar            */
  niveles: [
    {
      desplazamiento: 1,
      pregunta: "¿Dónde nos conocimos?",
      respuestas: ["instagram", "insta", "ig"],
      carta:  "Que loco no?, toda esta historia comenzo por un simple qondaa ¿no?. La verdad amor es que no me arrepiento de nada en a verte mandado ese mensaje que cambio toda nuestra historia mi amor y digo historia, por que los dos sin darnos cuenta nos hicimos pareja"
    },
    {
      desplazamiento: 2,
      pregunta: "¿Hace cuanto nos conocimos?",
      respuestas: ["1 año y 2 meses", "1 año y dos meses", "un año y 3 meses", "un año y dos meses", "1 año 2 meses", "un año dos meses"],
      carta: "Un año y tres meses o como me gusta llamarlo 1 año y 3 meses (que). y todavia me sorprendo de lo hermosa que sos cada dia que pasa. Cada dia que estamos juntos pienso y digo fua: Que novia tan hermosa que tengo en mi vida, empatica, amorosa, hermosa y tambien y sobre todo protectora y cuidadora. Por que si, amor hay veces que me cuidas una banda y eso lo valoro un monton mi amor. Gracias por siempre cuidarme mi vida. Por que si, amor hay veces que me cuidas una banda y eso lo valoro un monton mi amor. Gracias por siempre cuidarme mi vida"
    },
    {
      desplazamiento: 3,
      pregunta: "¿Cual es nuestra fecha?",
      respuestas: ["28/8/25", "28/08/25", "28/8/2025", "28/08/2025", "28-8-25", "28-08-2025"],
      carta: "El 28 de agosto de 2025 es una fecha que no pienso olvidar nunca. Desde ese dia cada mes fue distinto, pero siempre estas a mi lado y eso es lo que mas me encanta, es que siempre todos los 28 cumplimos meses y siempre nos regalamos algo y tambien tipo, me encanta que siempre estamos juntos pase lo que pase mi amor."
    },
    {
      desplazamiento: 5,
      pregunta: "¿Quien organizó la primera salida?",
      respuestas: ["mi novio", "mi gordo", "mi bebe", "mi bb"],
      carta: "Me acuerdo cuando habiamos organizado en esperarte en en la carniceria alado de sabor express y ahi te vi, vi la mujer de mi vida por primera vez y aun que no sabia, habia encontrado mi hilo rojo que tanto estaba buscando. La verdad amor es que jamas pense en encontrar a una mujer tan hermosa como vos mi vida precsiosa hermosa de mi corazon. La verdad amor es que te amo tal cual como sos mi vida 💜💜"
    },
    {
      desplazamiento: 3,
      pregunta: "¿Cual es mi comida favorita?",
      respuestas: ["milanesa", "milanesas", "pollo", "hamburguesa", "hamburguesas", "hamburgesa", "hamburgesas", "pizza", "ramen"],
      carta: "Me encanta que te acordas de las cosas mas boludas del universo te juro FJKWAJF, te juro que me sorprende que le hayas pegado a mi comida favorita. (igual es re facil JFWKAJFA) (el pollo no es mi comida favorita, era una opcion para joder nomas)"
    },
    {
      desplazamiento: 9,
      pregunta: "¿Quien es la persona favorita de mi mundo?",
      respuestas: ["mi hermosa novia", "mi novia", "yo"],
      carta: "Sos mi persona favorita del mundo. Gracias por quedarte en los días buenos y sobre todo en los difíciles, por escucharme sin juzgarme y por abrazarme cuando ni yo sabía lo que necesitaba."
    },
    {
      desplazamiento: 12,
      pregunta: "¿Que apodo me gusta mas?",
      respuestas: ["mi amor", "mi vida", "mi cielo", "amor", "vida", "cielo", "mi gordo", "mi gordito", "mi cielito", "mi bebe", "mi bb"],
      carta: "Cada vez que me decis asi, se me arregla el día. te juro que literalmente se me van mis prolemas que tenia en la cabeza cada vez que leo un simple mensaje tuyo diciendome amor. La verdad amor es que amo que me digas bb, cielo, vida, gordo o mi amor. La verdad cielo es que cada vez que me decis asi te juro que me enamoro mas y tambien tipo se me van mis prolemas por que significa que tengo a alguien a mi lado que siempre me da paz. Nada amor, te amo una bnada mi cieloo 💜💜. tambien amor perdon por desplazarlo 12 veces JFKWAJFAKJ ojala no te haya dado un patatu mi vida. Felices 1 año y 3 meses mi amor. 💜💜💜",
    },
    {
      desplazamiento: 5,
      pregunta: "¿Que parte de tu cuerpo me encanta?",
      respuestas: ["mi cara", "cara"],
      carta: "Tu hermosa casa es una de las cosas que mas me encanta y la verdad es que literalmente podria quedarme mirando solamente tu hermosa cara por horas mi vida. Amo tu cara literalmente tenes una cara perfecta para mis ojos y me encanta mi vida.",
    },
    {
      desplazamiento: 8,
      pregunta: "¿Quien tuvo mas verguenza?",
      respuestas: ["yo", "tu novia", "tu esposa"],
      carta: "Si amor, la que tuvo mas verguenza creo yo que fuiste vos por que literalmente eras una piba muy insegura pero eso no tiene nada que ver con que no te ame tal como sos, aun que tuviste verguanza amor la verdad es que me gustaste desde el primer dia que nos conocimos y la primera vez que hablamos mi amor.",
    },
  ]
}