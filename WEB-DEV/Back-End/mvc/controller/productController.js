//Product Controller
const ProductModel = require("../model/productModel");

//bussiness logic

//Read all products

const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    if (!products || products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
};

// Create a new product

const createProduct = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    if (!name || !description || !price || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newProduct = new ProductModel({
      name,
      description,
      price,
      category,
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Error creating product" });
  }
};

// Update a product

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, category } = req.body;
    if (!name || !description || !price || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      id,
      { name, description, price, category },
      { new: true, runValidators: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Error updating product" });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedProduct = await ProductModel.findByIdAndDelete(id);
    if (!deletedProduct) {
      res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product" });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
