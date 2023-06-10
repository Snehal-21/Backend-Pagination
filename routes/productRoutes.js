import express from "express";
import { addProduct, color_Filter, filter, pagination, price_Filter } from "../Controllers/productControllers.js";

const router=express.Router();
router.post('/addProduct',addProduct);
router.post('/pagination',pagination);
router.post('/color_Filter',color_Filter);
router.post('/price_Filter',price_Filter);
router.post('/filter',filter);

export default router;