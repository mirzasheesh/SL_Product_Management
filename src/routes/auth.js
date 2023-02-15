const express = require('express');
const router = express.Router();

const { listCategory, listAllCategory, addCategory, deleteCategory, updateCategory } = require('../controllers/category'); // Category Model
const { listProduct, listAllProduct, addProduct, deleteProduct, updateProduct } = require('../controllers/products'); // Product Model

/* Categories */

router.get('/category/readAll', listAllCategory); // List Categories
router.get('/category/read/:categoryID', listCategory); // Get Category
router.delete('/category/delete/:categoryID', deleteCategory); // Remove Category
router.post('/category/create', addCategory); // Add New Category
router.put('/category/update/:categoryID', updateCategory); // Update Category

/* Products */

router.get('/product/readAll', listAllProduct); // List Products
router.get('/product/read/:productID', listProduct); // Get Product
router.delete('/product/delete/:productID', deleteProduct); // Remove Product
router.post('/product/create', addProduct); // Add New Product
router.put('/product/update/:productID', updateProduct); // Update Product

module.exports = router;