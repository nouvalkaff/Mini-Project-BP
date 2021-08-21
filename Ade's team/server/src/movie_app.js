const express = require('express')
const cors = require('cors')
const bp = require('body-parser')

const userRouter = require('./routes/userRoute')
const genreRouter = require('./routes/genreRoute')
const charRouter = require('./routes/charRoute')
const movieRouter = require('./routes/movieRoute')
const categoryRouter = require('./routes/categoryRoute')
const reviewsRouter = require('./routes/reviewRoute')

const PORT = process.env.PORT || '5001'

const app = express()

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())

app.use(
  cors({
    origin: "https://movie-app-teamc.herokuapp.com/",
  })
)

app.use('/api', userRouter)
app.use('/api' , genreRouter)
app.use('/api', charRouter) 
app.use('/api', movieRouter) 
app.use('/api', categoryRouter) 
app.use('/api', reviewsRouter) 

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  })