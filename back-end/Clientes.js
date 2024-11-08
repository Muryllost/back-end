class Clientes{
    constructor(id, nome, data_nasc, telefone){
        this.id = id
        this.nome = nome
        this.data_nasc = data_nasc
        this.telefone = telefone
    }
}

export let lista_clientes = 
    [
        new Clientes(1,'teste','2007-12-08',17997289976),
        new Clientes(2,'teste','2007-12-05',17997289956),
        new Clientes(3,'teste','2007-12-06',17997289276),
        new Clientes(4,'teste','2007-12-10',17997289973),
        new Clientes(5,'teste','2007-12-07',17997286976),
    ] 

    console.log(lista_clientes)