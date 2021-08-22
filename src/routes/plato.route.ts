import { Plato } from "../models/Plato";
import { Router } from "express";
import { PlatoRepository } from "../repository/platoRepository";
const router = Router();
const Repostory: PlatoRepository = new PlatoRepository();
const endPoint='/api/platos/'
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
