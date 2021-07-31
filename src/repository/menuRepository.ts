import MenuModel, { Menu } from '../models/Menu';
export   class MenuRepository // implements IRepository<Menu>
{
      async get():Promise<Menu[]>{
         return  await MenuModel.find({})
     }
       async  getById(id:any):Promise<Menu|null>{
         return  await MenuModel.findOne({ _id: id })
     }
}
