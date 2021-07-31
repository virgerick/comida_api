
interface IRepository<T>{
    get():Promise<T[]>;
     getById(id:any):Promise<T|null>;
    // create( model:T):Promise<T>;
}