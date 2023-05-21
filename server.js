import express from "express";
import cookieParser from "cookie-parser";
import db from "./config/db.js";
import cors from "cors";
import router from "./routes/route.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

try {
    await db.authenticate();
    console.log('Database Tersambung ....')
} catch (error) {
    console.error(error);
}

app.use(cors({ credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, () => {
    console.log('Server berjalan pada http://localhost:5000');
});
