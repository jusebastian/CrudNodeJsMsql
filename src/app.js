const express = require('express');
const path = require('path'); 
const morgan = require('morgan');   
const mysql = require('mysql');
const myConnection = require('express-myconnection');          //modulo path se encarga de unir directorios
const app = express();


//Settinggs

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');//almacena todos los archivos que genera el motor de plantillas
app.set('views', path.join(__dirname,'views')); //ubicando la direcciòn del archivo y uniendo los siguiente directorios, dirname se encarga de darme la ruta del archivo que lo ejecuta
//dirnanem se concatena con otro archivo dando a saber que ubica el arcivo que se ejecuta en este caso app.js

//Middleware --> son funciones que se ejecutan antes que la peticiones que realizan los usuarios
//peticiones se puede conocer como Router al servidor
app.use(morgan("dev"));
app.use(myConnection(mysql,{
  host: 'localhost',
  user: 'root',
  password: 'J1s0R9l5',
  port: 3306,
  database: 'crudnodejsmysql'
},'single'));

//routes

//https://www.youtube.com/watch?v=VxRXlUrV6y0
//Ejecutando o Escuchando el servidor
app.listen(app.get('port'), () => {
  console.log('Server on Port 3000');
});

//nodemon-- reinicia el servidor por mi cada vez que hay un cambio

