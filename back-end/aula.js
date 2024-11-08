//padrao ES6^
import express from 'express'
import { lista_clientes } from './Clientes.js'

const app = express()// sempre o parenteses marca uma funçao ou metodo como nos vetores

// app.get("/:idade",(requisicao, resposta)=>{
//         const {idade} = requisicao.params
//         if(idade >= 18)
//         {
//             return resposta.send('acesso liberado')
//         }
//         else
//         {
//             return resposta.send(' negado')
//         }
// })


app.get('/login/:email/:senha',(req, res)=>{
    const { email, senha } = req.params
        if(email == 'teste@gmail.com' && senha == '123')
        {
            return res.send('bem vindo!')
        }
        else{
            return res.send('incorreto!')
        }
})

app.get('/clientes', (req, res)=>{
    return res.send(lista_clientes)
})

//"levantando" minh API na porta 3000
app.listen(3000, ()=>{
    console.log('API esta no ar!')
})