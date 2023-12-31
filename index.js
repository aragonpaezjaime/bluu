import "dotenv/config";
import "./database/connectdb.js";
import "./models/users.js";
import express from "express";
import authrouter from "./routes/auth.route.js";

const app = express();
app.use(express.json());
app.use("/api/v1", authrouter);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("escuchando http://localhost:" + PORT));
