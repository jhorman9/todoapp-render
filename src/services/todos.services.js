const Categories = require('../models/categories.models');
const TodosCategories = require('../models/todos-categories.models');
const Todos = require('../models/todos.models');

class TodosServices {
    static async getAll() {
        try {
            const result = await Todos.findAll();
            return result; 
        } catch (error) {
            throw error;
        }
    };

    static async getById(id){
        try {
            const result = await Todos.findByPk(id);
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async create(task) {
        try {
            const result = Todos.create(task);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async updateTask(field, id){
        try {
            const result = Todos.update(field, {
                where: {id}
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async deleteTask(id){
        try {
            const result = Todos.destroy({
                where: {id}
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getWithCategories(id){
        try {
            const result = await Todos.findOne({
                where: {id},
                include:{
                    model: TodosCategories,
                    as:"categories",
                    attributes: ["id"],
                    include:{
                        model:Categories,
                        as: "category",
                    }
                }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = TodosServices;