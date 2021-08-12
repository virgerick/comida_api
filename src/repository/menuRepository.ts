import { FilterQuery } from "mongoose";
import MenuModel, { Menu } from "../models/Menu";
import IRepository from "./IRepository";

export class MenuRepository implements IRepository<Menu> {
  async get(filter?: FilterQuery<Menu>): Promise<Menu[]> {
    if (filter != null) return await MenuModel.find(filter);
    return await MenuModel.find({});
  }
  async find(id: any): Promise<Menu | null> {
    return await MenuModel.findOne({ _id: id });
  }
  async add(model: any): Promise<Menu | null> {
    console.log(model);
    
    return await MenuModel.create(model);
  }
  async update(id: any, model: Menu): Promise<Menu | null> {
    return await MenuModel.findOneAndUpdate({ _id: id },model);
  }
  async delete(id: any): Promise<Menu | null> {
    return await MenuModel.findByIdAndDelete({_id:id})
  }
}
