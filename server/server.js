// Dependencies
import express from "express";
import dotenv from "dotenv";
import database from "./database/index.js";

// App instantiations
const app = express();
dotenv.config();

// Database
database();

// Middlewares
app.use(express.json({ limit: "60mb", extended: true }));
app.use(express.urlencoded({ limit: "60mb", extended: true }));
app.use(express.static("public"));

// Routes
import homeRoutes from "./routes/homeRoutes.js";
app.use("/", homeRoutes);

// App port
const PORT = process.env.PORT || 8080;

// Listening App
app.listen(PORT, () => console.log(`App running in port ${PORT}`));
