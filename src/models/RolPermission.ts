import mongoose, { Schema, model } from "mongoose";
import Permission from "./Permission";
import Rol from "./Rol";

export interface RolPermission extends mongoose.Document {
  name: string;
}
const RolPermissionSchema=new Schema({
    rol: Rol,
    permission:Permission
});

export default model<RolPermission & mongoose.Document>("RolPermissions",RolPermissionSchema);