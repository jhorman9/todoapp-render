const AuthService = require('../services/auth.service');
const jwt = require('jsonwebtoken'); //se instala con npm i jsonwebtoken
require('dotenv').config();

const userLogin = async (req, res) => {
    try {
        const {email, password} = req.body; //destructuramos el email y password escrito en el body
        const response = await AuthService.Login(email, password); // la enviamos a un servicio
        // {isValid: true/false}
        if(response.isValid){//le enviamos los datos que dijimos en services si es valido
            const data = {
                email: response.result.email, //result del servicio
                username: response.result.username,
                id: response.result.id,
            }
            // firmamos un nuevo token al JWT
            //jwt.sign(payload, secretOrPrivateKey, [options, callback])
            const token = jwt.sign(data, process.env.JWT_SECRET, {algorithm: "HS512", expiresIn: "1m"});//usamos la libreria de JWT
            data.token = token; //creamos la propiedad token y pasamos el token
            res.status(200).json(data);
        }else{
            res.status(401).json( {message: "Credenciales invalidas"} ) //401 Unauthorized
        }
        // res.json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    userLogin
}

//Para más info sobre el JWT: https://jwt.io/
//https://www.npmjs.com/package/jsonwebtoken
// Preferiblemente HS512 para más fps