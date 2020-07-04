const express = require('express')
// const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

// mongo db connect

const uri = process.env.DATABASE_URL
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex:true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

const taskRouter = require('./routes/task-routes')
const userRouter = require('./routes/user-routes')
const portoRouter = require('./routes/porto-routes')

app.use('/api/user', userRouter)
app.use('/api/task', taskRouter)
app.use('/api/portofolio', portoRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})