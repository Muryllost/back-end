import express from 'express'

const app = express()

app.listen(3000, ()=>{
    console.log('API esta no ar!')
})

app.get('/time', (req, res)=>{
    
})

