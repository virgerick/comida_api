export interface ICreate<T>{
    create(model:T):Promise<T>;
}
export interface IDelete<T>{
    delete(id:any,model:T):Promise<T|null>;
}
export interface IGet<T>{
    get(id?:any):Promise<T|null>;
}
export interface IDelete<T>{
    delete(id:any,model:T):Promise<T|null>;
}
export interface IUpdate<T>{
    update(model:T):Promise<T>;
}

export default interface ICrud<T> extends ICreate<T>, IDelete<T>,IGet<T>, IUpdate<T>{
    create(model:T):Promise<T>;
    delete(id:any,model:T):Promise<T|null>;
    get():Promise<T|null>;
    get(id:any):Promise<T|null>;
    update(model:T):Promise<T>;
}