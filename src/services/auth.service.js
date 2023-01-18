const Users = require('../models/users.model'); //obtenemos el user para comparar si existe ese usuario

class AuthService {
    static async Login(email, password){
        try {
            const result = await Users.findOne({
                where: {email},
            });
            if(result){
                return password === result.password ? {isValid: true, result} : {isValid: false}  // si la contraseña que escribimos al body es igual al del correo guardado existe que le diga que es valido y enviamos los datos del usuario sino que no es valido
            }else{
                return { isValid: false }; // Y false si no encuentra nada en la base de datos que le diga que es invaludo
            }
        } catch (error) {
            throw error;
        }
    }
}

module.exports = AuthService;