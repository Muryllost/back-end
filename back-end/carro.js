
import express from 'express'

const app = express()

class Carro {

    constructor(marca, modelo, quilometragem) {
        this.marca = marca;
        this.modelo = modelo;
        this.quilometragem = quilometragem;
    }
    
    acelerar() {
        this.quilometragem += 1000;
        console.log(`${this.quilometragem} km a contagem de quilometragem do objeto.`);
    }
 }
 