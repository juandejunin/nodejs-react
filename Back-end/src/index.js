const express = require("express")
const app = express()

const morgan = require("morgan")
const cors = require("cors")
const bodyparser = require ("body-parser")
const connection = require('./database')

//Conectando con la variable de entorno .env
const PORT = process.env.PORT

//conexion base de datos
connection()

app.set('Port', PORT)

//llamar a morgan en su modo dev
// app.use(morgan('dev'))

//bodyparser
// app.use(bodyparser.urlencoded({extended:true}))
// app.use(bodyparser.json)

//inicializar el servidor

app.listen(app.get('Port'),()=>{
    console.log('escuchando en el puerto', app.get('Port'))
})