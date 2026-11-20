const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
 firstName: { type: String, required: true, trim: true },
 lastName: { type: String, required: true, trim: true },
 email: { type: String, required: true, unique: true, trim: true, lowercase: true }
}, { timestamps: true });
// Explicitly use the Atlas collection named Student-Dashboard.
module.exports = mongoose.model("Student", studentSchema, "Student-Dashboard");
