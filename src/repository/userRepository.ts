import { compareSync } from "bcrypt";
import { FilterQuery } from "mongoose";
import UserModel, { User } from "../models/User";
import IRepository from "./IRepository";
const saltRounds = 10;
export class UserRepository implements IRepository<User> {
  async login(model: User) {
    const user = await UserModel.findOne({ username: model.username });
    if (!user) return null;

    if (compareSync(model.password, user!.password)){
        user.password=''
        return user;
    } 
    return null;
  }
  async get(filter?: FilterQuery<User>): Promise<User[]> {
    if (filter != null) return await UserModel.find(filter);
    return await UserModel.find({});
  }
  async find(id: any): Promise<User | null> {
    return await UserModel.findOne({ _id: id });
  }
  async add(model: any): Promise<User | null> {
    return await UserModel.create(model);
  }
  async update(id: any, model: User): Promise<User | null> {
    return await UserModel.findOneAndUpdate({ _id: id }, model);
  }
  async delete(id: any): Promise<User | null> {
    return await UserModel.findByIdAndDelete({ _id: id });
  }
}
