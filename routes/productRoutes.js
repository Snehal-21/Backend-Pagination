import express from "express";
import { addProduct, color_Filter, pagination, price_Filter } from "../Controllers/productControllers.js";

const router=express.Router();
router.post('/addProduct',addProduct);
router.get('/pagination',pagination);
router.get('/color_Filter',color_Filter);
router.get('/price_Filter',price_Filter);

export default router;