import mongoose, { Schema, model } from "mongoose";
import { Category } from './Category';

export interface Plato extends mongoose.Document {
    name: string;
    price: Number;
    rate: Number;
    imagen: string;
    category:String;
};
const PlatoSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: false,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        default: 0,
        validate(value: number) {
            if (value < 0) throw new Error("Negative price aren't real.");
        }
    },
    rate: {
        type: Number,
        required: false,
        default: 0,

    },
    imagen: {
        type: String,
        required: false,
        trim: true
    },
    category:{type:mongoose.Schema.Types.ObjectId,ref:'Categories'},
    
});
export default model<Plato>('Platos',PlatoSchema)