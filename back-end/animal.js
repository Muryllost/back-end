import express from 'express'

const app = express()


class Animal{
    constructor(reino,filo,classe,ordem,familia,genero,especie) {
 
        this.reino = reino
        this.filo = filo
        this.classe = classe
        this.ordem = ordem
        this.familia = familia
        this.genero = genero
        this.especie = especie
    }


    som() {
        return "som animal"
    }
      
 }



