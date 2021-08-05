import { FilterQuery } from "mongoose";

export default interface IRepository<T> {
  get(filter?: FilterQuery<T>): Promise<T[]>;
  find(id: any): Promise<T | null>;
  add(model: T): Promise<T | null>;
  update(id: any,model: T): Promise<T | null>;
  delete(id: any): Promise<T | null>;
}
