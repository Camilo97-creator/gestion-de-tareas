const JWT = require ("jsonwebtoken");

const generarToken = (userId) => {
    return JWT.sign ({userId}, process.env.JWT_SECRET,{expiresIn:"1h"});
};

module.exports = generarToken;