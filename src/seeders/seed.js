const db = require('../utlis/database');
const Users = require('../models/users.model');
const Todos =  require('../models/todos.models');
const Categories = require('../models/categories.models');
const TodosCategories = require('../models/todos-categories.models');

const users = [
    {username: 'Jhorman', email:'Jhorman@hotmail.com', password: '1234'},
    {username: 'Steven', email:'Steven@hotmail.com', password: '1234'},
    {username: 'Luis', email:'Luis@hotmail.com', password: '1234'}
];  

const todos = [
    {title: 'Estudiar node',description: 'descripcion para 1',user_id: 1}, //por default isComplete es false
    {title: 'Pasear al perro',description: 'descripcion para 1',user_id: 1},//por default isComplete es false 
    {title: 'Lavar platos',description: 'shlala gasd',user_id: 2},//por default isComplete es false
    {title: 'Ir al chequeo mensual',description: 'descripcion para 2',user_id: 2},//por default isComplete es false
];

const categories = [
    {name: 'personal'},//1
    {name: 'educacion'},//2
    {name: 'salud'},//3
    {name: 'trabajo'},//4
    {name: 'hogar'},//5
    {name: 'cocina'},//6
    {name: 'deporte'},//7
    {name: 'ocio'},//8
    {name: 'financiero'},//9
    {name: 'entretenimiento'}//10
  ];  

const todosCategories = [
   { categoryId: 1, todoId: 1 },
   { categoryId: 2, todoId: 1 },
   { categoryId: 4, todoId: 1 },
   { categoryId: 1, todoId: 2 },
   { categoryId: 7, todoId: 2 },
   { categoryId: 10, todoId: 2 },
   { categoryId: 3, todoId: 2 },
   { categoryId: 5, todoId: 3 },
   { categoryId: 6, todoId: 3 },
   { categoryId: 1, todoId: 4 },
   { categoryId: 3, todoId: 4 },
];  

//create //insertar
//findOne, findAll, findByPk //unicoelemento//select * from//buscaunelementodelatabla
//update
//destroy

db.sync({force: true})
.then(() => {
    console.log('Iniciando con el sembradio malicioso');
    users.forEach((user) => Users.create(user)); //INSERT INTO users
    
    //Si lo hacemos sin el setTimeOut da este error:   original: error: inserción o actualización en la tabla «todos» viola la llave foránea «todos_user_id_fkey»
    setTimeout(() => {
        todos.forEach((todo) => Todos.create(todo));
    }, 100);
    setTimeout(() =>{
        categories.forEach((category) => Categories.create(category));
    },200);
    setTimeout(() =>{
        todosCategories.forEach((tc) => TodosCategories.create(tc));
    },300);
})
.catch(error => console.log(error));