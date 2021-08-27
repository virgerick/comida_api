import { Router } from "express";
import { RolRepository } from "../repository/rolRepository";
const router = Router();
const Repostory: RolRepository = new RolRepository();
const endPoint='/api/roles/'
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
