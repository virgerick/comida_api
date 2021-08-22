import express from 'express';
import morgan from 'morgan'
import cors from 'cors'
import config from './config'
import  platoRoutes from "./routes/plato.route";
import  accountRoutes from "./routes/account.route";
import  categoryRoutes from "./routes/category.route";
import {json} from "body-parser";


const app=express();


app.set('port',config.PORT);
app.use(json());
app.use(morgan('dev'));
app.use(cors())
// app.use(verseRoutes);
// app.use(bibleRoutes);
// Routers 
app.use(accountRoutes)
app.use(categoryRoutes)
app.use(platoRoutes)



export default app;