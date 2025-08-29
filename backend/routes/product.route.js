import express from "express"
import {
    getProducts,
    createProduct,
    deleteProduct,
    updateProduct
 } from "../controllers/product.controller.js"

const router = express.Router();

// Get all products
router.get("/", getProducts);

//create a product
router.post("/", createProduct);

//Delete a product via the unique ID
router.delete("/:id", deleteProduct);

//Update a product via the unique ID
//patch method is used to update some parts of a resource
//put method is used to update all fields of a resource
router.put("/:id", updateProduct);

export default router;