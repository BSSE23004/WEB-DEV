//Product Routes
const express = require("express");
const router = express.Router();

const {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require("../controller/productController");

// Define the route for getting all products
router.get("/products", getAllProducts);

// Define the route for creating a new product
router.post("/products", createProduct);

// Define the route for updating a product by ID
router.put("/products/:id", updateProduct);

// Define the route for deleting a product by ID
router.delete("/products/:id", deleteProduct);

module.exports = router;
