import express from "express";
import dotenv from "dotenv";
import WakaRoute from "./routes/wakaRoutes.js";
import GithubRoute from "./routes/githubRoutes.js";


dotenv.config()
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/waka-time', WakaRoute)
app.use('/github', GithubRoute)


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("Server Started !");
})