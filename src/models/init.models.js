//vamos a importar todos nuestros modelos creados
const Users = require('./users.model');
const Todos = require('./todos.models');
const Categories = require('./categories.models');
const TodosCategories = require('./todos-categories.models');

const initModels = () => {
    // Vamos a crear las relaciones
    // hasOne --> para indicar que tiene un
    // hasMany --> tiene mucho
    // belongsTo --> pertenece a 
    Todos.belongsTo(Users, {as: 'author', foreignKey: 'user_id'}); //con belongsTo sabe que tiene la llave foranea, as es para decir quien lo hizo y foreinKey es para decir como se llama la llave foranea
    Users.hasMany(Todos, {as: 'task', foreignKey: 'user_id'});

    // Relacion M-M categorias y tareas
    TodosCategories.belongsTo(Todos, {as: 'task', foreignKey:'todo_id'});
    Todos.hasMany(TodosCategories, {as: 'categories', foreignKey: 'todo_id'});

    TodosCategories.belongsTo(Categories, {as: 'category', foreignKey: 'category_id'});
    Categories.hasMany(TodosCategories, {as: 'task', foreignKey: 'category_id'});

    Categories.belongsTo(Users, {as: 'user', foreignKey: 'user_id'});
    Users.hasMany(Categories,{as: 'category', foreignKey: 'user_id'});
}

module.exports = initModels;