import { teclado } from './script.js';

let teclaAnterior;
document.addEventListener("keydown", (e) => {
    if (teclaAnterior == "Quote" || teclaAnterior == "BracketLeft") document.getElementById(teclaAnterior).classList.remove("pulsada");
    teclaAnterior = e.code;

    const tecla = teclado.teclas.get(e.code);
    if (tecla) tecla.pulsar();

});

document.addEventListener("keyup", (e) => {
    const tecla = teclado.teclas.get(e.code);
    if (tecla) tecla.soltar();
});