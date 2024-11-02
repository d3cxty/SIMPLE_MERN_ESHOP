import express from 'express';
import app from '../controllers/products.controller.js';
const router = express.Router();
router.use(express.json());

router.post('/product/add',app.addproduct);
router.get('/product/find/',app.findproduct);
router.get('/product/find/:id',app.findproductById);
router.delete('/product/delete/:id',app.deleteproduct)

export default router;