const jwt = require('jsonwebtoken')

const middlewareAutenticacion = (req, res, next) =>{
    const token = req.headers('authorization');

    if(!token){
        return res.status(401).json({ mensaje:"Acceso denegado, token no proporcionado"});

        try{
            const decode = jwt.verify(token, process.env.jwt_SECRET);
            req.userId = decode.userId;
            next();
        }catch(error){
            res.status(401).json({mensaje:"Token inválido"});
        }
    };
};

module.exports = middlewareAutenticacion;