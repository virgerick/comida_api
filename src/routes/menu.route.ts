import { Menu } from "../models/Menu";
import { Router } from "express";
import { MenuRepository } from "../repository/menuRepository";
const router = Router();
const Repostory: MenuRepository = new MenuRepository();

router.get("/menu", async (req, res) => {
 
  const result = await Repostory.get(req.query);
  res.json(result);
});
router.get("/menu/:id", async (req, res) => {
  const result = await Repostory.find(req.params.id);
  res.json(result);
});
router.post("/menu/", async (req, res) => {
  const result = await Repostory.add(req.body);
  res.json(result);
});
router.put("/menu/:id", async (req, res) => {
  const result = await Repostory.update(req.params.id,req.body);
  res.json(result);
});
router.delete("/menu/:id", async (req, res) => {
  const result = await Repostory.delete(req.params.id);
  res.json(result);
});

export default router;
