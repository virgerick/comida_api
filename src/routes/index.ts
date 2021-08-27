import express from "express";
import platoRoutes from "./plato.route";
import userRoutes from "./user.route";
import accountRoutes from "./account.route";
import rolRoutes from "./rol.route";
import permissionRoutes from "./permission.route";
import categoryRoutes from "./category.route";
import { EndPoint } from "../config/endPoints";
const router = express.Router();
router.get(EndPoint.Home, (req, res) => {
  const endPoints = Object.entries(EndPoint);
  res.send(endPoints);
});

router.use(accountRoutes);
router.use(userRoutes);
router.use(rolRoutes);
router.use(permissionRoutes);
router.use(categoryRoutes);
router.use(platoRoutes);

export default router;
