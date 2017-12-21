require('dotenv').config()
const express = require('express')  
    , bodyParser =require('body-parser')
  
    , session = require('express-session')
    , cors = require('cors')
    , ctrl = require('./controller')

const app = express();
const server = require('http').Server(app)
app.use(cors())


const PORT = 3434
server.listen(PORT, () => console.log('Ship has docked on port', PORT))