import { Tecla } from './Tecla.js';

export class Teclado {

    constructor(ubicacion, teclas) {
        this.ubicacion = ubicacion;
        this.teclas = new Map(teclas.map(t => [t.id, new Tecla(t.id, t.ancho, t.alto, t.posicion, t.valor, t.isIcon)]));

        this.mostrarTeclas();
        this.setearTeclas();
    }

    mostrarTeclas() {
        const contenedor = document.getElementById(this.ubicacion);
        let divs = [];
        
        this.teclas.forEach(tecla => {
            divs[tecla.posicion] ??= document.createElement('div');
            
            const boton = document.createElement('button');
            boton.classList.add('tecla');
            boton.id = tecla.id; //ID
            boton.style.width = tecla.ancho; //Ancho
            boton.style.height = tecla.alto; //Alto

            if (tecla.isIcon) { //Icono
                const span = document.createElement('span');
                span.classList.add('material-symbols-outlined');
                span.textContent = tecla.valor;
                boton.appendChild(span);

            } else {
                boton.textContent = tecla.valor; //Texto
            }
            
            divs[tecla.posicion].appendChild(boton);
        });

        divs.forEach(div => {
            contenedor.appendChild(div);
        });
    }

    setearTeclas(){
        this.teclas.forEach(tecla => {
            tecla.setEtiqueta();
        });
    }

}