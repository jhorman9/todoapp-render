// Importamos express
const express = require('express');
const db = require('./utlis/database'); //importamos
const initModels = require('./models/init.models');
const userRoutes = require('./routes/users.routes');
const todoRoutes = require('./routes/todos.routes');
const authRoutes = require('./routes/auth.routes');
const cors = require('cors');//Es un middleware de terceros, se usa porque cuando recibimos 2 peticiones de diferentes host dá error, con esto logramos que funcione.
require('dotenv').config();

// crear una instancia de express
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

// probando la conexion a la base de datos
db.authenticate()//devuelve una promesa
.then(() => console.log('Autenticacion exitosa'))
.catch((error) => console.log(error));

initModels();

// vamos a usar el metodo sync para sincronizar la informacion de la base de datos
//devuelve una promesa y la resolvemos con then

db.sync({force: false}) //devuelve una promesa // No existe la tabla la creo con alter
.then(() => console.log('Base de datos sincronizada'))
.catch((error) => console.log(error));

app.get('/', (req, res) => {
    //codigo de estado
    res.status(200).json({message: 'Bienvenido al servidor'});
});

app.use('/api/v1', userRoutes); //este es el middleware de rutas
app.use('/api/v1', todoRoutes);
app.use("/api/v1", authRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});