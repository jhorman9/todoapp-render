const { Router } = require('express');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser, getUserWithTasks } = require('../controllers/users.controller');

const router = Router(); //este es el enrutador

// app.get
// app.post
// app.put
// app.delete

// localhost:8000/users
//controlador
router.get("/users", getAllUsers);

router.get("/users/:id", getUserById);

// Obtener a un usuario con sus tareas
router.get('/users/:id/todos', getUserWithTasks);

router.post("/users", createUser);

router.put("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);

module.exports = router; //para que podamos usarlo en nuestro app.json 
//aqui exportamos el userRouter en app.js