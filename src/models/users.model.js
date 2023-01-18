// instancia para la conexion de la db
const db = require('../utlis/database');
// Tipos de datos de Sequelize(varchar(SQL))---> STRING
const {DataTypes} = require('sequelize');

// definir el modelo de usuarios
// los medelos se definen con una mayuscula

// Parametros
// nombre de la tabla
// atributos de las tablas ( objeto )
const Users = db.define('users',{
    id: {
        primaryKey: true, //llave primaria
        type: DataTypes.INTEGER,//tipo de datos
        autoIncrement: true, //increment
        allowNull: false, //not null
        unique: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{ //validar email
            isEmail: true
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Users;