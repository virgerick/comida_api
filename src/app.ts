import express from 'express';
import morgan from 'morgan'
import cors from 'cors'
import config from './config'
import  menuRoutes from "./routes/menu.route";


const app=express();


app.set('port',config.PORT);

app.use(morgan('dev'));
app.use(cors())
// app.use(verseRoutes);
// app.use(bibleRoutes);
// Routers 
app.use(menuRoutes)


export default app;