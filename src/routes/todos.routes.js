//importar el router de express
const { Router } = require('express');
const {getAllTodo, getTodosById, createTodo, updateTodo, deleteTodo, getTodoWithCategories} = require('../controllers/todos.controller');
const authMiddleware = require('../middlewares/auth.middlewares');


const router = Router(); //enrutador

router.get('/todos', authMiddleware , getAllTodo);

router.get('/todos/:id', authMiddleware , getTodosById);

router.get('/todos/:id/categories', authMiddleware, getTodoWithCategories);

router.post('/todos', authMiddleware, createTodo);

router.put('/todos/:id', authMiddleware, updateTodo);

router.delete('/todos/:id', authMiddleware, deleteTodo);


module.exports = router; //para que podamos usarlo en nuestro app.json 
//aqui exportamos el userRouter en app.js