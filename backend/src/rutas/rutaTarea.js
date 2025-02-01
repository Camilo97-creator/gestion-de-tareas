const express = require("express");
const { createTask, getTasks } = require("../controladores/tareasControlador");
const authMiddleware = require("../middleware/middlewareAutenticacion");

const router = express.Router();

router.post("/", authMiddleware, createTask);
router.get("/", authMiddleware, getTasks);

module.exports = router;