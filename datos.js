// Preguntas de la recapitulación (sin la respuesta correcta; esa solo está en resultados/).
const CANAL_BASE = "phasl-s2-recap-m4x7q2k9";
const PREGUNTAS = [
  { t: "Una persona con mando hace comentarios sexuales a alguien de su equipo. ¿Cómo se denomina esta conducta?",
    o: ["Acoso sexual.", "Hostigamiento sexual.", "Conflicto interpersonal."] },
  { t: "Un colega envió una sola vez una imagen sexual por teléfono a una compañera de su mismo nivel. ¿Puede constituir acoso sexual?",
    o: ["Sí: basta un solo evento.", "No: la conducta tiene que repetirse.", "No: ocurrió por teléfono, fuera de la oficina."] },
  { t: "«No era mi intención, solo era una broma.» ¿Qué determina si esa conducta es hostigamiento o acoso?",
    o: ["La intención de quien la dijo.", "Que otras personas también se hayan reído.", "El efecto en quien la recibe y el contexto de poder."] },
  { t: "Un jefe comenta sobre el cuerpo de una persona de su equipo; ella se ríe y no dice nada. ¿Qué podemos concluir?",
    o: ["Nada: reír o callar no es consentir.", "Que consintió el comentario.", "Que no le molestó."] },
  { t: "En un área nadie ha presentado una queja en tres años. ¿Qué podemos concluir?",
    o: ["Que ahí no hay hostigamiento ni acoso.", "Nada por sí solo: el silencio no indica ausencia de casos.", "Que el mecanismo de atención funciona bien."] }
];
// ?canal=ensayo separa las pruebas de la sesión real.
const ENSAYO = (new URLSearchParams(location.search).get("canal") || "").replace(/[^a-z0-9]/gi, "").slice(0, 20);
const CANAL = CANAL_BASE + (ENSAYO ? "-" + ENSAYO : "");
const LETRAS = "ABCD";
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
