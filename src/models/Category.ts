import mongoose, { Schema, model } from "mongoose";
import { Plato } from './Plato';

export interface Category extends mongoose.Document {
  name: string;
}
const CategorySchema=new Schema({
    name:{
        type:String,
        required:true
    }
    
});

export default model<Category>("Categories",CategorySchema);