const { Sequelize } = require('sequelize');
require("dotenv").config();
// Crear una instancia con parametros de configuracion de nuestra base de datos
// Un objeto de configuracion ---> credenciales de mi base de datos
const db = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    host: process.env.DB_HOST, //127.0.0.1
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    dialect: "postgres", //la base de datos que estamos usando
    logging: false, //para que no nos de toda la informacion en la consola y nos llene la consola
});

module.exports = db;

//instalar DOTENV:
//npm install dotenv --save
// para más info: https://www.npmjs.com/package/dotenv