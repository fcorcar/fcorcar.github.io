import { Teclado } from './Teclado.js';
import { cargar } from './api.js';


export const teclado = new Teclado('contenedor', await cargar('./json/data.json'));





