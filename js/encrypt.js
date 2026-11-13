/* Funciones de cifrado y utilidades de texto */

// Quita acentos: "¿Dónde?" -> "¿Donde?"
const strip = s => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

// Normaliza respuestas para comparar: minusculas, sin acentos ni signos.
// "28/8/25" y "28-8-25" quedan iguales; "Mi  Amor!" queda "mi amor".
const norm = s => strip(s).toLowerCase().replace(/[^a-z0-9 ]/g, "").trim().replace(/\s+/g, " ");

// Cifrado cesar: mueve cada letra k lugares hacia adelante (D con k=1 -> E)
function caesar(text, k) {
  return strip(text).toUpperCase().replace(/[A-Z]/g, c =>
    String.fromCharCode((c.charCodeAt(0) - 65 + k) % 26 + 65));
}

// simbolos para el texto "bloqueado" de la carta
const GLYPHS = "▒░▓#%&@§¤×÷≈";
const randGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
const scramble = s => s.replace(/\S/g, randGlyph);