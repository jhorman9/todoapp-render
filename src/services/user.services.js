const Todos = require('../models/todos.models');
const Users = require('../models/users.model');
const TodosCategories = require('../models/todos-categories.models');

class UserServices {
    static async getAll() { //sera un metodo estatico
        try {
            const result = await Users.findAll();
            return result;
        } catch (error) {
            throw new error;
        }
    }
    
    static async getById(id){
        try {
            const result = Users.findByPk(id);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getWithTasks(id){
        try {
            const result = await Users.findOne({
                where: {id},
                attributes:{
                    exclude: ["password"],
                },
                include: {
                    //attributes: ["title"],//para unicamente dar el titulo, podria tambien ser ["description"]
                    model: Todos, //vamos a ingresar los datos del Todos
                    as: "task",
                    include:{
                        model:TodosCategories,
                        as: "categories",
                    },
                }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async create(user) {
        try {
            const result = Users.create(user);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async update(field, id){
        try {
            const result = Users.update(field, {
                where: {id}
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async delete(id){
        try {
            const result = Users.destroy({
                where: {id}
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = UserServices;
