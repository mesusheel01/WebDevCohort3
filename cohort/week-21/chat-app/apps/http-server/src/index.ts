import express from 'express'

const app = express()

app.use(express.json())

app.get('/', async (req,res)=>{
    res.send('hi welcome')
})
app.get('/siginup', async (req,res)=>{
    res.send('hi')
})
app.get('/siginin', async (req,res)=>{
    res.send('hi')

})
app.listen(3001)
