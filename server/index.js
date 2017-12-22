require('dotenv').config()
const express = require('express')  
    , bodyParser =require('body-parser')
    , massive = require('massive')
    , session = require('express-session')
    , cors = require('cors')
    , ctrl = require('./controller')

const app = express();
const server = require('http').Server(app)
app.use(cors())




massive(process.env.CONNECTION_STRING).then( db => {
    app.set('db', db);
}).catch(err => console.log(err))


app.get('/pictures', ctrl.get_pictures)


const PORT = 3434
server.listen(PORT, () => console.log('Ship has docked on port', PORT))