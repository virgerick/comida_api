import { Menu } from "../models/Menu";
import { Router } from "express";
import { MenuRepository } from "../repository/menuRepository";
const router = Router();
const Repostory: MenuRepository = new MenuRepository();
const endPoint='/api/menu/'
router.get(endPoint, async (req, res) => {
 try {
     const result = await Repostory.get(req.query);
     res.status(200).json(result);
 } catch (error) {
     res.json(error)
 }
  
  
});
router.get(`${endPoint}:id`, async (req, res) => {
    try {
         const result = await Repostory.find(req.params.id);
  res.json(result);
    } catch (error) {
        res.json(error)
    }
 
});
router.post(endPoint, async (req, res) => {
    try {
         const result = await Repostory.add(req.body);
  res.json(result);
    } catch (error) {
        res.json(error)
    }
 
});
router.put(`${endPoint}:id`, async (req, res) => {
    try {
        const result = await Repostory.update(req.params.id,req.body);
        res.json(result);
    } catch (error) {
        
    }
  
});
router.delete(`${endPoint}:id`, async (req, res) => {
    try {
        const result = await Repostory.delete(req.params.id);
  res.json(result);
    } catch (error) {
        res.json(error)
    }
  
});

export default router;
