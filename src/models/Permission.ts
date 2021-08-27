import mongoose, { Schema, model } from "mongoose";

export interface Permission extends mongoose.Document {
  name: string;
  description: string;
}
const PermissionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  
  description: {
    type: String,
    required: true,
  },
  
});

export default model<Permission & mongoose.Document>("Permissions", PermissionSchema);
