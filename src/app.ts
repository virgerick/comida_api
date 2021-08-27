import express from "express";
import morgan from "morgan";
import cors from "cors";
import { json } from "body-parser";
import config from "./config";
import routes from "./routes";
import path from "path";


const app = express();

app.set("port", config.PORT);
app.use(json());
app.use(morgan("dev"));
app.use('/', express.static(path.join(__dirname, 'public')))

app.use(cors());
// Routes
app.use(routes)

export default app;
