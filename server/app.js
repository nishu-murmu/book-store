import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

//Routes
import BookRoutes from './routes/bookRoutes.js'
import PublisherRoutes from './routes/publisherRoutes.js'

const app = express()

dotenv.config({ path: '.env' })
mongoose.set('strictQuery', true)
const port = process.env.PORT || 3001
const url = process.env.MONGO_URI

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//middle-wares
app.use('/book', BookRoutes)
app.use('/publisher', PublisherRoutes)

//error handling
app.use((err, req, res, next) => {
  console.log('Error handling middleware is called:')
  console.log(`Path: ${req.path}`)
  console.log(`Error is ${err}`)
})

app.use('/', (req, res, next) => {
  try {
    res.send('Backend and main route is working')
  } catch (err) {
    next(err)
    console.log(`Error while checking the main route ==> ${err}`)
  }
})

const connect = async () => {
  try {
    mongoose.connect(url)
    console.log(`Connected to MongoDB`)
  } catch (err) {
    console.log(`Error while connecting to MongoDB ==> ${err}`)
  }
}

app.listen(port, () => {
  connect()
  console.log(`Backend running in port ${port}`)
})
