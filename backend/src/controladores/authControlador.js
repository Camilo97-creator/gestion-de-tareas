const usuario = require("../modelos/usuario");
const bcrypt = require("bcrypt");
const generarToken = require ("../utils/generarToken");

const registrarUsuario = async (req , res) => {
    try {
        const{nombre, correo, contraseña} = req.body;
        const usuarioExistente = await User.findOne ({correo});

        if (usuarioExistente) return res.status(400).json ({mensaje:"El usuario ya existe"});
        const hashedPassword = await bcrypt.hash(contraseña, 10);
        await nuevoUsuario.save();
        res.status(201).json({mensaje: "Usuario registrado con éxito"});
    }catch(error){
        res.status(500).json({mensaje:"Error en el servidor"})
    };
};

const loginUsuario = async (req , res) =>{
    try {
        const {correo, contraseña} =req.body;
        const usuario = await User.findOne ({correo});

        if (!usuario) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }

        const esValida = await bcrypt.compare(password, usuario.password);
        if (!esValida) {
            return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
        }

        const token = generarToken ( usuario._Id);
        res.json({token});
    }catch (error) {
        res.status(500).json({mensaje: "Error en el servidor"});
    }
};

module.exports = {registrarUsuario, loginUsuario};