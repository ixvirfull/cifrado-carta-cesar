/* logica del juego

  Cifrado que eligí: Cifrado cesar. Cambiar la letra desplazandolo hacia adelante o hacia atras, por ende cada letra se correra los lugares establecidos en
  "config.js" Y para no romper la cabeza a mi novia siempre se correra hacia atras. ¿quien lee esto?, no lo se pero quien lo lea pues hola

*/

const $ = id => document.getElementById(id);
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const TOTAL = CONFIG.niveles.length;
const COLORS = ["#ff7eb0", "#ffc98a", "#fff4fa", "#ff5c93"];

let done = 0;   // niveles resueltos
let shown = 0;  // para animar la barra de progreso

$("sub").textContent = CONFIG.nombre + `: responde cada pregunta cifrada y la carta se va a ir desbloqueando. Responde la pregunta en el cuadrado que dice "Tu respuesta."`
$("to").textContent = CONFIG.saludo;

const paras = CONFIG.niveles.map(() => {
  const p = document.createElement("p");
  $("paras").appendChild(p);
  return p;
});

function paintParas() {
  paras.forEach((p, i) => {
    if (i < done) { p.className = ""; p.textContent = CONFIG.niveles[i].carta; }
    else { p.className = "locked"; p.textContent = scramble(CONFIG.niveles[i].carta); }
  });
}

/* ---------- Animaciones ---------- */

// Corazones que saltan desde un punto de la pantalla
function burst(x, y, n) {
  if (reduceMotion) return;
  for (let i = 0; i < n; i++) {
    const h = document.createElement("span");
    h.className = "burst";
    h.textContent = Math.random() < 0.7 ? "♥" : "✦";
    h.style.left = x + "px";
    h.style.top = y + "px";
    h.style.color = COLORS[i % COLORS.length];
    h.style.fontSize = (14 + Math.random() * 20) + "px";
    document.body.appendChild(h);
    const a = Math.random() * Math.PI * 2, d = 60 + Math.random() * 140;
    const dx = Math.cos(a) * d, dy = Math.sin(a) * d;
    h.animate([
      { transform: "translate(-50%,-50%) scale(.4)", opacity: 1 },
      { transform: "translate(calc(-50% + " + dx + "px), calc(-50% + " + (dy - 40) + "px)) scale(1)", opacity: 1, offset: 0.7 },
      { transform: "translate(calc(-50% + " + dx * 1.1 + "px), calc(-50% + " + (dy + 40) + "px)) scale(.8)", opacity: 0 }
    ], { duration: 1000 + Math.random() * 600, easing: "cubic-bezier(.2,.7,.3,1)" }).onfinish = () => h.remove();
  }
}

// Corazones lentos de fondo
function ambient() {
  if (reduceMotion) return;
  for (let i = 0; i < 14; i++) {
    const s = document.createElement("span");
    s.className = "fh";
    s.textContent = "♥";
    s.style.left = Math.random() * 100 + "%";
    s.style.fontSize = (10 + Math.random() * 20) + "px";
    s.style.opacity = (0.1 + Math.random() * 0.2).toFixed(2);
    s.style.animationDuration = (16 + Math.random() * 16) + "s";
    s.style.animationDelay = (-Math.random() * 24) + "s";
    $("bg").appendChild(s);
  }
}

// simbolos se van convirtiendo en texto real, con brillito asi bien gay
function decode(el, text) {
  el.className = "live";
  if (reduceMotion) { el.className = ""; el.textContent = text; return; }
  el.textContent = "";
  const ghost = document.createElement("span");   // reserva el tamaño final
  ghost.className = "ghost";
  ghost.textContent = text;
  const anim = document.createElement("span");
  anim.className = "anim";
  el.append(ghost, anim);
  const t0 = performance.now();
  let last = 0; // valor 0 pred
  (function tick(now) {
    if (now - last < 45 && now - t0 < 1900) { requestAnimationFrame(tick); return; }
    last = now;
    const k = (now - t0) / 1900;
    let out = "";
    for (let i = 0; i < text.length; i++) {
      out += (text[i] === " " || k > i / text.length * 0.85 + 0.15) ? text[i] : randGlyph();
    }
    if (k < 1) { anim.textContent = out; requestAnimationFrame(tick); }
    else { el.className = ""; el.textContent = text; }
  })(t0);
}

/* ---------- Pista ---------- */

