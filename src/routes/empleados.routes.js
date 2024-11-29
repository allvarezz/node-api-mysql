import { Router } from "express";
import {
  getEmpleados,
  creEmpleado,
  upEmpleado,
  delEmpleado,
  getEmpleado
} from "../controllers/empleados.controllers.js";

const router = Router();

router.get("/empleados", getEmpleados);
router.get("/empleados/:id", getEmpleado);
router.post("/empleados", creEmpleado);
router.patch("/empleados/:id", upEmpleado);
router.delete("/empleados/:id", delEmpleado);

export default router;
