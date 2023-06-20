const connectToMongo= require('./db');
const express = require('express')
const cors = require('cors');
const dotenv = require('dotenv');
//Connecting to MongoDB
connectToMongo();

//Initializing Express app
const app = express()
dotenv.config();
//CORS ensures that we are sending the right headers.
app.use(cors());

const port = 5000

//Initializing Apis
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

//The express.json() function is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser. 
app.use(express.json()); 

// app.get('/auth/signup', (req, res) => {
//     res.send('Hello signup')
//   })

//   app.get('/auth/signin', (req, res) => {
//     res.send('Hello signin')
//   })

//available routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})