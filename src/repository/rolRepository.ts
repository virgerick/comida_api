import { FilterQuery } from "mongoose";
import IRepository from "./IRepository";
import RolModel, { Rol } from '../models/Rol';

export class RolRepository implements IRepository<Rol> {
  async get(filter?: FilterQuery<Rol>): Promise<Rol[]> {
    
    if (filter != null) return await RolModel.find(filter);
    return await RolModel.find({});
  }
  async find(id: string): Promise<Rol | null> {
    return await RolModel.findOne({ _id: id });
  }
  async add(model: Rol): Promise<Rol | null> {
   
    return await RolModel.create(model);
  }
  async update(id: string, model: Rol): Promise<Rol | null> {
    return await RolModel.findOneAndUpdate({ _id: id },model);
  }
  async delete(id: any): Promise<Rol | null> {
  
    return await RolModel.findByIdAndDelete({_id:id})
  }
}
