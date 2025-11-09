export class Tecla {
    
    constructor(id, ancho, alto, posicion, valor, isIcon){
        this.id = id;
        this.ancho = ancho;
        this.alto = alto;
        this.posicion = posicion;
        this.valor = valor;
        this.isIcon = isIcon;
        this.etiqueta = null;
    }

    setEtiqueta(){
        this.etiqueta = document.getElementById(this.id);
    }

    pulsar(){
        this.etiqueta.style.width = `calc(${this.ancho} - 0.2rem)`;
        this.etiqueta.style.height = `calc(${this.alto} - 0.2rem)`;
        this.etiqueta.classList.add("pulsada");
    }

    soltar(){
        this.etiqueta.style.width = this.ancho;
        this.etiqueta.style.height = this.alto;
        this.etiqueta.classList.remove("pulsada");
    }
}