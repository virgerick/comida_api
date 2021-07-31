import { Router } from 'express'
import  { MenuRepository }  from "../repository/menuRepository";
const router = Router();
const Repostory:MenuRepository=new MenuRepository();

router.get('/menu', async (req, res) => {
    const result = await Repostory.get();
    res.json(result)
})

export default router