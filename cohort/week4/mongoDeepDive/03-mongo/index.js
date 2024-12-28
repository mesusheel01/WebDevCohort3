import express from 'express'
import adminRouter from './routes/admin.js'
import userRouter from './routes/user.js'
import './db/index.js'


const app = express()
const port = 3000

app.use(express.json())

app.use('/admin', adminRouter)
app.use('/user', userRouter)

app.listen(port, ()=>{
    console.log(`Server is listening at http://localhost:${port}`);
})
