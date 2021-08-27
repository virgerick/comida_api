import { User } from "../models/User";
import { Router } from "express";
import { UserRepository } from "../repository/userRepository";
import { result } from "../data";
import { Result } from '../models/Result';
const router = Router();
const Repostory: UserRepository = new UserRepository();
const endPoint = "/api/account/";

router.post(`${endPoint}register`, async (req, res) => {
  try {
    const result = await Repostory.add(req.body);
    res.json(Result.successFull(result,["Usuaro registrado satifastoriamente."]));
  } catch (error:any) {
    res.json(Result.fail([error.toString()]));
  }
});
router.post(`${endPoint}login`, async (req, res) => {
  try {
    const result = await Repostory.login(req.body);
    if (!result) return res.send(Result.fail(["Credenciales invalidas."]));
    return res.status(200).json(Result.successFull(result,[]));
  } catch (error) {
    return res.status(500).send(error);
  }
});

export default router;
