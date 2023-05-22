import express from "express";
import cookieParser from "cookie-parser";
// import db from "./config/db.js";
import cors from "cors";
import router from "./routes/route.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config();

const app = express();

// try {
//     await db.authenticate();
//     console.log('Database Tersambung ....')
// } catch (error) {
//     console.error(error);
// }

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.get("/", (req, res) => {
    console.log("Response success")
    res.send("Response Success!")
});

app.use(router);

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log("Server is up and listening on " + PORT)
});
