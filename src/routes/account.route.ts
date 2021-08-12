import { User } from "../models/User";
import { Router } from "express";
import { UserRepository } from "../repository/userRepository";
import { result } from "../data";
const router = Router();
const Repostory: UserRepository = new UserRepository();
const endPoint = "/api/account/";

router.post(`${endPoint}register`, async (req, res) => {
  try {
    const result = await Repostory.add(req.body);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});
router.post(`${endPoint}login`, async (req, res) => {
  try {
    const result = await Repostory.login(req.body);
    if (!result) return res.status(500).send(null);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).send(error);
  }
});

export default router;
