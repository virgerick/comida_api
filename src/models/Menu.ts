import mongoose, { Schema, model } from "mongoose";

export interface Menu extends mongoose.Document {
    name: string;
    price: Number;
    rate: Number;
    imagen: string;
};
const MenuSchema = new Schema({
    name: {
        type: String,
        required: true,
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
});
export default model<Menu>('Menu',MenuSchema)