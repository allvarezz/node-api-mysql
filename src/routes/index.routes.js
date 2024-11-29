import { Router } from "express";
import { getindex } from "../controllers/index.controllers.js";


const router=Router()


router.get('/db',getindex)


export default router