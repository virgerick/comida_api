import mongoose, { Schema, model } from "mongoose";

export interface Category extends mongoose.Document {
  name: string;
}
const CategorySchema=new Schema({
    name:{
        type:String,
        required:true
    }
    
});

export default model<Category & mongoose.Document>("Categories",CategorySchema);