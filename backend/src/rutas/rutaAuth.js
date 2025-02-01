const express = require("express");
const { registerUser, loginUser } = require("../controladores/authControlador");

const router = express.Router();

router.post("/registrar", registerUser);
router.post("/login", loginUser);

module.exports = router;