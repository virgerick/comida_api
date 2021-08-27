import { FilterQuery } from "mongoose";
import IRepository from "./IRepository";
import PermissionModel, { Permission } from '../models/Permission';

export class PermissionRepository implements IRepository<Permission> {
  async get(filter?: FilterQuery<Permission>): Promise<Permission[]> {
    
    if (filter != null) return await PermissionModel.find(filter);
    return await PermissionModel.find({});
  }
  async find(id: string): Promise<Permission | null> {
    return await PermissionModel.findOne({ _id: id });
  }
  async add(model: Permission): Promise<Permission | null> {
   
    return await PermissionModel.create(model);
  }
  async update(id: string, model: Permission): Promise<Permission | null> {
    return await PermissionModel.findOneAndUpdate({ _id: id },model);
  }
  async delete(id: any): Promise<Permission | null> {
  
    return await PermissionModel.findByIdAndDelete({_id:id})
  }
}