function hintText(k) {
  const lugares = k + (k > 1 ? " lugares" : " lugar");
  const cifrada = String.fromCharCode(68 + k);
  return "Para esconder el mensaje, cada letra se movio " + lugares + " hacia adelante en el abecedario " +
    "(con este desplazamiento, la D se escribió como " + cifrada + "). Vos hace lo contrario: move cada letra " +
    lugares + " hacia atrás. Por ejemplo, cuando veas " + cifrada + ", la letra real es D.";
}

/* ---------- Pantalla ---------- */

function render() {
  const g = $("game");
  g.innerHTML = "";
  const f = $("firma");
  f.textContent = CONFIG.firma;
  f.hidden = done < TOTAL;

  const card = document.createElement("div");
  card.className = "card";

  // Pantalla final (despues de la firma)
  if (done >= TOTAL) {
    card.classList.add("end");
    const days = Math.max(0, Math.floor((Date.now() - new Date(CONFIG.inicio)) / 864e5));
    card.innerHTML = "<h2>Lo lograste mi vida</h2><p>Aldia de hoy llevamos" + days + " dias juntos y quiero decirte que gracias por siempre ser la mujer que esta a mi lado pase lo que pase mi vida. Gracias enserio por estar aca y la verdad amor es que espero que te haya gustado el cirfrado de cesar como a mi me gusto programarlo (lo odio)... Nada amor te amo una banda mi vida y espero que te haya gustado y te haya roto la cabeza el cifrado de cesar.</p>";
    const b = document.createElement("button");
    b.className = "ghost";
    b.textContent = "Jugar de nuevo";
    b.onclick = () => { done = 0; shown = 0; paintParas(); render(); window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }); };
    card.appendChild(b);
    g.appendChild(card);
    f.after(g);
    return;
  }

  // La pregunta aparece justo antes del primer párrafo bloqueado
  const n = CONFIG.niveles[done];
  card.innerHTML =
    '<p class="step">Nivel ' + (done + 1) + " de " + TOTAL + "<small>desplazamiento del cifrado cesar ahora mismo: " + n.desplazamiento + "</small></p>" +
    '<div class="bar"><i></i></div>' +
    '<div class="cipher"></div>' +
    '<input id="ans" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="send" placeholder="Tu respuesta" aria-label="Tu respuesta">' +
    '<div class="btns"><button id="ok">Comprobar</button><button id="hint" class="ghost">Pista</button></div>' +
    '<p class="msg" id="msg"></p><p class="hint" id="hintTxt" hidden></p>';
  g.appendChild(card);
  paras[done].before(g);

  card.querySelector(".cipher").textContent = caesar(n.pregunta, n.desplazamiento);

  // Barra de progreso animada desde el nivel anterior
  const bar = card.querySelector(".bar i");
  bar.style.width = (shown / TOTAL * 100) + "%";
  requestAnimationFrame(() => requestAnimationFrame(() => { bar.style.width = (done / TOTAL * 100) + "%"; }));
  shown = done;

  const input = $("ans"), msg = $("msg");
  $("hint").onclick = () => { const h = $("hintTxt"); h.textContent = hintText(n.desplazamiento); h.hidden = false; };

  const check = () => {
    const a = norm(input.value);
    if (!a) { msg.textContent = "Escribí tu respuesta primero."; return; }
    if (n.respuestas.map(norm).includes(a)) {
      const r = $("ok").getBoundingClientRect();
      const i = done;
      done++;
      burst(r.left + r.width / 2, r.top, 26);
      render();
      decode(paras[i], n.carta);
      paras[i].scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      if (done >= TOTAL) {
        for (let j = 0; j < 6; j++) {
          setTimeout(() => burst(innerWidth * (0.15 + Math.random() * 0.7), innerHeight * (0.25 + Math.random() * 0.4), 24), 500 + j * 350);
        }
      }
    } else {
      msg.textContent = "Repuesta incorrecta. Desifra la pregunta con la pista. proba de nuevo en desencriptar la pregunta encriptada para obtener la pregunta y poder responder.";
      card.classList.add("bad");
      card.classList.remove("shake");
      void card.offsetWidth;
      card.classList.add("shake");
    }
  };
  $("ok").onclick = check;
  input.addEventListener("keydown", e => { if (e.key === "Enter") check(); });
  input.addEventListener("input", () => { card.classList.remove("bad"); msg.textContent = ""; });
}

ambient();
paintParas();
render();
