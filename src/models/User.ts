import mongoose, { Schema, model } from "mongoose";
import bycript, { compareSync, hashSync } from "bcrypt";
import Rol from "./Rol";

export interface User extends mongoose.Document {
  name: string;
  lastname: string;
  username: string;
  password: string;
  roles: string;
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
  },
  roles:{
    ref:'Roles',
    type:mongoose.Schema.Types.ObjectId
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
export default model<User & mongoose.Document>("Users", UserSchema);
