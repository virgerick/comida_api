import mongoose, { ConnectionOptions } from 'mongoose';
import config from '../config/index'

(async () => {
    try {
         const mongooseOptions: ConnectionOptions = {
        useUnifiedTopology: true,
        useNewUrlParser: true,
         auth:{
             user:config.MONGO_USER,
             password:config.MONGO_PASSWORD
         }
    }
    const db = await mongoose.connect(`mongodb+srv://${config.MONGO_HOST}/${config.MONGO_DATABASE}`, mongooseOptions);
    console.log('Database is conected to:', db.connection.name);
    } catch (error) {
        console.error(error);
        
    }
   
}
)()