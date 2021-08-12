import mongoose, { Schema, model } from "mongoose";
import bycript, { compareSync, hashSync } from "bcrypt";

export interface User extends mongoose.Document {
  name: string;
  lastname: string;
  username: string;
  password: string;
}
const saltRounds = 10;
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: false,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  direccion:{
      type:String,
      require:false,
  }
});
UserSchema.pre<User>("save", async function (next) {
  try {
    if (this.isNew || this.isModified("password")) {
      this.password = hashSync(this.password, saltRounds);
      next();
    } else {
      next();
    }
  } catch (error: any) {
    next(error);
  }
});
export default model<User>("Users", UserSchema);
