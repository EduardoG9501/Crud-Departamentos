const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

//Importando las rutas
const DepartamentosRoutes = require('./routes/departamentos');


//settings 
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//middlewares
app.use(morgan('dev')); 
app.use(myConnection(mysql, {

    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'cruddepartamentos',
}, 'single'));
app.use(express.urlencoded({extended: false}));




//routes 
app.use('/', DepartamentosRoutes);
//Statics File
app.use(express.static(path.join(__dirname, 'public')));



//Iniciando el servidor
app.listen(app.get('port'), () => {
 console.log('Servidor en el puerto 3000');    
});
