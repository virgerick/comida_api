import mongoose, { Schema, model } from "mongoose";

export interface Rol extends mongoose.Document {
  name: string;
}
const RolSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  permissions: [
    {
      ref: "Permissions",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

export default model<Rol & mongoose.Document>("Roles", RolSchema);
