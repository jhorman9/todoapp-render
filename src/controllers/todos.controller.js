const TodosServices = require('../services/todos.services');

const getAllTodo =  async(req, res) => {
    try {
        const result = await TodosServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const getTodosById = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await TodosServices.getById(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const createTodo = async (req,res) => {
    try {
        const newTask = req.body;
        const result = await TodosServices.create(newTask);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const getTodoWithCategories = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await TodosServices.getWithCategories(id);
        res.status(200).json({
            message: "Enviando tareas con categorias",
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            error: error.message,
            details: error.stack,
        });
    }
};

const updateTodo = async (req, res) => {
    try {
        const {id} = req.params;
        const field = req.body;
        const result = await TodosServices.updateTask(field, id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const deleteTodo = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await TodosServices.deleteTask(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};


module.exports = {
    getAllTodo,
    getTodosById,
    getTodoWithCategories,
    createTodo,
    updateTodo,
    deleteTodo
};