import { FilterQuery } from "mongoose";
import CategoryModel from "../models/Category";
import IRepository from "./IRepository";
import PlatoModel, { Plato } from '../models/Plato';

export class PlatoRepository implements IRepository<Plato> {
  async get(filter?: FilterQuery<Plato>): Promise<Plato[]> {
    let data:Plato[];
    if (filter != null) data= await PlatoModel.find(filter);
    data= await PlatoModel.find({});
data.map(async(x)=>{
  const category=await CategoryModel.findById(x.category)
  return {...x,category}
})
    return data;
  }
  async find(id: string): Promise<Plato | null> {
    return await PlatoModel.findOne({ _id: id });
  }
  async add(model: Plato): Promise<Plato | null> {
   
    return await PlatoModel.create(model);
  }
  async update(id: string, model: Plato): Promise<Plato | null> {
    return await PlatoModel.findOneAndUpdate({ _id: id },model);
  }
  async delete(id: any): Promise<Plato | null> {
  
    return await PlatoModel.findByIdAndDelete({_id:id})
  }
}
