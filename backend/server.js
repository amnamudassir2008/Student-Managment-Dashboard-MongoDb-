const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const connectDB = require("./config/db");
const app = express();
app.use(cors()); app.use(express.json());
app.use("/api/students", require("./routes/studentRoutes"));
app.get("/", (req,res)=>res.send("Student Management API is Running"));
const PORT=process.env.PORT||5000;
connectDB().then(()=>app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))).catch(error=>{console.error("Unable to start server:",error.message);process.exit(1);});
