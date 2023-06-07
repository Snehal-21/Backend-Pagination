import express from "express";
import { addProduct, pagination } from "../Controllers/productControllers.js";

const router=express.Router();
router.post('/addProduct',addProduct);
router.get('/pagination',pagination)

export default router;