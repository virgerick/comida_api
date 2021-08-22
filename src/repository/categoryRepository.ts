import { FilterQuery } from "mongoose";
import CategoryModel, { Category } from "../models/Category";
import IRepository from "./IRepository";

export class CategoryRepository implements IRepository<Category> {
  async get(filter?: FilterQuery<Category>): Promise<Category[]> {
    if (filter != null) return await CategoryModel.find(filter);
    return await CategoryModel.find({});
  }
  async find(id: any): Promise<Category | null> {
    return await CategoryModel.findOne({ _id: id });
  }
  async add(model: any): Promise<Category | null> {
    console.log(model);
    
    return await CategoryModel.create(model);
  }
  async update(id: any, model: Category): Promise<Category | null> {
    return await CategoryModel.findOneAndUpdate({ _id: id },model);
  }
  async delete(id: any): Promise<Category | null> {
    return await CategoryModel.findByIdAndDelete({_id:id})
  }
}
