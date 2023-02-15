const express = require('express');
const router = express.Router();

const { listCategory, listAllCategory, addCategory, deleteCategory, updateCategory } = require('../controllers/category'); // Category Model
const { listProduct, listAllProduct, addProduct, deleteProduct, updateProduct } = require('../controllers/products'); // Product Model

/* Categories */

router.get('/category/all', listAllCategory); // List Categories
router.get('/category/:categoryID', listCategory); // Get Category
router.delete('/category/:categoryID', deleteCategory); // Remove Category
router.post('/category', addCategory); // Add New Category
router.put('/category/:categoryID', updateCategory); // Update Category

/* Products */

router.get('/product/all', listAllProduct); // List Products
router.get('/product/:productID', listProduct); // Get Product
router.delete('/product/:productID', deleteProduct); // Remove Product
router.post('/product', addProduct); // Add New Product
router.put('/product/:productID', updateProduct); // Update Product

module.exports = router;