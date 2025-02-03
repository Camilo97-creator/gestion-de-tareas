const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    dueDate: Date,
    priority: { type: String, enum: ["alta", "media", "baja"], default: "media" },
    status: { type: String, enum: ["pendiente", "completada"], default: "pendiente" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

module.exports = mongoose.model("Task", TaskSchema);
