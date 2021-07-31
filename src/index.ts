import app from './app';
import  './data/database'

app.listen(app.get('port'),()=>{
   console.log(`server on http://localhost:${app.get('port')}`);
    
})